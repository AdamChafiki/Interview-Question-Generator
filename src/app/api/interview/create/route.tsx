import genAI from "@/lib/gemini";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId, jobTitle, jobDescription } = await req.json();

  if (!userId || !jobTitle || !jobDescription) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Generate exactly 5 interview questions for a ${jobTitle} position. 
  The candidate must be proficient in ${jobDescription}. 
  Format the response as a simple list without extra headings or explanations. 
  Ensure:
  1. Two questions test technical skills.
  2. Two questions assess practical experience.
  3. One question evaluates ethical decision-making.
  Return only the questions without numbering or categorization.`;

  try {
    const result = await model.generateContent(prompt);
    const textResponse = result.response.candidates?.[0]?.content?.parts?.map(part => part.text).join("\n");

    if (!textResponse) {
      return Response.json({ error: "Failed to generate questions" }, { status: 500 });
    }

    const questions = textResponse.split("\n").filter(q => q.trim() !== "").slice(0, 5);

    const job = await prisma.job.create({
      data: {
        title: jobTitle,
        description: jobDescription,
        userId: userId,
      },
    });

    await prisma.interviewQuestion.createMany({
      data: questions.map(question => ({
        jobId: job.id,
        question: question.trim(),
      })),
    });

    return Response.json({
      message: "Job and questions created successfully",
      jobId: job.id,
      storedQuestions: questions.length,
    }, { status: 201 });

  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
