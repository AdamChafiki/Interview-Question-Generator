"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import { logOut } from "@/lib/auth"
import AuthGuard from "@/components/auth-guard"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import JobInterviewCard from "@/components/job-interview-card"
import { Card } from "@/components/ui/card"
import { LogOut } from "lucide-react"
import LoadingInterviewCard from "@/components/loading-interview-card"

export default function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false)
  const [jobOptions, setJobOptions] = useState<any[]>([]) // Define state for job options
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobOptions = async () => {
      try {
        setLoading(true);

        // Only proceed if user exists
        if (!user) {
          throw new Error("User not authenticated");
          return;
        }

        const headers = new Headers();
        headers.append("X-USERID", user.uid);

        const response = await fetch("http://localhost:3000/api/interview", {
          headers: headers
        });

        if (!response.ok) {
          throw new Error("Failed to fetch job interview options");
        }

        const data = await response.json();
        setJobOptions(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching job options:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchJobOptions();
    }
  }, [user]);

  // Handle logout
  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await logOut()
      router.push("/login")
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <AuthGuard fallbackUrl="/login">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center">
            <Image src="/logo.png" width={25} height={25} alt="Logo" />
            <h1 className="ml-2 text-xl font-semibold text-gray-500">AI Interview Simulator</h1>
          </div>

          <div className="flex gap-3">
            <Button asChild variant="default">
              <Link href="/interview/create">Create Custom Interview</Link>
            </Button>

            <Button onClick={handleLogout} disabled={isLoggingOut} variant="destructive">
              {isLoggingOut && (
                <span className="mr-2 animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
              )}
              {isLoggingOut ? "Signing Out..." : "Sign Out"}
              {!isLoggingOut && <LogOut className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>

        {user && (
          <Card className="p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {user.photoURL ? (
                <img
                  src={user.photoURL || "/placeholder.svg"}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                  {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                </div>
              )}
              <div className="text-center sm:text-left">
                <p className="font-bold text-lg">{user.displayName || "User"}</p>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-xs text-muted-foreground mt-1">Last login: {user.metadata.lastSignInTime}</p>
              </div>
            </div>
          </Card>
        )}

        <h2 className="text-2xl font-bold mb-6">Practice Interviews</h2>
        <p className="text-muted-foreground mb-8">
          Select a job position below to practice interview questions. Click "Start Interview" to see common questions
          for that role.
        </p>

        {loading && <LoadingInterviewCard />}
        {error && <p>Error: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!loading && !error && jobOptions.map((job, index) => (
            <JobInterviewCard key={index} title={job.title} description={job.description} questions={job.questions} />
          ))}
        </div>
      </div>
    </AuthGuard>
  )
}
