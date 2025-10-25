import Image from "next/image";
import Navbar from "./componen/Navbar";
import Hero from "./componen/Hero";
import Stats1 from "./componen/Stats1";
import Pcard from "./componen/Pcard";
import IconCard from "./componen/IconCard";
import EventCategoryCard from "./componen/EventCategoryCard";
import FeatureCard from "./componen/FeatureCard";
import Footer from "./componen/Footer";


import { Zap, Heart, Star, Archive, Cpu, Palette, Ticket, Trophy, Headphones, Video, Music, Camera, Mic, Briefcase, QrCode, FileText, DollarSign, Users, Megaphone, } from 'lucide-react';

export default function Home() {
  return (
    <div className="">

      {/*HERO*/}
      <section>
        <Hero />
      </section>

      {/*stats*/}

      <section className="bg-white py-12 px-8 md:px-100">
        <Stats1 />
      </section>

      {/*cards*/}


      <section className="bg-[#F6F6F6] min-h-screen">
        <div className="text-center mb-12 mx-auto pt-16 px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="text-yellow-500">Terpopuler</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Jangan sampai terlewat! Ini dia event-event paling Hits yang wajib kamu ikuti
          </p>
        </div>

        <div className="container mx-auto p-8 pt-16 px-8">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-12">

            {/* Event 1 */}


            <Pcard
              image="/Produc.png"
              title="Stand Up Comedy"
              organizer="Raditya Dika"
              date="22 Desember 2022"
              location="Jl. canggu,kuta utara"
              ticketsLeft="5K+ ticket tersisa"
              price="Rp 350.000"
            />

            {/* Event 2 */}
            <Pcard
              image="/Produc.png"
              title="Konser Musik Jazz"
              organizer="Tompi"
              date="25 Desember 2022"
              location="Sanur Beach Hotel"
              ticketsLeft="2K+ ticket tersisa"
              price="Rp 500.000"
            />

            {/* Event 3 */}
            <Pcard
              image="/Produc.png"
              title="Festival Kuliner Bali"
              organizer="Bali Food Festival"
              date="30 Desember 2022"
              location="Nusa Dua Convention Center"
              ticketsLeft="10K+ ticket tersisa"
              price="Rp 150.000"
            />

            <Pcard
              image="/Produc.png"
              title="Festival Kuliner Bali"
              organizer="Bali Food Festival"
              date="30 Desember 2022"
              location="Nusa Dua Convention Center"
              ticketsLeft="10K+ ticket tersisa"
              price="Rp 150.000"
            />



          </div>
        </div>
      </section>

      {/*icon card*/}
      {/* <section>

        <IconCard
          icon={Headphones}
          size="small"
          bgType="gradient"
          gradientFrom="from-purple-500"
          gradientTo="to-indigo-600"
          hoverEffect="both"
        />

      </section> */}


      {/* Event Category Cards */}

      <section>
         <div className="text-center mb-12 mx-auto pt-16 px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Jelajahi <span className="text-yellow-500">Kategori</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Temukan event sesuai minat dan passion kamu dari berbagai kategori menarik
          </p>
        </div>
        
        <div className="p-8 mb-12 mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-6">

            <EventCategoryCard
              icon={Music}
              title="Music"
              count="50+ Event"
              bgType="gradient"
              gradientFrom="from-pink-500"
              gradientTo="to-rose-500"

            />

            <EventCategoryCard
              icon={Mic}
              title="Komedi"
              count="120+ Event"
              bgType="gradient"
              gradientFrom="from-purple-500"
              gradientTo="to-indigo-500"
            />

            <EventCategoryCard
              icon={Briefcase}
              title="Bisnis"
              count="80+ Event"
              bgType="gradient"
              gradientFrom="from-green-400"
              gradientTo="to-green-600"
            />

            <EventCategoryCard
              icon={Ticket}
              title="Cinema"
              count="200+ Event"
              bgType="gradient"
              gradientFrom="from-yellow-400"
              gradientTo="to-orange-600"
            />

            <EventCategoryCard
              icon={Palette}
              title="Seni"
              count="50+ Event"
              bgType="gradient"
              gradientFrom="from-pink-500"
              gradientTo="to-rose-500"

            />

            <EventCategoryCard
              icon={Trophy}
              title="Sports"
              count="120+ Event"
              bgType="gradient"
              gradientFrom="from-yellow-300"
              gradientTo="to-orange-500"
            />

            <EventCategoryCard
              icon={Archive}
              title="Lainnya"
              count="80+ Event"
              bgType="gradient"
              gradientFrom="from-blue-500"
              gradientTo="to-cyan-500"
            />



          </div>
        </div>
      </section>

      <section>
        
        <div className="py-16 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
<div className="text-center mb-12 mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fitur <span className="text-yellow-500">Unggulan</span> Platform
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Rasakan cara baru beli tiket event  gampang, cepat, dan pastinya dengan fitur kece plus service terbaik!
          </p>

        </div>
            {/* Grid 3 kolom */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <FeatureCard
                icon={QrCode}
                title="Validasi Tiket QR"
                description="Cukup scan barcode pakai HP atau Laptop. Fleksibel untuk banyak device, membuat prosesnya cepat dan nyaman untuk setiap acara"
                gradientFrom="from-cyan-400"
                gradientTo="to-cyan-600"
              />

              <FeatureCard
                icon={FileText}
                title="Rekap Penjualan"
                description="Data penjualan tiket lebih gampang dikelola dan analisis dengan format Excel yang downloadable"
                gradientFrom="from-sky-400"
                gradientTo="to-sky-600"
              />

              <FeatureCard
                icon={DollarSign}
                title="Pembayaran Instant"
                description="Pilihan yang lengkap Kartu Debit/Kredit, QRIS, Transfer Bank BRI, BCA, Mandiri, Dana, OVO, Indomaret, dan Alfamart"
                gradientFrom="from-green-400"
                gradientTo="to-green-600"
              />

              <FeatureCard
                icon={QrCode}
                title="Sistem OTS (On the Spot)"
                description="Fitur yang dirancang untuk memfasilitasi penjualan tiket langsung di lokasi acara secara efisien dan real-time"
                gradientFrom="from-rose-400"
                gradientTo="to-pink-500"
              />

              <FeatureCard
                icon={Megaphone}
                title="Promosi Event"
                description="Membantu acara kamu jadi lebih dikenal dan tiketnya cepat laku. Meta Ads (Facebook & Instagram) yang dikelola oleh tim profesional"
                gradientFrom="from-yellow-400"
                gradientTo="to-amber-500"
              />

              <FeatureCard
                icon={Ticket}
                title="Free Tiket Gelang"
                description="Tiket gelang secara gratis jika diperlukan untuk acara"
                gradientFrom="from-orange-400"
                gradientTo="to-orange-600"
              />

            </div>
          </div>
        </div>
      </section>
<section>

</section>


    </div>

  );

}
