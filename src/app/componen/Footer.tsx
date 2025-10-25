import Image from "next/image";
import { Facebook, Twitter, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Section - Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-orange-500">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={123}
                  height={55}
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Platform terpercaya untuk menemukan dan membeli tiket event terbaik di Indonesia. Wujudkan pengalaman event yang tak terlupakan bersama kami.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Menu Utama */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Menu Utama</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Bantuan</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Cara Pembelian
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Kebijakan & Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak Kami */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/6281238169667" className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors group">
                  <Phone size={18} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm">+62 8123 8169 667 (WA Only)</span>
                </a>
              </li>
              <li>
                <a href="mailto:sales@tokoevent.com" className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors group">
                  <Mail size={18} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm">sales@tokoevent.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © 2024 ZENTHIChc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}