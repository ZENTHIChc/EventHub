import Image from "next/image";
import Header from "./componen/Header";
import Hero from "./componen/Hero";
import Stats1 from "./componen/Stats1";






export default function Home() {
  return (
    <div className="">
      {/*HEADER*/}
      <section>
        <Header />
      </section>

      {/*HERO*/}
      <section>
        <Hero />
      </section>

      {/*stats*/}

      <section className="bg-white py-12 px-8 md:px-100">
        <Stats1 />

      </section>




    </div>

  );

}
