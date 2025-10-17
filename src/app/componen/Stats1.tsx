import Image from "next/image";

export default function Stats1() {
  return (

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    
    <div>
      <h2 className="text-5xl font-bold ">1M+</h2>
      <p className="text-gray-500">Tiket Terjual</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold ">99+</h2>
      <p className="text-gray-500">Event Organizer</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold ">99%</h2>
      <p className="text-gray-500">Kepuasan Pelanggan</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold ">24/7</h2>
      <p className="text-gray-500">Customer Support</p>
    </div>

  </div>
  );
}