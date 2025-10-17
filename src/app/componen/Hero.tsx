

import Image from "next/image";

export default function Hero () {
  return (
    <section className="bg-[#FFF8EC] min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-70  py-12 md:py-0 gap-19">
      
      {/* Bagian Teks */}
     <div className="flex-1 text-center md:text-left">
<h1 className="text-4xl md:text-7xl font-black text-black leading-tight">
  Temukan Event <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Impianmu</span>
</h1>
  <p className="text-gray-600 mt-2 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
    Jelajahi ribuan event menarik mulai dari konser musik, seminar bisnis, 
    festival kuliner, hingga pertunjukan seni. Dapatkan tiket dengan mudah 
    dan aman.
  </p>       
</div>

{/* Bagian gambar */}
<div className="flex-1 flex justify-center">
  <Image
    src="/main.jpg"
    alt="Event illustration"
    width={600}
    height={600}
    priority
    className="rounded-3xl object-cover"
  />
</div>


    </section>
  );
}

