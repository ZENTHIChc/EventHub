import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="mx-auto bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={123}
            height={55}
          />
        </div>
        
        <div className="flex items-center gap-8 text-[#2A2A2A] font-medium">
          <a href="#" className="hover:text-yellow-400 transition-colors block px-2 py-2">Beranda</a>
          <a href="#" className="hover:text-yellow-400 transition-colors block px-2 py-2">Partnership</a>
          <a href="#" className="hover:text-yellow-400 transition-colors block px-2 py-2">Affiliate</a>
          <a href="#" className="hover:text-yellow-400 transition-colors block px-2 py-2">Hubungi Kami</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 text-[#2A2A2A] font-medium hover:text-yellow-400 transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2 bg-yellow-400 text-[#2A2A2A] font-medium rounded-md hover:bg-yellow-500 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}