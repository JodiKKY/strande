"use client";

import { motion } from "motion/react";
import Image from "next/image";

import aboutBraids from "@/public/assets/aboutbraids.png";

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export default function AboutPage() {
	return (
		<main className="bg-[#F8F1E9] text-[#3B2A1E] overflow-hidden min-h-screen">
			
			{/* Background Glow */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#EAD8C8]/30 blur-3xl" />
			</div>

			<section className="max-w-7xl mx-auto px-6 pt-28 pb-24">
				
				{/* Hero Section */}
			
<motion.div
	initial="hidden"
	animate="visible"
	variants={fadeUp}
	transition={{ duration: 1, ease: "easeOut" }}
	className="relative overflow-hidden rounded-[40px] min-h-[90vh] flex items-end shadow-2xl"
>
	
	{/* Background Image */}
	<div className="absolute inset-0">
		<Image
			src={aboutBraids}
			alt="Braided hairstyle background"
			fill
			priority
			className="object-cover scale-[1.02]"
		/>

		{/* Premium Overlay */}
		<div className="absolute inset-0 bg-gradient-to-r from-[#2E1F15]/90 via-[#3B2A1E]/55 to-[#3B2A1E]/10" />

		{/* Soft Glow */}
		<div className="absolute -top-10 left-10 h-80 w-80 rounded-full bg-[#F3E6D9]/10 blur-3xl" />
		<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#EAD8C8]/10 blur-3xl" />
	</div>

	{/* Floating Content */}
	<div className="relative z-10 max-w-3xl px-8 md:px-16 pb-20 md:pb-28">
		
		<p className="uppercase tracking-[0.35em] text-sm text-[#EAD8C8] mb-5">
			About Twaïn
		</p>

		<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white mb-8">
			Braiding
			<br />
			Confidence.
		</h1>

		<div className="w-24 h-[2px] bg-[#EAD8C8]/70 mb-8" />

		<p className="text-lg md:text-2xl leading-relaxed text-[#F5EDE6] max-w-2xl font-light">
			A modern beauty platform celebrating African braid artistry,
			self-expression, and timeless elegance through beautifully
			curated styles and culture-driven inspiration.
		</p>
	</div>
</motion.div>

				{/* Mission Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="grid md:grid-cols-2 gap-14 mt-32 items-center"
				>
					<div>
						<p className="uppercase tracking-[0.25em] text-sm text-[#8A6A55] mb-4">
							Our Mission
						</p>

						<h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
							Beauty Rooted In
							<br />
							Culture & Expression.
						</h2>

						<p className="text-lg leading-relaxed text-[#5F4637] mb-6">
							We believe hair is more than style — it is
							identity, creativity, and confidence. Strande was
							built to celebrate African beauty and elevate braid
							artistry through a modern digital experience.
						</p>

						<p className="text-lg leading-relaxed text-[#5F4637]">
							From timeless protective styles to modern braid
							trends, our platform helps people discover
							inspiration, connect with stylists, and embrace
							their individuality with confidence.
						</p>
					</div>

					<div className="bg-[#EAD8C8]/40 rounded-[32px] p-10 backdrop-blur-sm border border-[#E2CDBB] shadow-lg">
						<h3 className="text-3xl font-semibold mb-8">
							What We Offer
						</h3>

						<div className="space-y-8">
							<div>
								<h4 className="font-semibold text-xl mb-2">
									Braid Inspiration
								</h4>

								<p className="text-[#5F4637] leading-relaxed">
									Discover elegant braid styles curated for
									every personality, mood, and occasion.
								</p>
							</div>

							<div>
								<h4 className="font-semibold text-xl mb-2">
									Stylist Discovery
								</h4>

								<p className="text-[#5F4637] leading-relaxed">
									Connect with skilled braiders and beauty
									professionals who bring your vision to life.
								</p>
							</div>

							<div>
								<h4 className="font-semibold text-xl mb-2">
									Beauty Community
								</h4>

								<p className="text-[#5F4637] leading-relaxed">
									Join a growing community that celebrates
									beauty, confidence, and African culture.
								</p>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Vision Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mt-36 text-center"
				>
					<p className="uppercase tracking-[0.25em] text-sm text-[#8A6A55] mb-4">
						Our Vision
					</p>

					<h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
						Modern Beauty,
						<br />
						Timeless Braids.
					</h2>

					<p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-[#5F4637]">
						Twaïn blends beauty inspiration with elegant design
						to create a seamless digital experience for braid
						lovers everywhere. We are building a platform where
						culture, beauty, and confidence exist beautifully
						together.
					</p>
				</motion.div>
			</section>
		</main>
	);
}