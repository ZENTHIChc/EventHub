import React from 'react';
import { Check } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full p-4">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Pembayaran Berhasil! 🎉
        </h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          Yeay! Tiket Anda sudah terbeli detail. E-ticket akan dikirim ke email dalam 5 menit.
        </p>

        {/* Order Details Card */}
        <div className="border-2 border-gray-200 rounded-xl p-6 space-y-4">
          {/* Order ID */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Order ID:</span>
            <span className="font-semibold text-gray-800">#EVT-2024-658845</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Event */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Event:</span>
            <span className="font-semibold text-gray-800 text-right">Formula 1 Race</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Date */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Tanggal:</span>
            <span className="font-semibold text-gray-800">15-17 Desember 2024</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Total Ticket */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Total Ticket:</span>
            <span className="font-semibold text-gray-800">1 Ticket</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Total Payment */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-600 text-sm">Total Pembayaran:</span>
            <span className="font-bold text-xl text-gray-800">Rp 355.000</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-200">
            Lihat E-Ticket
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition duration-200">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;