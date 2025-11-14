'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, Calendar, MapPin, User, Mail, Phone, Shield, ChevronDown } from 'lucide-react';

interface Package {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderData {
  event: {
    title: string;
    companyName: string;
    date: string;
    location: string;
    image: string;
  };
  packages: Package[];
  subtotal: number;
}

const PaymentPage = () => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [showCountryCode, setShowCountryCode] = useState(false);
  const [countryCode, setCountryCode] = useState('+62');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const countryCodes = [
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+1', country: 'USA', flag: '🇺🇸' },
  ];

  useEffect(() => {
    const data = sessionStorage.getItem('orderData');
    if (data) {
      setOrderData(JSON.parse(data));
    } else {
      // Set dummy data for UI demo
      setOrderData({
        event: {
          title: "Formula 1 Race",
          companyName: "WWE Project",
          date: "15-17 Desember 2024",
          location: "GBK Senayan, Jakarta",
          image: "gambar1.png"
        },
        packages: [
          {
            id: 2,
            name: "VIP Experience",
            price: 1505000,
            quantity: 2
          }
        ],
        subtotal: 3010000
      });
    }
  }, []);

  const formatPrice = (price: number): string => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const calculateAdminFee = (): number => {
    if (!orderData) return 0;
    return 5000; // Fixed admin fee
  };

  const calculateTotal = (): number => {
    if (!orderData) return 0;
    return orderData.subtotal + calculateAdminFee();
  };

  const getTotalTickets = (): number => {
    if (!orderData) return 0;
    return orderData.packages.reduce((sum, pkg) => sum + pkg.quantity, 0);
  };

  const paymentMethods = [
    {
      id: 'qris',
      name: 'Qris',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none">
          <rect width="50" height="50" rx="8" fill="#1C1C1C"/>
          <text x="25" y="32" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">QRIS</text>
        </svg>
      )
    },
    {
      id: 'ewallet',
      name: 'E-Wallet',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none">
          <rect width="50" height="50" rx="8" fill="#0066FF"/>
          <rect x="15" y="20" width="20" height="15" rx="2" fill="white"/>
          <rect x="18" y="23" width="6" height="3" fill="#0066FF"/>
        </svg>
      )
    },
    {
      id: 'va',
      name: 'Virtual Account',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none">
          <rect width="50" height="50" rx="8" fill="#00AA13"/>
          <rect x="12" y="18" width="26" height="18" rx="2" fill="white"/>
          <rect x="15" y="21" width="8" height="3" fill="#00AA13"/>
          <rect x="15" y="27" width="20" height="2" fill="#E0E0E0"/>
          <rect x="15" y="31" width="15" height="2" fill="#E0E0E0"/>
        </svg>
      )
    }
  ];

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Mohon lengkapi semua data diri');
      return;
    }
    if (!selectedPayment) {
      alert('Mohon pilih metode pembayaran');
      return;
    }
    alert('Pemesanan berhasil! (UI Demo - tidak ada backend)');
  };

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="text-sm font-medium">Kembali ke Beranda</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Summary Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex gap-4">
                <img
                  src={orderData.event.image}
                  alt={orderData.event.title}
                  className="w-32 h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {orderData.event.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">{orderData.event.companyName}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {orderData.event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {orderData.event.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information Form */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <User className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-bold text-gray-900">Ringkasan Pesanan</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan nama lengkap"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    No. Telephone
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        onClick={() => setShowCountryCode(!showCountryCode)}
                        className="px-4 py-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 flex items-center gap-2 min-w-[100px]"
                      >
                        <span>{countryCodes.find(c => c.code === countryCode)?.flag}</span>
                        <span className="font-medium">{countryCode}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {showCountryCode && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 w-48">
                          {countryCodes.map((country) => (
                            <button
                              key={country.code}
                              onClick={() => {
                                setCountryCode(country.code);
                                setShowCountryCode(false);
                              }}
                              className="w-full px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-left"
                            >
                              <span>{country.flag}</span>
                              <span className="text-sm">{country.code}</span>
                              <span className="text-xs text-gray-500">{country.country}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      placeholder="081234556789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Metode Pembayaran</h2>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedPayment === method.id
                        ? 'border-yellow-400 bg-yellow-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">{method.icon}</div>
                      <span className="font-semibold text-gray-900">{method.name}</span>
                    </div>
                    <span className="font-bold text-gray-900">{formatPrice(calculateTotal())}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>

              {/* Tickets */}
              <div className="space-y-4 mb-6">
                {orderData.packages.map((pkg) => (
                  <div key={pkg.id} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                        <p className="text-sm text-gray-600">{pkg.quantity}x tiket</p>
                      </div>
                      <p className="font-bold text-gray-900">{formatPrice(pkg.price * pkg.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(orderData.subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Biaya Admin</span>
                  <span className="font-semibold">{formatPrice(calculateAdminFee())}</span>
                </div>
              </div>

              {/* Secure Payment Badge */}
              <div className="flex items-center space-x-2 my-4 bg-green-50 p-3 rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Pembayaran Aman</span>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-200">
                <span className="text-gray-900 font-semibold">Total</span>
                <span className="text-2xl font-bold text-yellow-500">
                  {formatPrice(calculateTotal())}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;