import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";

interface EventCardProps {
  image: string;
  title: string;
  organizer: string;
  date: string;
  location: string;
  ticketsLeft: string;
  price: string;
}

export default function Pcard({
  image,
  title,
  organizer,
  date,
  location,
  ticketsLeft,
  price
}: EventCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-black mb-2">
          {title}
        </h3>
        {/* Organizer */}
        <p className="text-gray-500 text-sm mb-3">
          {organizer}
        </p>
        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {/* Date */}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Calendar className="w-5 h-5 text-yellow-500" />
            <span>{date}</span>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin className="w-5 h-5 text-yellow-500" />
            <span>{location}</span>
          </div>
          {/* Tickets */}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Users className="w-5 h-5 text-yellow-500" />
            <span>{ticketsLeft}</span>
          </div>
        </div>
        {/* Price */}
        <div className="pt-3 border-t border-gray-200">
          <p className="text-gray-500 text-xs mb-1">Mulai dari</p>
          <p className="text-2xl font-bold text-black">{price}</p>
        </div>
      </div>
    </div>
  );
}