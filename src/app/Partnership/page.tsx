import Image from "next/image";
import AffiliateHeroSection from "../componen/AffiliateHeroSection";
import FeatureCard from "../componen/FeatureCard";
import CTA from "../componen/CTA";
import PartnershipForm from "../componen/PartnershipForm";

import { Zap, Award, Heart, Star, HandCoins, TrendingUp, Shield, Target, Archive, Cpu, Palette, Ticket, Trophy, Headphones, Video, Music, Camera, Mic, Briefcase, QrCode, FileText, DollarSign, Users, Megaphone, } from 'lucide-react';

export default function Partnership() {
    return (
        <div>
            <section>
                <AffiliateHeroSection
                    badgeIcon="🎉"
                    badgeText="Program Affiliate Terbaik"

                    titleLine1="Bangun"
                    titleLine2="Partnership"
                    titleLine3="Strategis"

                    description="Kami percaya kolaborasi adalah kunci pertumbuhan. Melalui program kemitraan ini, kami membuka peluang besar untuk berkembang bersama  transparan, menguntungkan, dan saling mendukung."

                    stats={[
                        {
                            icon: Users,
                            iconBgColor: 'bg-blue-500',
                            value: '100+',
                            label: 'Partner Aktif'
                        },
                        {
                            icon: Target,
                            iconBgColor: 'bg-yellow-500',
                            value: '999+',
                            label: 'Active Affiliates'
                        }
                    ]}

                    primaryButtonText="Daftar Sekarang"
                    secondaryButtonText="Pelajari Lebih Lanjut"

                    imageUrl="main.jpg"
                    imagePosition="right"
                />
            </section>
            <div className="py-16 px-8 bg-gray-50">
                <div className="text-center mb-12 mx-auto pt-16 px-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mengapa Pilih <span className="text-yellow-500">Affiliate Tokoevent?</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Rasakan cara baru beli tiket event  gampang, cepat, dan pastinya dengan fitur kece plus service terbaik!                    </p>
                </div>
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                        <FeatureCard
                            icon={Ticket}
                            title="Validasi Tiket QR"
                            description="Cukup scan barcode pakai HP atau Laptop. Fleksibel untuk banyak device, membuat prosesnya cepat dan nyaman untuk setiap acara"
                            gradientFrom="from-yellow-400"
                            gradientTo="to-yellow-600"
                        />

                        <FeatureCard
                            icon={HandCoins}
                            title="Rekap Penjualan"
                            description="Data penjualan tiket lebih gampang dikelola dan analisis dengan format Excel yang downloadable"
                            gradientFrom="from-green-400"
                            gradientTo="to-green-600"
                        />

                        <FeatureCard
                            icon={Shield}
                            title="Pembayaran Instant"
                            description="Pilihan yang lengkap Kartu Debit/Kredit, QRIS, Transfer Bank BRI, BCA, Mandiri, Dana, OVO, Indomaret, dan Alfamart"
                            gradientFrom="from-blue-400"
                            gradientTo="to-blue-600"
                        />
                    </div>

                </div>
            </div>
            <section className=" grind grid-cols-2 gap-6">
                < PartnershipForm />
            </section>



        </div>
    );
}