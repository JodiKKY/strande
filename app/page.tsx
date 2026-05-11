"use client";

import { motion } from "motion/react";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Braids from "@/components/Braids";
import HowItWorks from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";


const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.18,
			delayChildren: 0.1,
		},
	},
};

const sectionVariants = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export default function Home() {
	return (
		<div className="w-full bg-white flex flex-col items-center px-4 sm:px-6 md:px-8 pt-6 md:pt-10 pb-16 md:pb-20">
			
			{/* Floating Main Page */}
			<main className="relative z-10 overflow-hidden rounded-b-[60px] md:rounded-b-[90px] bg-[#F8F1E9] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
				
				{/* Background Glow */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#EAD8C8]/30 blur-3xl" />
				</div>

				{/* Main Animated Layout */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={containerVariants}
					className="relative"
				>
					
					{/* Hero */}
					<motion.section
						variants={sectionVariants}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="pt-28"
					>
						<Hero />
					</motion.section>

					{/* Features */}
					<motion.section
						variants={sectionVariants}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="mt-24"
					>
						<Features />
					</motion.section>

					{/* Braids Showcase */}
					<motion.section
						variants={sectionVariants}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="mt-28"
					>
						<Braids />
					</motion.section>

					{/* Process */}
					<motion.section
						variants={sectionVariants}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="mt-28"
					>
						<HowItWorks />
					</motion.section>

					{/* CTA */}
					<motion.section
						variants={sectionVariants}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="mt-32 pb-24"
					>
						<CTA />
					</motion.section>
				</motion.div>
			</main>

		
		</div>
	);
}