"use client"

import type React from "react"
import { Check } from "lucide-react"

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

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ orderData, onBackToHome }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full p-4">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Pembayaran Berhasil! 🎉</h1>
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

export default PaymentSuccess
