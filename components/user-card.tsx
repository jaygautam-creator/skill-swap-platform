"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import SwapRequestModal from "./swap-request-modal"

interface User {
  id: number
  name: string
  photo: string
  rating: number
  skillsOffered: string[]
  skillsWanted: string[]
  availability: string
}

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={user.photo || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{user.rating}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Skills Offered:</p>
                  <div className="flex flex-wrap gap-1">
                    {user.skillsOffered.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Skills Wanted:</p>
                  <div className="flex flex-wrap gap-1">
                    {user.skillsWanted.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Available:</span> {user.availability}
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>
                  Request
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <SwapRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={user} />
    </>
  )
}
