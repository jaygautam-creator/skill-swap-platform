import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Ban, UserCheck } from "lucide-react"

const mockUsers = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com", status: "active", joinDate: "2024-01-01" },
  { id: 2, name: "Mike Chen", email: "mike@example.com", status: "active", joinDate: "2024-01-05" },
  { id: 3, name: "Emily Rodriguez", email: "emily@example.com", status: "banned", joinDate: "2024-01-03" },
  { id: 4, name: "David Kim", email: "david@example.com", status: "active", joinDate: "2024-01-07" },
]

const mockSwapRequests = [
  {
    id: 1,
    requester: "Sarah Johnson",
    recipient: "Mike Chen",
    skillOffered: "React",
    skillWanted: "Python",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: 2,
    requester: "Emily Rodriguez",
    recipient: "David Kim",
    skillOffered: "UI/UX Design",
    skillWanted: "Java",
    status: "accepted",
    date: "2024-01-12",
  },
  {
    id: 3,
    requester: "Mike Chen",
    recipient: "Sarah Johnson",
    skillOffered: "Python",
    skillWanted: "TypeScript",
    status: "rejected",
    date: "2024-01-10",
  },
]

export default function AdminPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "banned":
        return <Badge className="bg-red-100 text-red-800">Banned</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "accepted":
        return <Badge className="bg-green-100 text-green-800">Accepted</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Manage users, requests, and platform settings</p>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="requests">Swap Requests</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{user.name}</span>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {user.status === "active" ? (
                              <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                                <Ban className="w-4 h-4 mr-1" />
                                Ban
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline" className="text-green-600 bg-transparent">
                                <UserCheck className="w-4 h-4 mr-1" />
                                Unban
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests">
            <Card>
              <CardHeader>
                <CardTitle>Swap Requests Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Requester</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Skills Exchange</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockSwapRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.requester}</TableCell>
                        <TableCell>{request.recipient}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2 text-sm">
                            <Badge variant="secondary">{request.skillOffered}</Badge>
                            <span>→</span>
                            <Badge variant="outline">{request.skillWanted}</Badge>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>{request.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Platform-wide Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message Title</label>
                  <Input placeholder="Enter message title..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message Content</label>
                  <Textarea placeholder="Enter your platform-wide message..." rows={6} />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Send Message to All Users</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Activity Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Download a comprehensive report of user activity, including registrations, skill exchanges, and
                    engagement metrics.
                  </p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download User Activity CSV
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feedback Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Export user feedback, ratings, and reviews to analyze platform satisfaction and areas for
                    improvement.
                  </p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Feedback CSV
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
