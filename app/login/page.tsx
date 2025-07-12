import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your Skill Swap Platform account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" className="w-full" />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign In</Button>

          <div className="text-center">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
              Forgot username/password?
            </Link>
          </div>

          <div className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/signup" className="text-blue-600 hover:text-blue-800 hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
