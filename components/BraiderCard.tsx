import { Star, User } from "lucide-react";

export default function BraiderCard() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="h-60 bg-[#EADFD6]" />

      <div className="p-4">
        <h4 className="flex items-center gap-2 font-semibold">
          <User size={16} />
          Cornrow
        </h4>

        <div className="flex items-center gap-1 text-sm mt-1">
          <Star size={14} className="text-[#C6A75E]" />
          4.9
        </div>

        <p className="text-sm text-[#A89B8F] mt-1">
          From GHS 150
        </p>
      </div>
    </div>
  );
}