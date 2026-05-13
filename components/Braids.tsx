import Image from "next/image";

import cornrowsImg from "@/public/assets/cornrow.png";
import rastaImg from "@/public/assets/rasta.png";
import locsImg from "@/public/assets/locs.png";
import menImg from "@/public/assets/mens.png";

const braids = [
  {
    id: 1,
    name: "Cornrows",
    image: cornrowsImg,
  },
  {
    id: 2,
    name: "Box Braids",
    image: rastaImg,
  },
  {
    id: 3,
    name: "Locs",
    image: locsImg,
  },
  {
    id: 4,
    name: "Men Braids",
    image: menImg,
  },
];

export default function BraiderCard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 ">
      
      {/* Heading */}
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#A89B8F]">
          Signature Styles
        </p>

        <h2 className="mt-4 text-4xl leading-tight text-[#3B2A1E] md:text-5xl">
          Braids We Offer
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[#7B6A5F]">
          Discover artistic braid styles crafted with elegance,
          culture, and modern beauty in mind.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {braids.map((braid) => (
          <div
            key={braid.id}
            className="group relative overflow-hidden rounded-[2rem]"
          >
            {/* Image */}
            <div className="relative h-[430px] overflow-hidden">
              <Image
                src={braid.image}
                alt={braid.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Glow Effect */}
              <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#D6B08C]/30 blur-3xl" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-3xl text-white">
                  {braid.name}
                </h3>

                <button className="mt-5 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#3B2A1E]">
                  Explore Style
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}