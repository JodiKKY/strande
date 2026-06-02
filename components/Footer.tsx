import Link from "next/link";

export default function Footer() {
	return (
		<footer className="-mt-16 relative z-0">
			
			{/* Footer Background */}
			<div className="bg-[#3B2A1E] text-[#F8F1E9] rounded-t-[70px] md:rounded-t-[70px] pt-24 pb-10 px-6 md:px-10 overflow-hidden">
				
				{/* Background Glow */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-[#EAD8C8]/5 blur-3xl" />
				</div>

				<div className="relative max-w-7xl mx-auto">
					
					{/* Top Section */}
					<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
						
						{/* Brand */}
						<div className="text-center md:text-left">
							<h2 className="font-serif tracking-[0.35em] text-2xl md:text-3xl mb-3">
								TWAÏN
							</h2>

							<p className="text-[#D8C7BA] max-w-sm leading-relaxed text-sm md:text-base">
								Modern braid artistry inspired by culture,
								confidence, and timeless beauty.
							</p>
						</div>

						{/* Navigation */}
						<div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm font-medium">
							<Link
								href="/"
								className="hover:text-[#EAD8C8] transition duration-300"
							>
								Home
							</Link>

							<Link
								href="/about"
								className="hover:text-[#EAD8C8] transition duration-300"
							>
								About
							</Link>

							<Link
								href="/contact"
								className="hover:text-[#EAD8C8] transition duration-300"
							>
								Contact
							</Link>

							<Link
								href="/booking"
								className="hover:text-[#EAD8C8] transition duration-300"
							>
								Booking
							</Link>
						</div>
					</div>

					{/* Divider */}
					<div className="border-t border-[#6E5848] my-6 opacity-70"></div>

					{/* Bottom Section */}
					<div className="flex flex-col md:flex-row justify-between items-center gap-5 text-sm">
						
						<p className="text-[#D8C7BA] text-center md:text-left">
							© {new Date().getFullYear()} TWAÏN. All rights
							reserved.
						</p>

						<div className="flex items-center gap-6">
							<a
								href="#"
								className="hover:text-[#EAD8C8] transition duration-300"
							>
								Instagram
							</a>

							<a
								href="#"
								className="hover:text-[#EAD8C8] transition duration-300"
							>
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}