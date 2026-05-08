import { Search, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">

      <div>
        <p className="uppercase text-sm tracking-widest text-[#A89B8F]">
          Beauty. Trust. Connection.
        </p>

        <h1 className="text-5xl font-serif mt-4 leading-tight">
          Find Your <br /> Perfect Braider
        </h1>

        <p className="mt-6 text-[#5C4A3E]">
          Book trusted braiders near you in minutes.
        </p>

        <div className="mt-8 flex gap-3">
          <div className="flex items-center border px-3 py-2 rounded-md bg-white w-full">
            <MapPin size={18} className="mr-2 text-[#A89B8F]" />
            <input placeholder="Location" className="w-full outline-none" />
          </div>

          <div className="flex items-center border px-3 py-2 rounded-md bg-white w-full">
            <Search size={18} className="mr-2 text-[#A89B8F]" />
            <input placeholder="Style" className="w-full outline-none" />
          </div>

          <button className="bg-[#3B2A1E] text-white px-6 rounded-md">
            Search
          </button>
        </div>
      </div>

      <div className="h-[450px] bg-[#EADFD6] rounded-2xl" />
    </section>
  );
}