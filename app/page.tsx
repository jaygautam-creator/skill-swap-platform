import Header from "@/components/header"
import UserCard from "@/components/user-card"
import SearchFilters from "@/components/search-filters"
import Pagination from "@/components/pagination"

const mockUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.8,
    skillsOffered: ["React", "TypeScript", "Node.js"],
    skillsWanted: ["Python", "Machine Learning"],
    availability: "Evenings",
  },
  {
    id: 2,
    name: "Mike Chen",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.6,
    skillsOffered: ["Python", "Data Science", "SQL"],
    skillsWanted: ["React", "Frontend Development"],
    availability: "Weekends",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.9,
    skillsOffered: ["UI/UX Design", "Figma", "Adobe Creative Suite"],
    skillsWanted: ["Web Development", "JavaScript"],
    availability: "Flexible",
  },
  {
    id: 4,
    name: "David Kim",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.7,
    skillsOffered: ["Java", "Spring Boot", "AWS"],
    skillsWanted: ["DevOps", "Kubernetes"],
    availability: "Evenings",
  },
  {
    id: 5,
    name: "Lisa Wang",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.5,
    skillsOffered: ["Digital Marketing", "SEO", "Content Strategy"],
    skillsWanted: ["Analytics", "Data Visualization"],
    availability: "Weekends",
  },
  {
    id: 6,
    name: "Alex Thompson",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.8,
    skillsOffered: ["Mobile Development", "Flutter", "iOS"],
    skillsWanted: ["Backend Development", "API Design"],
    availability: "Flexible",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Skill Match</h1>
          <p className="text-gray-600">Connect with others to exchange skills and grow together</p>
        </div>

        <SearchFilters />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {mockUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        <Pagination />
      </main>
    </div>
  )
}
