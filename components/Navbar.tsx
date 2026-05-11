"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
			<header className="w-full max-w-6xl">
				
				<nav className="relative flex items-center justify-between px-6 sm:px-8 py-4 rounded-full border border-[#E7DDD3] bg-[#F7F1EA]/90 backdrop-blur-md shadow-lg shadow-black/5">
					
					{/* Logo */}
					<Link
						href="/"
						className="text-lg sm:text-xl font-serif tracking-[0.28em] text-[#2E2018] hover:opacity-80 transition"
					>
						STRANDÉ
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						<div className="flex items-center gap-8 text-sm font-medium text-[#4B3A2F]">
							<Link
								href="/about"
								className="hover:text-[#8B5E3C] transition-colors duration-200"
							>
								About
							</Link>

							<Link
								href="/contact"
								className="hover:text-[#8B5E3C] transition-colors duration-200"
							>
								Contact
							</Link>
						</div>

						<Link
							href="/booking"
							className="bg-[#3B2A1E] hover:bg-[#2A1C12] transition-all duration-300 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-sm"
						>
							Book Now
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-[#D8CEC6] bg-white/60 backdrop-blur-sm text-[#2E2018] transition"
						aria-label="Toggle menu"
					>
						<div className="flex flex-col gap-1.5">
							<span
								className={`block h-[2px] w-5 bg-[#2E2018] transition-all duration-300 ${
									menuOpen ? "rotate-45 translate-y-[7px]" : ""
								}`}
							/>
							<span
								className={`block h-[2px] w-5 bg-[#2E2018] transition-all duration-300 ${
									menuOpen ? "opacity-0" : ""
								}`}
							/>
							<span
								className={`block h-[2px] w-5 bg-[#2E2018] transition-all duration-300 ${
									menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
								}`}
							/>
						</div>
					</button>

					{/* Mobile Dropdown */}
					<AnimatePresence>
						{menuOpen && (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.25 }}
								className="absolute top-20 left-0 right-0 md:hidden"
							>
								<div className="mx-2 rounded-3xl border border-[#E7DDD3] bg-[#F7F1EA]/95 backdrop-blur-xl shadow-2xl p-6">
									
									<div className="flex flex-col gap-5 text-[#3B2A1E]">
										
										<Link
											href="/about"
											onClick={() => setMenuOpen(false)}
											className="text-lg font-medium hover:text-[#8B5E3C] transition"
										>
											About
										</Link>

										<Link
											href="/contact"
											onClick={() => setMenuOpen(false)}
											className="text-lg font-medium hover:text-[#8B5E3C] transition"
										>
											Contact
										</Link>

										<div className="pt-2">
											<Link
												href="/booking"
												onClick={() => setMenuOpen(false)}
												className="flex items-center justify-center bg-[#3B2A1E] hover:bg-[#2A1C12] transition-all duration-300 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm"
											>
												Book Now
											</Link>
										</div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</nav>
			</header>
		</div>
	);
}