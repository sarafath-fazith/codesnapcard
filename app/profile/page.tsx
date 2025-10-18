import { UserProfile } from "@/components/profile/user-profile"
import { UserStats } from "@/components/profile/user-stats"
import { UserPurchases } from "@/components/profile/user-purchases"
import { UserSettings } from "@/components/profile/user-settings"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <UserProfile />
          <UserStats />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <UserPurchases />
            </div>
            <div className="lg:col-span-1">
              <UserSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
