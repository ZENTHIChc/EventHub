"use client"
import { Check, Download } from "lucide-react"

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

interface PaymentSuccessProps {
  orderData: CheckoutData
  onBackToHome: () => void
}

export default function PaymentSuccess1({ orderData, onBackToHome }: PaymentSuccessProps) {
  const formatPrice = (price: number): string => `Rp ${price.toLocaleString("id-ID")}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full p-4">
            <Check className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Pembayaran Berhasil</h1>
        <p className="text-center text-gray-600 mb-6">
          Terima kasih telah memesan tiket. Ticket Anda telah dikirim ke email.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6 space-y-4">
          <div className="border-b pb-4">
            <p className="text-sm text-gray-600 mb-1">Event</p>
            <p className="font-bold text-gray-900">{orderData.event.title}</p>
          </div>

          <div className="border-b pb-4">
            <p className="text-sm text-gray-600 mb-1">Tanggal</p>
            <p className="font-bold text-gray-900">{orderData.event.date}</p>
          </div>

          <div className="border-b pb-4">
            <p className="text-sm text-gray-600 mb-1">Lokasi</p>
            <p className="font-bold text-gray-900">{orderData.event.location}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Paket Pemesanan</p>
            <div className="space-y-2">
              {orderData.packages.map((pkg) => (
                <div key={pkg.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">
                    {pkg.name} x{pkg.quantity}
                  </span>
                  <span className="font-semibold text-gray-900">{formatPrice(pkg.price * pkg.quantity)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 mb-6 border border-yellow-200">
          <p className="text-sm text-gray-600 mb-1">Total Pembayaran</p>
          <p className="text-2xl font-bold text-yellow-600">{formatPrice(orderData.subtotal + 5000)}</p>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Tiket
          </button>

          <button
            onClick={onBackToHome}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-xl transition-all"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  )
}
