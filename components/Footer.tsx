export default function Footer() {
  return (
    <footer className="bg-[#3B2A1E] text-[#F8F1E9] py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">

          <h2 className="font-serif tracking-[0.3em] text-xl mb-4 md:mb-0">
            STRANDÉ
          </h2>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:opacity-70">Home</a>
            <a href="#" className="hover:opacity-70">Services</a>
            <a href="#" className="hover:opacity-70">Gallery</a>
            <a href="#" className="hover:opacity-70">Contact</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#6f5a4a] my-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} STRANDÉ. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70">Instagram</a>
            <a href="#" className="hover:opacity-70">WhatsApp</a>
          </div>

        </div>
      </div>
    </footer>
  );
}