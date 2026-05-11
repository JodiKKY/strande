import { ShieldCheck, Calendar, CreditCard } from "lucide-react";

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 py-12 text-[#3B2A1E]">

      <Feature icon={<ShieldCheck />} title="Verified Braiders" />
      <Feature icon={<Calendar />} title="Easy Booking" />
      <Feature icon={<CreditCard />} title="Secure Payments" />

    </section>
  );
}

function Feature({ icon, title }: any) {
  return (
    <div className="bg-[#EADFD6] p-6 rounded-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-2 text-[#5C4A3E]">
        Premium experience with trusted professionals.
      </p>
    </div>
  );
}