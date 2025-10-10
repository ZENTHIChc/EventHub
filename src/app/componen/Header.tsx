import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex px-5 py-4 bg-gray-400 justify-between">
      <div className="">
        <Image
          src="/logo.png"
          alt="Logo"
          width={123}
          height={55}
          
        />

      </div>
      <div className="flex items-center space-x-6">
        <a href="#"className="block p-3">Beranda</a>
        <a href="#"className="block p-3">Partnership</a>
        <a href="#"className="block p-3">Affiliate</a>
        <a href="#"className="block p-3">Hubungi Kami</a>
      </div>
    </nav>
  );
}