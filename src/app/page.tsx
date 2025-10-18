import Image from "next/image";
import Navbar from "./componen/Navbar";
import Hero from "./componen/Hero";
import Stats1 from "./componen/Stats1";
import Pcard from "./componen/Pcard";




export default function Home() {
  return (
    <div className="">
      {/*HEADER*/}
      <section>
        <Navbar />
      </section>

      {/*HERO*/}
      <section>
        <Hero />
      </section>

      {/*stats*/}

      <section className="bg-white py-12 px-8 md:px-100">
        <Stats1 />
      </section>

      {/*cards*/}
      <section>
        <div className="container mx-auto p-8">
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



    </div>

  );

}
