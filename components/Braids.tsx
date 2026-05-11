import BraiderCard from "./BraiderCard";

export default function Braiders() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-[#3B2A1E]">
      <h2 className="text-3xl font-serif mb-10">Braids We Offer</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {[1,2,3,4].map((i) => (
          <BraiderCard key={i} />
        ))}
      </div>
    </section>
  );
}