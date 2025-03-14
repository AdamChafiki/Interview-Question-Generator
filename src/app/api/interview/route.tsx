import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    // Get the user ID from the custom header
    const userId = request.headers.get("X-USERID");

    if (!userId) {
      return Response.json({ error: "Unauthorized - User ID not provided" }, { status: 401 });
    }

    // Get jobs for the specified user
    const jobs = await prisma.job.findMany({
      where: {
        userId: userId
      },
      include: {
        interviewQuestions: true
      }
    });

    const formattedJobs = jobs.map(job => ({
      title: job.title,
      description: job.description,
      questions: job.interviewQuestions.map(q => q.question.replace(/^\*\s*/, "")) // Remove leading "* "
    }));

    return Response.json(formattedJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
