"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, MapPin, ChevronLeft, Shield } from "lucide-react"

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

interface PaymentPageProps {
  orderData: CheckoutData
  onBack: () => void
  onPaymentSuccess: () => void
}

const PaymentPage: React.FC<PaymentPageProps> = ({ orderData, onBack, onPaymentSuccess }) => {
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

export default PaymentPage
