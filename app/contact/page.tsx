"use client";

import React, { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import emailjs from "@emailjs/browser";

const braidStyles = [
	"Box Braids",
	"Knotless Braids",
	"Cornrows",
	"Faux Locs",
	"Boho Braids",
	"Stitch Braids",
	"Fulani Braids",
];

export default function BookingPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [style, setStyle] = useState("");
	const [date, setDate] = useState("");
	const [message, setMessage] = useState("");

	const [errors, setErrors] = useState<{
		name?: string;
		email?: string;
		style?: string;
		date?: string;
		message?: string;
	}>({});

	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (submitted) {
			const timer = setTimeout(() => {
				setSubmitted(false);
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [submitted]);

	function validate() {
		const e: typeof errors = {};

		if (!name.trim()) {
			e.name = "Please enter your name.";
		}

		if (!email.trim()) {
			e.email = "Please enter your email.";
		} else if (
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
		) {
			e.email = "Please enter a valid email.";
		}

		if (!style) {
			e.style = "Please select a braid style.";
		}

		if (!date) {
			e.date = "Please select a preferred date.";
		}

		if (!message.trim()) {
			e.message = "Please enter additional details.";
		}

		setErrors(e);

		return Object.keys(e).length === 0;
	}
async function handleSubmit() {
	if (!validate()) return;

	setIsSubmitting(true);

	try {
		await emailjs.send(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
			{
				name,
				email,
				style,
				date,
				message,
			},
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
		);

		setSubmitted(true);

		console.log({
			name,
			email,
			style,
			date,
			message,
		});

		setName("");
		setEmail("");
		setStyle("");
		setDate("");
		setMessage("");
		setErrors({});
	} catch (error) {
		console.error("EmailJS Error:", error);
		alert("Failed to send booking request. Try again.");
	} finally {
		setIsSubmitting(false);
	}
}

	return (
		<main className="min-h-screen bg-[#FAF7F4] flex items-center justify-center px-6 pt-28 pb-24">
			<div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-sm grid md:grid-cols-2 overflow-hidden">
				
				{/* LEFT SIDE */}
				<section className="bg-[#F4ECE6] p-10 md:p-12 flex flex-col justify-center">
					<p className="uppercase tracking-[0.25em] text-xs text-[#8A7768] mb-4">
						Luxury Braid Booking
					</p>

					<h1 className="text-4xl md:text-5xl font-serif text-[#2E2018] leading-tight">
						Reserve Your Next Style
					</h1>

					<p className="mt-6 text-[#5C4A3E] leading-relaxed">
						Choose your preferred braid style and request
						an appointment based on available booking slots.
					</p>

					<div className="mt-10 space-y-6">
						<div>
							<p className="text-sm uppercase tracking-wide text-[#8A7768]">
								Booking Hours
							</p>

							<p className="mt-2 text-[#2E2018]">
								Mon – Sat · 9:00AM – 6:00PM
							</p>
						</div>

						<div>
							<p className="text-sm uppercase tracking-wide text-[#8A7768]">
								Response Time
							</p>

							<p className="mt-2 text-sm text-[#5C4A3E]">
								Availability confirmations are usually sent
								within 24 - 48 hours when there are available slots.
							</p>
						</div>

					</div>
				</section>

				{/* RIGHT SIDE */}
				<section className="p-10 md:p-12">
					{submitted && (
						<div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-4 text-sm text-green-700 animate-fade-in">
							✓ Your booking request has been sent successfully.
						</div>
					)}

					<div className="space-y-5">
						
						{/* NAME */}
						<div>
							<label className="text-sm font-medium text-[#2E2018]">
								Full Name
							</label>

							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Your name"
								className="w-full mt-2 border border-[#D8CEC6] rounded-2xl px-4 py-3 outline-none focus:border-[#3B2A1E] transition"
							/>

							{errors.name && (
								<p className="text-red-500 text-xs mt-1">
									{errors.name}
								</p>
							)}
						</div>

						{/* EMAIL */}
						<div>
							<label className="text-sm font-medium text-[#2E2018]">
								Email Address
							</label>

							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="you@example.com"
								className="w-full mt-2 border border-[#D8CEC6] rounded-2xl px-4 py-3 outline-none focus:border-[#3B2A1E] transition"
							/>

							{errors.email && (
								<p className="text-red-500 text-xs mt-1">
									{errors.email}
								</p>
							)}
						</div>

						{/* STYLE SELECT */}
						<div>
							<label className="text-sm font-medium text-[#2E2018]">
								Braid Style
							</label>

							<select
								value={style}
								onChange={(e) => setStyle(e.target.value)}
								className="w-full mt-2 border border-[#D8CEC6] rounded-2xl px-4 py-3 outline-none focus:border-[#3B2A1E] transition bg-white"
							>
								<option value="">
									Select a braid style
								</option>

								{braidStyles.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>

							{errors.style && (
								<p className="text-red-500 text-xs mt-1">
									{errors.style}
								</p>
							)}
						</div>

						{/* DATE */}
						<div>
							<label className="text-sm font-medium text-[#2E2018]">
								Preferred Date
							</label>

							<div className="relative mt-2">
								<CalendarDays
									size={18}
									className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7768]"
								/>

								<input
									type="date"
									value={date}
									onChange={(e) => setDate(e.target.value)}
									className="w-full border border-[#D8CEC6] rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#3B2A1E] transition"
								/>
							</div>

							{errors.date && (
								<p className="text-red-500 text-xs mt-1">
									{errors.date}
								</p>
							)}
						</div>

						{/* MESSAGE */}
						<div>
							<label className="text-sm font-medium text-[#2E2018]">
								Additional Details
							</label>

							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Hair length, preferred size, inspiration, etc."
								className="w-full mt-2 border border-[#D8CEC6] rounded-2xl px-4 py-3 h-32 resize-none outline-none focus:border-[#3B2A1E] transition"
							/>

							{errors.message && (
								<p className="text-red-500 text-xs mt-1">
									{errors.message}
								</p>
							)}
						</div>

						{/* BUTTON */}
						<button
							onClick={handleSubmit}
							disabled={isSubmitting}
							className="w-full bg-[#3B2A1E] hover:bg-[#2A1C12] transition text-white py-3 rounded-2xl font-medium disabled:opacity-50"
						>
							{isSubmitting
							? "Sending Booking Request..."
							: "Check Availability"}
						</button>
					</div>
				</section>
			</div>

			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fade-in {
					animation: fade-in 0.3s ease-out;
				}
			`}</style>
		</main>
	);
}