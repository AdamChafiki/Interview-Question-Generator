"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { MessageSquare } from "lucide-react"

interface JobInterviewCardProps {
  title: string
  description: string
  questions?: string[]
}

export default function JobInterviewCard({
  title = "Frontend Developer",
  description = "Build responsive web applications using modern JavaScript frameworks.",
  questions = [
    "Tell me about your experience with React and other frontend frameworks.",
    "How do you approach responsive design?",
    "Describe a challenging project you worked on and how you solved problems.",
    "How do you stay updated with the latest frontend technologies?",
    "Can you explain your debugging process when encountering an issue?",
  ],
}: JobInterviewCardProps) {
  const [isInterviewOpen, setIsInterviewOpen] = useState(false)

  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => setIsInterviewOpen(true)}>
            Start Interview
            <MessageSquare className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isInterviewOpen} onOpenChange={setIsInterviewOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Interview Questions: {title}</DialogTitle>
            <DialogDescription>Prepare your answers for the following questions.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <ul className="space-y-3">
              {questions.map((question, index) => (
                <li key={index} className="p-3 bg-muted rounded-md">
                  <p className="font-medium">
                    Q{index + 1}: {question}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsInterviewOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

