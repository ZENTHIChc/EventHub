import Image from "next/image";
import AffiliateHeroSection from "../componen/AffiliateHeroSection";
import FeatureCard from "../componen/FeatureCard";
import CTA from "../componen/CTA";
import PartnershipForm from "../componen/PartnershipForm";

import { Zap, Award, Heart, Star, TrendingUp, Target, Archive, Cpu, Palette, Ticket, Trophy, Headphones, Video, Music, Camera, Mic, Briefcase, QrCode, FileText, DollarSign, Users, Megaphone, } from 'lucide-react';

export default function Partnership() {
    return (
        <div>
            <section>
                <AffiliateHeroSection
                    badgeIcon="🎉"
                    badgeText="Program Affiliate Terbaik"

                    titleLine1="Raih"
                    titleLine2="Penghasilan"
                    titleLine3="Tanpa Batas"

                    description="Dapatkan hingga 20% komisi dari setiap penjualan melalui sistem reward bertingkat kami. Semakin banyak Anda menjual, semakin besar yang Anda hasilkan"

                    stats={[
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
                            icon={DollarSign}
                            title="Validasi Tiket QR"
                            description="Cukup scan barcode pakai HP atau Laptop. Fleksibel untuk banyak device, membuat prosesnya cepat dan nyaman untuk setiap acara"
                            gradientFrom="from-green-400"
                            gradientTo="to-green-600"
                        />

                        <FeatureCard
                            icon={TrendingUp}
                            title="Rekap Penjualan"
                            description="Data penjualan tiket lebih gampang dikelola dan analisis dengan format Excel yang downloadable"
                            gradientFrom="from-sky-400"
                            gradientTo="to-sky-600"
                        />

                        <FeatureCard
                            icon={Award}
                            title="Pembayaran Instant"
                            description="Pilihan yang lengkap Kartu Debit/Kredit, QRIS, Transfer Bank BRI, BCA, Mandiri, Dana, OVO, Indomaret, dan Alfamart"
                            gradientFrom="from-yellow-400"
                            gradientTo="to-yellow-600"
                        />
                    </div>

                </div>
                <CTA />
            </div>



        </div>
    );
}