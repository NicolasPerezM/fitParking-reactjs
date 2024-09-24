import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"

const subscriptions = [
  {
    type: "Daily Parking",
    startsIn: 3,
    date: "Nov 3, 2024, 8:00am EST",
    expiresIn: 1,
    image: "/placeholder.svg?height=100&width=200"
  },
  {
    type: "Event Parking",
    startsIn: 2,
    date: "Nov 4, 2024, 12:00am EST",
    expiresIn: 1,
    image: "/placeholder.svg?height=100&width=200"
  }
]

export default function ClientDashboard() {
  const handleExtend = () => {
    console.log("Extend parking")
  }

  const handleExtendReservation = (type: string) => {
    console.log(`Extend reservation for ${type}`)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, <span className="text-yellow-400">Lily</span></h1>
        <p className="text-gray-400">Your Dashboard</p>
      </header>

      <main className="space-y-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl">Current Parking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-2">
              <MapPin className="text-yellow-400 mt-1" />
              <div>
                <p>Valid until 10:00 pm</p>
                <p className="text-sm text-gray-400">Parking Ronda, 123 Mission st</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">$15.00</span>
              <Button onClick={handleExtend} className="bg-yellow-400 text-black hover:bg-yellow-500">
                Extend
              </Button>
            </div>
          </CardContent>
        </Card>

        <section>
          <h2 className="text-2xl font-bold mb-4">Subscriptions</h2>
          <div className="grid gap-4">
            {subscriptions.map((sub, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={sub.image} 
                      alt={sub.type} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded">
                      Starts in {sub.startsIn} days
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold">{sub.type}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="mr-2 h-4 w-4" />
                      {sub.date}
                    </div>
                    <p className="text-sm text-gray-400">Expires in {sub.expiresIn} days</p>
                    <Button 
                      onClick={() => handleExtendReservation(sub.type)} 
                      className="bg-yellow-400 text-black hover:bg-yellow-500 w-full"
                    >
                      Extend reservation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}