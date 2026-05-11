import { Search, Calendar, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-[#EADFD6] py-16 px-6 text-center text-[#3B2A1E]">
      <h2 className="text-3xl font-serif mb-10">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Step icon={<Search />} title="Find" />
        <Step icon={<Calendar />} title="Book" />
        <Step icon={<ShieldCheck />} title="Get Styled" />
      </div>
    </section>
  );
}

function Step({ icon, title }: any) {
  return (
    <div>
      <div className="mb-3 flex justify-center">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-2">Simple and seamless process.</p>
    </div>
  );
}