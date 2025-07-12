import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="sm" disabled>
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </Button>

      <div className="flex space-x-1">
        <Button variant="default" size="sm" className="bg-blue-600">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <span className="px-2 py-1 text-sm text-gray-500">...</span>
        <Button variant="outline" size="sm">
          10
        </Button>
      </div>

      <Button variant="outline" size="sm">
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  )
}
