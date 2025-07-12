import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Check, X } from "lucide-react"

const mockRequests = [
  {
    id: 1,
    user: {
      name: "Mike Chen",
      photo: "/placeholder.svg?height=60&width=60",
      rating: 4.6,
    },
    skillOffered: "Python",
    skillWanted: "React",
    message: "Hi! I'd love to help you learn Python in exchange for React knowledge.",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: 2,
    user: {
      name: "Emily Rodriguez",
      photo: "/placeholder.svg?height=60&width=60",
      rating: 4.9,
    },
    skillOffered: "UI/UX Design",
    skillWanted: "JavaScript",
    message: "I can help you with design principles and Figma in exchange for JavaScript tutoring.",
    status: "accepted",
    date: "2024-01-12",
  },
  {
    id: 3,
    user: {
      name: "David Kim",
      photo: "/placeholder.svg?height=60&width=60",
      rating: 4.7,
    },
    skillOffered: "Java",
    skillWanted: "TypeScript",
    message: "Looking forward to learning TypeScript from you while teaching Java concepts.",
    status: "rejected",
    date: "2024-01-10",
  },
]

const sentRequests = [
  {
    id: 4,
    user: {
      name: "Lisa Wang",
      photo: "/placeholder.svg?height=60&width=60",
      rating: 4.5,
    },
    skillOffered: "React",
    skillWanted: "Digital Marketing",
    message: "I'd like to learn about SEO and content strategy from you.",
    status: "pending",
    date: "2024-01-14",
  },
]

function RequestCard({ request, type }: { request: any; type: "received" | "sent" }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "accepted":
        return "Accepted"
      case "rejected":
        return "Rejected"
      default:
        return "Pending"
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={request.user.photo || "/placeholder.svg"} />
            <AvatarFallback>
              {request.user.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{request.user.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{request.user.rating}</span>
                </div>
              </div>
              <Badge className={getStatusColor(request.status)}>{getStatusText(request.status)}</Badge>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              <span className="text-gray-600">{type === "received" ? "Offering:" : "You offered:"}</span>
              <Badge variant="secondary">{request.skillOffered}</Badge>
              <span className="text-gray-600">for</span>
              <Badge variant="outline">{request.skillWanted}</Badge>
            </div>

            <p className="text-gray-700 text-sm">{request.message}</p>

            {type === "received" && request.status === "pending" && (
              <div className="flex space-x-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Check className="w-4 h-4 mr-1" />
                  Accept
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                  <X className="w-4 h-4 mr-1" />
                  Reject
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function RequestsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Swap Requests</h1>
          <p className="text-gray-600">Manage your skill exchange requests</p>
        </div>

        <Tabs defaultValue="received" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="received">Received Requests</TabsTrigger>
            <TabsTrigger value="sent">Sent Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="received" className="space-y-4">
            {mockRequests.length > 0 ? (
              mockRequests.map((request) => <RequestCard key={request.id} request={request} type="received" />)
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500">No requests received yet</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="sent" className="space-y-4">
            {sentRequests.length > 0 ? (
              sentRequests.map((request) => <RequestCard key={request.id} request={request} type="sent" />)
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500">No requests sent yet</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
