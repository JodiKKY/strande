export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
      <h1 className="text-2xl font-serif tracking-widest">STRANDÉ</h1>

      <div className="flex gap-6 text-sm items-center">
        <a href="#">Find a Braider</a>
        <a href="#">Become a Braider</a>
        <a href="#">How It Works</a>

        <button className="bg-[#3B2A1E] text-white px-4 py-2 rounded-md">
          Book Now
        </button>
      </div>
    </nav>
  );
}