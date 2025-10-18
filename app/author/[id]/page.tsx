import { AuthorProfile } from "@/components/author/author-profile"
import { AuthorPortfolio } from "@/components/author/author-portfolio"
import { AuthorStats } from "@/components/author/author-stats"
import { AuthorCollections } from "@/components/author/author-collections"

interface AuthorPageProps {
  params: {
    id: string
  }
}

export default function AuthorPage({ params }: AuthorPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <AuthorProfile authorId={params.id} />
        <AuthorStats authorId={params.id} />
        <AuthorPortfolio authorId={params.id} />
        <AuthorCollections authorId={params.id} />
      </div>
    </div>
  )
}
