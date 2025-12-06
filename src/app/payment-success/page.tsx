'use client';

import React from 'react';
import { Check, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const orderID = searchParams.get('orderId') || `#EVT-2024-${Math.floor(Math.random() * 100000)}`;
  const eventTitle = searchParams.get('eventTitle') || 'Event';
  const eventDate = searchParams.get('eventDate') || '-';
  const totalTickets = searchParams.get('totalTickets') || '1';
  const totalPayment = searchParams.get('totalPayment') || 'Rp 0';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full p-4">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Pembayaran Berhasil! 🎉
        </h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          Yeay! Tiket Anda sudah terbeli. E-ticket akan dikirim ke email dalam 5 menit.
        </p>

        <div className="border-2 border-gray-200 rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Order ID:</span>
            <span className="font-semibold">{orderID}</span>
          </div>
          <div className="border-t border-gray-200"></div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Event:</span>
            <span className="font-semibold text-right">{eventTitle}</span>
          </div>
          <div className="border-t border-gray-200"></div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Tanggal:</span>
            <span className="font-semibold">{eventDate}</span>
          </div>
          <div className="border-t border-gray-200"></div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Total Ticket:</span>
            <span className="font-semibold">{totalTickets} Ticket</span>
          </div>
          <div className="border-t border-gray-200"></div>
          
          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-600 text-sm">Total Pembayaran:</span>
            <span className="font-bold text-xl">{totalPayment}</span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition">
            Lihat E-Ticket
          </button>
          <Link 
            href="/"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
