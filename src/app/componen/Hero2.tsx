import React from 'react';
import { TrendingUp, Users } from 'lucide-react';

interface StatItem {
  icon: any;
  iconBgColor: string;
  value: string;
  label: string;
}

interface AffiliateHeroProps {
  // Badge
  badgeIcon?: string;
  badgeText?: string;
  
  // Title
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  
  // Description
  description?: string;
  
  // Stats
  stats?: StatItem[];
  
  // Buttons
  primaryButtonText?: string;
  secondaryButtonText?: string;
  
  // Image
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
}

const AffiliateHeroSection: React.FC<AffiliateHeroProps> = ({
  // Badge defaults
  badgeIcon = '$',
  badgeText = 'Program Affiliate Terbaik',
  
  // Title defaults
  titleLine1 = 'Raih',
  titleLine2 = 'Penghasilan',
  titleLine3 = 'Tanpa Batas',
  
  // Description defaults
  description = 'Dapatkan hingga 20% komisi dari setiap penjualan melalui sistem reward bertingkat kami. Semakin banyak Anda menjual, semakin besar yang Anda hasilkan',
  
  // Stats defaults
  stats = [
    {
      icon: TrendingUp,
      iconBgColor: 'bg-green-500',
      value: '20%',
      label: 'Komisi Tertinggi'
    },
    {
      icon: Users,
      iconBgColor: 'bg-yellow-500',
      value: '999+',
      label: 'Active Affiliates'
    }
  ],
  
  // Buttons defaults
  primaryButtonText = 'Daftar Sekarang',
  secondaryButtonText = 'Pelajari Lebih Lanjut',
  
  // Image defaults
  imageUrl = 'main.jpg',
  imagePosition = 'right'
}) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 rounded-full mb-12">
          <span className="text-yellow-500 text-xl">{badgeIcon}</span>
          <span className="text-yellow-500 font-semibold text-lg">
            {badgeText}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={imagePosition === 'right' ? 'order-1' : 'order-2'}>
            <h1 className="text-6xl font-black mb-6 leading-tight">
              <span className="text-black">{titleLine1}</span>
              <br />
              <span className="text-yellow-500">{titleLine2}</span>
              <br />
              <span className="text-black">{titleLine3}</span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${stat.iconBgColor} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full transition shadow-lg text-lg">
                {primaryButtonText}
              </button>
              <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-50 font-bold rounded-full transition text-lg">
                {secondaryButtonText}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative ${imagePosition === 'right' ? 'order-2' : 'order-1'}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt="Hero image"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero2 = AffiliateHeroSection;
export default Hero2; 