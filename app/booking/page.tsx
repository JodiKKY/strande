"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import cornrowsImg from "@/public/assets/cornrow.png";
import locsImg from "@/public/assets/locs.png";
import rastaImg from "@/public/assets/rasta.png";
import menImg from "@/public/assets/mens.png";

const braiders = [
  {
    id: 1,
    name: "Ama Braids",
    hairType: "Cornrows",
    image: cornrowsImg,
  },
  {
    id: 2,
    name: "Naa Beauty",
    hairType: "Rasta",
    image: rastaImg,
  },
  {
    id: 3,
    name: "Royal Locs",
    hairType: "Locs",
    image: locsImg,
  },
  {
    id: 4,
    name: "Kings Studio",
    hairType: "Men Braids",
    image: menImg,
  },
];

const hairTypes = [
  "All",
  "Cornrows",
  "Rasta",
  "Locs",
  "Men Braids",
];

export default function BookUsPage() {
  const [selectedHairType, setSelectedHairType] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBraiders = braiders.filter((braider) => {
    const matchesHairType =
      selectedHairType === "All" ||
      braider.hairType === selectedHairType;

    const matchesSearch = braider.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesHairType && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f8f6f3] px-6 pt-28 pb-32">
      <section className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#9A8D82]">
              Discover Styles
            </p>

            <h1 className="mt-3 text-5xl leading-tight text-[#221A14]">
              Book Your Braider
            </h1>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[320px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A8D82]"
            />

            <input
              type="text"
              placeholder="Search braiders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-[#E7DFD8] bg-white py-4 pl-11 pr-4 text-sm outline-none transition focus:border-[#221A14]"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-14 flex flex-wrap gap-3">
          {hairTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedHairType(type)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                selectedHairType === type
                  ? "bg-[#221A14] text-white"
                  : "bg-white text-[#221A14]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredBraiders.map((braider) => (
            <div
              key={braider.id}
              className="group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem]">
                <div className="relative h-[420px]">
                  <Image
                    src={braider.image}
                    alt={braider.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 px-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl text-[#221A14]">
                    {braider.name}
                  </h2>

                  <span className="text-sm text-[#9A8D82]">
                    {braider.hairType}
                  </span>
                </div>

                <button className="mt-5 text-sm text-[#221A14] transition hover:opacity-60">
                  Book Appointment →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {filteredBraiders.length === 0 && (
          <div className="mt-24 text-center">
            <h3 className="text-2xl text-[#221A14]">
              No braiders found
            </h3>

            <p className="mt-2 text-[#8B7D72]">
              Try another search or filter.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}