"use client"
import { Calendar, MapPin, Users } from "lucide-react"

interface PcardProps {
  image: string
  title: string
  organizer: string
  date: string
  location: string
  ticketsLeft: string
  price: string
  onClick?: () => void
}

export default function Pcard1({ image, title, organizer, date, location, ticketsLeft, price, onClick }: PcardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
    >
      <div className="relative h-48 w-full">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{organizer}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Calendar className="w-5 h-5 text-yellow-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin className="w-5 h-5 text-yellow-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Users className="w-5 h-5 text-yellow-500" />
            <span>{ticketsLeft}</span>
          </div>
        </div>
        <div className="pt-3 border-t border-gray-200">
          <p className="text-gray-500 text-xs mb-1">Mulai dari</p>
          <p className="text-2xl font-bold text-black">{price}</p>
        </div>
      </div>
    </div>
  )
}
