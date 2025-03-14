"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import AuthGuard from "@/components/auth-guard"
import { toast } from "sonner"
import inputValidation from "@/utils/validation"
import { useAuth } from "@/hooks/useAuth"

export default function CreateJobPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValidation(jobTitle) && !inputValidation(jobDescription)) {
      return toast.warning("Please enter a valid input")
    }

    try {
      setIsSubmitting(true)
      await fetch("/api/interview/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobTitle, jobDescription, userId: user?.uid }),
      })
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success("Job created successfully")
      router.push("/dashboard")
    } catch (error) {
      console.error("Error creating job:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthGuard fallbackUrl="/login">
      <div className="max-w-3xl mx-auto p-4">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Create Job Interview</h1>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader className="mb-5">
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="e.g. Frontend Developer, UX Designer, Data Scientist"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobDescription">Job Description</Label>
                <Textarea
                  id="jobDescription"
                  placeholder="Describe the job role and responsibilities"
                  rows={4}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              {/* Preview section */}
              {(jobTitle || jobDescription) && (
                <div className="border rounded-md p-4 bg-muted/50">
                  <h3 className="font-medium mb-2">Preview:</h3>
                  {jobTitle && <p className="font-bold">{jobTitle}</p>}
                  {jobDescription && <p className="text-sm mt-1 text-muted-foreground">{jobDescription}</p>}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-end mt-5">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && (
                  <span className="mr-2 animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-background"></span>
                )}
                {isSubmitting ? "Genrating..." : "Generate Interview Questions"}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </AuthGuard>
  )
}
