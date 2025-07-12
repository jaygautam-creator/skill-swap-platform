"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface User {
  id: number
  name: string
  photo: string
  rating: number
  skillsOffered: string[]
  skillsWanted: string[]
  availability: string
}

interface SwapRequestModalProps {
  isOpen: boolean
  onClose: () => void
  user: User
}

export default function SwapRequestModal({ isOpen, onClose, user }: SwapRequestModalProps) {
  const [selectedMySkill, setSelectedMySkill] = useState("")
  const [selectedTheirSkill, setSelectedTheirSkill] = useState("")
  const [message, setMessage] = useState("")

  // Mock user's skills
  const mySkills = ["React", "TypeScript", "Node.js", "Python", "JavaScript"]

  const handleSubmit = () => {
    // Mock submission
    console.log("Swap request submitted:", {
      to: user.id,
      mySkill: selectedMySkill,
      theirSkill: selectedTheirSkill,
      message,
    })
    onClose()
    // Reset form
    setSelectedMySkill("")
    setSelectedTheirSkill("")
    setMessage("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request Skill Swap</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* User Info */}
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user.photo || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{user.rating}</span>
              </div>
            </div>
          </div>

          {/* Skill Selection */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your skill to offer:</label>
              <Select value={selectedMySkill} onValueChange={setSelectedMySkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose one of your skills" />
                </SelectTrigger>
                <SelectContent>
                  {mySkills.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skill you want to learn:</label>
              <Select value={selectedTheirSkill} onValueChange={setSelectedTheirSkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose from their skills" />
                </SelectTrigger>
                <SelectContent>
                  {user.skillsOffered.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Skills Preview */}
          {selectedMySkill && selectedTheirSkill && (
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center space-x-3 text-sm">
                <Badge variant="secondary">{selectedMySkill}</Badge>
                <span className="text-gray-600">↔</span>
                <Badge variant="outline">{selectedTheirSkill}</Badge>
              </div>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message (optional):</label>
            <Textarea
              placeholder="Introduce yourself and explain what you'd like to learn..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Button
              onClick={handleSubmit}
              disabled={!selectedMySkill || !selectedTheirSkill}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Send Request
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
