import Image from "next/image";
import Link from "next/link"; 

export default function Navbar() {
  return (
    <nav className="mx-auto bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={123}
              height={55}
              className="cursor-pointer"
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-8 text-[#2A2A2A] font-medium">
          <Link href="/" className="hover:text-yellow-400 transition-colors block px-2 py-2">
            Beranda
          </Link>
          <Link href="/Partnership" className="hover:text-yellow-400 transition-colors block px-2 py-2">
            Partnership
          </Link>
          <Link href="/Affiliate" className="hover:text-yellow-400 transition-colors block px-2 py-2">
            Affiliate
          </Link>
          <a 
            href="https://www.instagram.com/mahes.r00" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors block px-2 py-2"
          >
            Hubungi Kami
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/Login">
            <button className="px-6 py-2 text-[#2A2A2A] font-medium hover:text-yellow-400 transition-colors">
              Sign In
            </button>
          </Link>
          <Link href="/Register">
            <button className="px-6 py-2 bg-yellow-400 text-[#2A2A2A] font-medium rounded-md hover:bg-yellow-500 transition-colors">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}