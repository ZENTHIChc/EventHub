'use client';

import { useState } from 'react';
import { ChevronLeft, Calendar, MapPin, Users, Shield, Ticket, Award } from 'lucide-react';

interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
  slotsLeft: number;
  benefits: string[];
}

interface EventDetailPageProps {
  title?: string;
  companyName?: string;
  date?: string;
  time?: string;
  location?: string;
  locationdetails?: string;
  registrationvisitors?: string;
  registrationDes?: string;
  CompanyName?: string;
  Verified?: string;
  mainImage?: string;
  galleryImages?: string[];
  description?: string;
  packages?: Package[];
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({
  title = "Formula 1 Race",
  companyName = "WWE Project",
  date = "15-17 Desember 2024",
  time = "19:00 WIB",
  location = "JL.Gunung Agung",
  locationdetails = "GBK Senayan, Jakarta",
  registrationvisitors = "15K+ Attendees",
  registrationDes = "19:00 WIB",
  CompanyName = "Jakarta Music Events",
  Verified = "Verified Organizer",
  mainImage = "gambar1.png",
  galleryImages = [
    "gambar1.png",
    "gambar2.png",
    "gambar3.png",
    "gambar4.png"
  ],
  description = `Bersiaplah untuk merasakan adrenalin yang tiada tanding! Ajang balap paling bergengsi di dunia kembali hadir di (Nama Sirkuit), menghadirkan para pembalap terbaik dunia yang akan beradu kecepatan, strategi, dan keberanian.

Nikmati atmosfer spektakuler mulai dari sesi latihan bebas, kualifikasi, hingga puncak balapan utama. Selain pertarungan di lintasan, event ini juga dilengkapi dengan hiburan, zona interaktif, merchandise eksklusif, dan berbagai pengalaman seru bagi para penggemar motorsport.

🎉 Jangan lewatkan kesempatan menjadi bagian dari sejarah Formula 1!
📅 Tanggal: (Isi tanggal)
📍 Lokasi: (Nama Sirkuit, Kota/Negara)
⚡ Akselerasi, drama, dan kegembiraan – semuanya ada di sini!`,
  packages = [
    {
      id: 1,
      name: "Regular",
      description: "Tiket regular dengan akses penuh",
      price: 50000,
      slotsLeft: 300,
      benefits: ["Akses 3 hari penuh", "Welcome drink"]
    },
    {
      id: 2,
      name: "Regular",
      description: "Tiket regular dengan akses penuh",
      price: 350000,
      slotsLeft: 200,
      benefits: ["Akses 3 hari penuh", "Welcome drink"]
    },
    {
      id: 3,
      name: "Regular",
      description: "Tiket regular dengan akses penuh",
      price: 3500000,
      slotsLeft: 255,
      benefits: ["Akses 3 hari penuh", "Welcome drink"]
    }
  ]
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(mainImage);
  const [ticketCounts, setTicketCounts] = useState<Record<number, number>>({});

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleIncrement = (packageId: number) => {
    setTicketCounts(prev => ({
      ...prev,
      [packageId]: (prev[packageId] || 0) + 1
    }));
  };

  const handleDecrement = (packageId: number) => {
    setTicketCounts(prev => ({
      ...prev,
      [packageId]: Math.max(0, (prev[packageId] || 0) - 1)
    }));
  };

  const getTotalTickets = (): number => {
    return Object.values(ticketCounts).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = (): number => {
    return packages.reduce((sum, pkg) => {
      const count = ticketCounts[pkg.id] || 0;
      return sum + (pkg.price * count);
    }, 0);
  };

  const formatPrice = (price: number): string => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tombol kembali */}
        <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-6">
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="text-sm font-medium">Kembali ke Beranda</span>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={selectedImage}
                  alt={title}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageClick(image)}
                      className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === image
                        ? 'border-yellow-400 shadow-lg scale-105'
                        : 'border-transparent hover:border-gray-300'
                        }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Info */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
              <p className="text-gray-600 mb-6">{companyName}</p>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-xl">
                  <Calendar className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{date}</p>
                    <p className="text-sm text-gray-600">{time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-xl">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{location}</p>
                    <p className="text-sm text-gray-600">{locationdetails}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-xl">
                  <Users className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{registrationvisitors}</p>
                    <p className="text-sm text-gray-600">{registrationDes}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-xl">
                  <Award className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{CompanyName}</p>
                    <p className="text-sm text-gray-600">{Verified}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Event</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {description}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Packages */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Package Selection */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Ticket className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Pilih Paket</h2>
                </div>

                <div className="space-y-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="border-2 border-gray-200 rounded-xl p-4 hover:border-yellow-400 transition-all duration-300"
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
                          <p className="text-xs text-yellow-600 font-medium">
                            {pkg.slotsLeft} tiket tersisa
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <button
                          onClick={() => handleDecrement(pkg.id)}
                          className="w-8 h-8 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors font-bold"
                        >
                          -
                        </button>
                        <span className="font-semibold text-gray-900">
                          {ticketCounts[pkg.id] || 0}
                        </span>
                        <button
                          onClick={() => handleIncrement(pkg.id)}
                          className="w-8 h-8 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4 bg-green-50 p-3 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Pembayaran Aman</span>
                </div>

                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <span className="text-gray-700">Total ({getTotalTickets()} tiket)</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;