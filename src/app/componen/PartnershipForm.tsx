"use client";

import { useState } from 'react';

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    kodeNegara: '+62',
    nomorTelepon: '',
    jenisLayanan: '',
    pesan: ''
  });

  const kodeNegaraList = [
    { flag: '🇮🇩', code: '+62', name: 'Indonesia' },
    { flag: '🇺🇸', code: '+1', name: 'USA' },
    { flag: '🇯🇵', code: '+81', name: 'Japan' },
    { flag: '🇬🇧', code: '+44', name: 'UK' },
    { flag: '🇦🇺', code: '+61', name: 'Australia' },
    { flag: '🇸🇬', code: '+65', name: 'Singapore' },
    { flag: '🇲🇾', code: '+60', name: 'Malaysia' },
    { flag: '🇹🇭', code: '+66', name: 'Thailand' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Hero Text */}
        <div className="text-center lg:text-left px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Siap Memulai
            <br />
            <span className="text-[#FFC700]">Partnership?</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Tim partnership kami siap membantu Anda menemukan model kerjasama yang tepat untuk mencapai tujuan bisnis bersama.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full bg-[#f2f2f2] rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Form Kemitraan
          </h2>
        
        <div className="space-y-4">
          {/* Nama Lengkap */}
          <div>
            <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-700 mb-1.5">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="namaLengkap"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="email@example.com"
            />
          </div>

          {/* Nomor Telepon */}
          <div>
            <label htmlFor="nomorTelepon" className="block text-sm font-medium text-gray-700 mb-1.5">
              Nomor Telepon
            </label>
            <div className="flex gap-2">
              <select
                name="kodeNegara"
                value={formData.kodeNegara}
                onChange={handleChange}
                className="bg-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition cursor-pointer min-w-[100px]"
              >
                {kodeNegaraList.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="nomorTelepon"
                name="nomorTelepon"
                value={formData.nomorTelepon}
                onChange={handleChange}
                className="flex-1 bg-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                placeholder="81234567890"
              />
            </div>
          </div>

          {/* Jenis Layanan */}
          <div>
            <label htmlFor="jenisLayanan" className="block text-sm font-medium text-gray-700 mb-1.5">
              Jenis Layanan
            </label>
            <input
              type="text"
              id="jenisLayanan"
              name="jenisLayanan"
              value={formData.jenisLayanan}
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="Masukkan jenis layanan"
            />
          </div>

          {/* Pesan */}
          <div>
            <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1.5">
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              rows={5}
              className="w-full bg-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
              placeholder="Tuliskan pesan Anda di sini..."
            />
          </div>

          {/* Tombol Kirim */}
          <button
            type="button"
            className="w-full bg-[#FFC700] hover:bg-[#e6b300] text-white font-bold py-3 rounded-lg transition duration-200 shadow-sm hover:shadow-md mt-6"
          >
            Kirim Pesan
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}