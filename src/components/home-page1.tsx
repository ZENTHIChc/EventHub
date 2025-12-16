"use client"
import Pcard1 from "./pcard1"

interface EventData {
  image: string
  title: string
  organizer: string
  date: string
  location: string
  ticketsLeft: string
  price: string
}

interface HomePageProps {
  onSelectEvent: (event: EventData) => void
}

export default function HomePage1({ onSelectEvent }: HomePageProps) {
  const events: EventData[] = [
    {
      image: "/community-event.png",
      title: "Community Event 2024",
      organizer: "Community Team",
      date: "Dec 15, 2024",
      location: "Jakarta Convention Center",
      ticketsLeft: "150 tiket tersisa",
      price: "Rp 150.000",
    },
    {
      image: "/vibrant-concert-stage.png",
      title: "Vibrant Concert Stage",
      organizer: "Music Events",
      date: "Dec 20, 2024",
      location: "Gelora Bung Karno",
      ticketsLeft: "300 tiket tersisa",
      price: "Rp 250.000",
    },
    {
      image: "/workshop.png",
      title: "Workshop Gratis",
      organizer: "Tech Academy",
      date: "Dec 18, 2024",
      location: "Tech Hub Building",
      ticketsLeft: "50 tiket tersisa",
      price: "Gratis",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Temukan Event Terbaik</h1>
          <p className="text-gray-600">Jelajahi berbagai acara menarik di kota Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Pcard1 key={index} {...event} onClick={() => onSelectEvent(event)} />
          ))}
        </div>
      </div>
    </div>
  )
}
