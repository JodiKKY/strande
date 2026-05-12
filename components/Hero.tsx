import { Search, MapPin } from "lucide-react";
import heroImage from "@/public/assets/hero2.png";
import Image from "next/image";

export default function Hero() {
  return (

<section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-[-1rem] pb-24 md:grid-cols-2">
      <div className="space-y-6">
        <p className="uppercase text-sm tracking-widest text-[#A89B8F] animate-fade-in">
          Beauty. Trust. Connection.
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-tight text-[#3B2A1E] animate-fade-in-up">
          Find Your <br /> Perfect Braider
        </h1>

        <p className="text-[#5C4A3E] text-base sm:text-lg max-w-lg animate-fade-in-up-delay">
          Book trusted braiders near you in minutes.
        </p>

        {/* Search Form */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-up-delay-2">
          {/* Location Input */}
          <div className="flex items-center border border-[#D8CEC6] px-4 py-3 rounded-xl bg-white w-full sm:flex-1 transition-all hover:border-[#A89B8F] focus-within:border-[#3B2A1E] focus-within:ring-2 focus-within:ring-[#3B2A1E]/10">
            <MapPin size={18} className="mr-2 text-[#A89B8F] flex-shrink-0" />
            <input 
              type="text"
              placeholder="Enter location" 
              aria-label="Location"
              className="w-full outline-none text-[#3B2A1E] placeholder:text-[#A89B8F]/60"
            />
          </div>

          {/* Style Input */}
          <div className="flex items-center border border-[#D8CEC6] px-4 py-3 rounded-xl bg-white w-full sm:flex-1 transition-all hover:border-[#A89B8F] focus-within:border-[#3B2A1E] focus-within:ring-2 focus-within:ring-[#3B2A1E]/10">
            <Search size={18} className="mr-2 text-[#A89B8F] flex-shrink-0" />
            <input 
              type="text"
              placeholder="Search for style" 
              aria-label="Braiding style"
              className="w-full outline-none text-[#3B2A1E] placeholder:text-[#A89B8F]/60"
            />
          </div>

          {/* Search Button */}
          <button 
            type="button"
            className="bg-[#3B2A1E] text-white px-8 py-3 rounded-xl font-medium transition-all hover:bg-[#2A1C12] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            Search
          </button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-2 mt-6 animate-fade-in-up-delay-3">
          <span className="text-sm text-[#8A7768]">Popular:</span>
          {["Box Braids", "Cornrows", "Knotless Braids"].map((style) => (
            <button
              key={style}
              type="button"
              className="text-sm text-[#5C4A3E] hover:text-[#3B2A1E] underline underline-offset-2 decoration-[#D8CEC6] hover:decoration-[#3B2A1E] transition-colors"
            >
              {style}
            </button>
          ))}
        </div>
      </div>

       {/* Right Image */}
      <div className="relative h-197.5 overflow-hidden rounded-[1em]">
        <Image
          src={heroImage}
          alt="Braider Hero Image"
          fill
          priority
          className="object-cover "
        />

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s backwards;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.4s backwards;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.6s backwards;
        }

        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.8s ease-out 0.8s backwards;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 1s ease-out 0.3s backwards;
        }
      `}</style>
    </section>
  );
}