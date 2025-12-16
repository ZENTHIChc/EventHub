"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, MapPin, Users, Ticket, Shield, ChevronLeft, Check } from "lucide-react"

// ==================== TYPES ====================
interface EventData {
  image: string
  title: string
  organizer: string
  date: string
  location: string
  ticketsLeft: string
  price: string
}

interface PcardProps extends EventData {
  onClick?: () => void
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

// ==================== PCARD COMPONENT ====================
export const Pcard: React.FC<PcardProps> = ({
  image,
  title,
  organizer,
  date,
  location,
  ticketsLeft,
  price,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        {/* Organizer */}
        <p className="text-gray-500 text-sm mb-3">{organizer}</p>
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
  )
}

// ==================== EVENT DETAIL PAGE ====================
export const EventDetailPage: React.FC<{
  event: EventData
  onBack: () => void
  onCheckout: (data: CheckoutData) => void
}> = ({ event, onBack, onCheckout }) => {
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

// ==================== PAYMENT PAGE ====================
export const PaymentPage: React.FC<{
  orderData: CheckoutData
  onBack: () => void
  onPaymentSuccess: () => void
}> = ({ orderData, onBack, onPaymentSuccess }) => {
  const [selectedPayment, setSelectedPayment] = useState<string>("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  })

  const formatPrice = (price: number): string => `Rp ${price.toLocaleString("id-ID")}`
  const calculateAdminFee = (): number => 5000
  const calculateTotal = (): number => orderData.subtotal + calculateAdminFee()

  const paymentMethods = [
    { id: "qris", name: "QRIS" },
    { id: "ewallet", name: "E-Wallet" },
    { id: "va", name: "Virtual Account" },
  ]

  const handleSubmit = () => {
    if (!formData.fullName?.trim() || !formData.email?.trim() || !formData.phone?.trim()) {
      alert("Mohon lengkapi semua data diri")
      return
    }
    if (!selectedPayment) {
      alert("Mohon pilih metode pembayaran")
      return
    }
    onPaymentSuccess()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={onBack} className="flex items-center text-gray-700 hover:text-gray-900 mb-6">
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="text-sm font-medium">Kembali</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex gap-4">
                <img
                  src={orderData.event.image || "/placeholder.svg"}
                  alt={orderData.event.title}
                  className="w-32 h-24 rounded-xl object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold mb-1">{orderData.event.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{orderData.event.companyName}</p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {orderData.event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {orderData.event.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Data Diri</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukan nama lengkap"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">No. Telephone</label>
                  <input
                    type="tel"
                    placeholder="081234556789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Metode Pembayaran</h2>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      selectedPayment === method.id ? "border-yellow-400 bg-yellow-50" : "border-gray-200"
                    }`}
                  >
                    <span className="font-semibold">{method.name}</span>
                    <span className="font-bold">{formatPrice(calculateTotal())}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Ringkasan Pesanan</h2>

              <div className="space-y-4 mb-6">
                {orderData.packages.map((pkg) => (
                  <div key={pkg.id} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold">{pkg.name}</h3>
                        <p className="text-sm text-gray-600">{pkg.quantity}x tiket</p>
                      </div>
                      <p className="font-bold">{formatPrice(pkg.price * pkg.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pb-4 border-b">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(orderData.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Admin</span>
                  <span className="font-semibold">{formatPrice(calculateAdminFee())}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 my-4 bg-green-50 p-3 rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Pembayaran Aman</span>
              </div>

              <div className="flex justify-between items-center mb-6 pt-4 border-t">
                <span className="font-semibold">Total</span>
                <span className="text-2xl font-bold text-yellow-500">{formatPrice(calculateTotal())}</span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 rounded-xl transition-all"
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ==================== PAYMENT SUCCESS PAGE ====================
export const PaymentSuccess: React.FC<{
  orderData: CheckoutData
  onBackToHome: () => void
}> = ({ orderData, onBackToHome }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full p-4">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Pembayaran Berhasil!</h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          Yeay! Tiket Anda sudah terbeli. E-ticket akan dikirim ke email dalam 5 menit.
        </p>

        <div className="border-2 border-gray-200 rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Order ID:</span>
            <span className="font-semibold">#EVT-2024-{Math.floor(Math.random() * 100000)}</span>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Event:</span>
            <span className="font-semibold text-right">{orderData.event.title}</span>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Tanggal:</span>
            <span className="font-semibold">{orderData.event.date}</span>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Total Ticket:</span>
            <span className="font-semibold">
              {orderData.packages.reduce((sum, pkg) => sum + pkg.quantity, 0)} Ticket
            </span>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-600 text-sm">Total Pembayaran:</span>
            <span className="font-bold text-xl">Rp {(orderData.subtotal + 5000).toLocaleString("id-ID")}</span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition">
            Lihat E-Ticket
          </button>
          <button
            onClick={onBackToHome}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  )
}
