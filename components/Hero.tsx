import { Search, MapPin } from "lucide-react";
import heroImage from "@/public/assets/heroimg1.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-[-1rem] pb-24 md:grid-cols-2">

      <div>
        <p className="uppercase text-sm tracking-widest text-[#A89B8F]">
          Beauty. Trust. Connection.
        </p>

        <h1 className="text-5xl font-serif mt-4 leading-tight text-[#3B2A1E]">
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

      {/* Right Image */}
      <div className="relative h-[750px] overflow-hidden rounded-[1em]">
        <Image
          src={heroImage}
          alt="Braider Hero Image"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
} 
      