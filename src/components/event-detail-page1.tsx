"use client"

import { useState } from "react"
import { Calendar, MapPin, Ticket, Shield, ChevronLeft } from "lucide-react"

interface EventData {
  image: string
  title: string
  organizer: string
  date: string
  location: string
  ticketsLeft: string
  price: string
}

interface Package {
  id: number
  name: string
  description: string
  price: number
  slotsLeft: number
  benefits: string[]
}

interface CheckoutData {
  event: {
    title: string
    companyName: string
    date: string
    location: string
    image: string
  }
  packages: {
    id: number
    name: string
    price: number
    quantity: number
  }[]
  subtotal: number
}

interface EventDetailPageProps {
  event: EventData
  onBack: () => void
  onCheckout: (data: CheckoutData) => void
}

export default function EventDetailPage1({ event, onBack, onCheckout }: EventDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string>(event?.image || "")
  const [ticketCounts, setTicketCounts] = useState<Record<number, number>>({})

  const packages: Package[] = [
    {
      id: 1,
      name: "Regular",
      description: "Tiket regular dengan akses penuh",
      price: 50000,
      slotsLeft: 300,
      benefits: ["Akses 3 hari penuh", "Welcome drink"],
    },
    {
      id: 2,
      name: "VIP Experience",
      description: "Pengalaman VIP eksklusif",
      price: 350000,
      slotsLeft: 200,
      benefits: ["Akses 3 hari penuh", "Welcome drink", "Meet & Greet"],
    },
    {
      id: 3,
      name: "Premium",
      description: "Paket premium terlengkap",
      price: 3500000,
      slotsLeft: 50,
      benefits: ["Akses 3 hari penuh", "Welcome drink", "VIP Lounge", "Souvenir eksklusif"],
    },
  ]

  const galleryImages = [event?.image, event?.image, event?.image, event?.image].filter(Boolean)

  const handleIncrement = (packageId: number): void => {
    setTicketCounts((prev) => ({
      ...prev,
      [packageId]: (prev[packageId] || 0) + 1,
    }))
  }

  const handleDecrement = (packageId: number): void => {
    setTicketCounts((prev) => ({
      ...prev,
      [packageId]: Math.max(0, (prev[packageId] || 0) - 1),
    }))
  }

  const getTotalTickets = (): number => {
    return Object.values(ticketCounts).reduce((sum, count) => sum + count, 0)
  }

  const getTotalPrice = (): number => {
    return packages.reduce((sum, pkg) => {
      const count = ticketCounts[pkg.id] || 0
      return sum + pkg.price * count
    }, 0)
  }

  const formatPrice = (price: number): string => {
    return `Rp ${price.toLocaleString("id-ID")}`
  }

  const handleBuyNow = (): void => {
    const selectedPackages = packages
      .filter((pkg) => ticketCounts[pkg.id] > 0)
      .map((pkg) => ({
        id: pkg.id,
        name: pkg.name,
        price: pkg.price,
        quantity: ticketCounts[pkg.id],
      }))

    if (selectedPackages.length === 0) {
      alert("Silakan pilih minimal 1 tiket")
      return
    }

    onCheckout({
      event: {
        title: event?.title || "",
        companyName: event?.organizer || "",
        date: event?.date || "",
        location: event?.location || "",
        image: event?.image || "",
      },
      packages: selectedPackages,
      subtotal: getTotalPrice(),
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={onBack} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-6">
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="text-sm font-medium">Kembali ke Beranda</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={selectedImage || event?.image}
                  alt={event?.title || "Event"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === image ? "border-yellow-400" : "border-transparent"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{event?.title || "Event"}</h1>
              <p className="text-gray-600 mb-6">{event?.organizer || "Organizer"}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-xl">
                  <Calendar className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{event?.date || "-"}</p>
                    <p className="text-sm text-gray-600">19:00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-xl">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{event?.location || "-"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Event</h2>
              <p className="text-gray-700 leading-relaxed">
                Bergabunglah dengan kami untuk pengalaman tak terlupakan! Event ini menghadirkan hiburan kelas dunia
                dengan fasilitas lengkap dan kenyamanan maksimal untuk semua pengunjung.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Ticket className="w-5 h-5 text-yellow-400" />
                  <h2 className="text-xl font-bold text-gray-900">Pilih Paket</h2>
                </div>

                <div className="space-y-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="border-2 border-gray-200 rounded-xl p-4 hover:border-yellow-400 transition-all"
                    >
                      <h3 className="font-bold text-gray-900 mb-1">{pkg.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>

                      <div className="space-y-1 mb-3">
                        {pkg.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-700">
                            <span className="text-yellow-500 mr-2">✓</span>
                            {benefit}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{formatPrice(pkg.price)}</p>
                          <p className="text-xs text-yellow-600 font-medium">{pkg.slotsLeft} tiket tersisa</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <button
                          onClick={() => handleDecrement(pkg.id)}
                          className="w-8 h-8 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 font-bold"
                        >
                          -
                        </button>
                        <span className="font-semibold">{ticketCounts[pkg.id] || 0}</span>
                        <button
                          onClick={() => handleIncrement(pkg.id)}
                          className="w-8 h-8 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4 bg-green-50 p-3 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Pembayaran Aman</span>
                </div>

                <div className="flex justify-between items-center mb-4 pb-4 border-b">
                  <span className="text-gray-700">Total ({getTotalTickets()} tiket)</span>
                  <span className="text-2xl font-bold">{formatPrice(getTotalPrice())}</span>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 rounded-xl transition-all"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
