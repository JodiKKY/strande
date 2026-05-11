"use client";

import { useState } from "react";
import { Search, Star, MapPin } from "lucide-react";

const braiders = [
  {
    id: 1,
    name: "Ama Braids Studio",
    hairType: "Knotless",
    rating: 4.9,
    location: "Accra, Ghana",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Naa’s Beauty Hub",
    hairType: "Cornrows",
    rating: 4.7,
    location: "Kumasi, Ghana",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Bella Twist Lounge",
    hairType: "Twists",
    rating: 4.8,
    location: "Takoradi, Ghana",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Royal Locs",
    hairType: "Locs",
    rating: 5.0,
    location: "Accra, Ghana",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
];

const hairTypes = [
  "All",
  "Knotless",
  "Cornrows",
  "Twists",
  "Locs",
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
    <main className="min-h-screen bg-[#fdf8f5] px-6 py-12 pt-32">
      {/* Header */}
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#2f1c14]">
              Book Your Braider
            </h1>
            <p className="mt-2 text-[#6f5c53]">
              Find professional braiders for every hairstyle and occasion.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-87.5">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d7b72]"
              size={18}
            />
            <input
              type="text"
              placeholder="Search braiders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-[#eaded7] bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#2f1c14]"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {hairTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedHairType(type)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                selectedHairType === type
                  ? "bg-[#2f1c14] text-white"
                  : "bg-white text-[#2f1c14] border border-[#eaded7]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Braiders Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBraiders.map((braider) => (
            <div
              key={braider.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-[280px] overflow-hidden">
                <img
                  src={braider.image}
                  alt={braider.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[#2f1c14]">
                    {braider.name}
                  </h2>

                  <div className="flex items-center gap-1 rounded-full bg-[#fff4eb] px-3 py-1 text-sm font-medium text-[#d97706]">
                    <Star size={14} fill="currentColor" />
                    {braider.rating}
                  </div>
                </div>

                <p className="mb-4 inline-block rounded-full bg-[#f8f1ed] px-3 py-1 text-sm text-[#6f5c53]">
                  {braider.hairType}
                </p>

                <div className="mb-5 flex items-center gap-2 text-sm text-[#7a6a61]">
                  <MapPin size={16} />
                  {braider.location}
                </div>

                <button className="w-full rounded-full bg-[#2f1c14] py-3 font-medium text-white transition hover:bg-[#442a20]">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBraiders.length === 0 && (
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-[#2f1c14]">
              No braiders found
            </h3>
            <p className="mt-2 text-[#7a6a61]">
              Try searching with another hairstyle or braider name.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}