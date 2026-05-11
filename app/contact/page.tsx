"use client";

import React, { useState, useEffect } from "react";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [errors, setErrors] = useState<{
		name?: string;
		email?: string;
		message?: string;
	}>({});

	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Auto-dismiss success message after 5 seconds
	useEffect(() => {
		if (submitted) {
			const timer = setTimeout(() => {
				setSubmitted(false);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [submitted]);

	// Clear success message when user starts typing again
	useEffect(() => {
		if (submitted && (name || email || message)) {
			setSubmitted(false);
		}
	}, [name, email, message, submitted]);

	function validate() {
		const e: typeof errors = {};

		if (!name.trim()) {
			e.name = "Please enter your name.";
		} else if (name.trim().length < 2) {
			e.name = "Name must be at least 2 characters.";
		}

		if (!email.trim()) {
			e.email = "Please enter your email.";
		} else if (
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
		) {
			e.email = "Please enter a valid email address.";
		}

		if (!message.trim()) {
			e.message = "Please enter a message.";
		} else if (message.trim().length < 10) {
			e.message = "Message must be at least 10 characters.";
		}

		setErrors(e);

		return Object.keys(e).length === 0;
	}

	async function handleSubmit() {
		if (!validate()) return;

		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		console.log("Contact form submission:", {
			name,
			email,
			message,
		});

		setSubmitted(true);
		setIsSubmitting(false);

		setName("");
		setEmail("");
		setMessage("");
		setErrors({});
	}

	return (
		<main className="min-h-screen bg-[#FAF7F4] flex items-center justify-center px-6 pt-28 pb-24">
			<div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm grid md:grid-cols-2 overflow-hidden">
				
				{/* Left Side */}
				<section className="bg-[#F4ECE6] p-10 flex flex-col justify-center">
					<h1 className="text-4xl font-serif text-[#2E2018]">
						Contact Us
					</h1>

					<p className="mt-5 text-[#5C4A3E] leading-relaxed">
						Have questions, collaborations, or custom
						order requests?
						<br />
						We'd love to hear from you.
					</p>

					<div className="mt-8">
						<p className="text-sm uppercase tracking-wide text-[#8A7768]">
							Email
						</p>

						<p className="mt-2 text-lg text-[#2E2018]">
							inquiries@strandé.com
						</p>
					</div>

					<div className="mt-6">
						<p className="text-sm uppercase tracking-wide text-[#8A7768]">
							Response Time
						</p>

						<p className="mt-2 text-sm text-[#5C4A3E]">
							We typically respond within 24-48 hours.
						</p>
					</div>
				</section>

				{/* Right Side */}
				<section className="p-10">
					{submitted && (
						<div 
							className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 animate-fade-in"
							role="alert"
						>
							✓ Your message has been sent successfully.
						</div>
					)}

					<div className="space-y-5">
						<div>
							<label 
								htmlFor="name-input"
								className="text-sm font-medium text-[#2E2018] block"
							>
								Name
							</label>

							<input
								id="name-input"
								type="text"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
									if (errors.name) {
										setErrors({ ...errors, name: undefined });
									}
								}}
								placeholder="Your name"
								className={`w-full mt-2 border rounded-xl px-4 py-3 outline-none transition-colors ${
									errors.name
										? "border-red-300 focus:border-red-500"
										: "border-[#D8CEC6] focus:border-[#3B2A1E]"
								}`}
								aria-invalid={!!errors.name}
								aria-describedby={errors.name ? "name-error" : undefined}
								disabled={isSubmitting}
							/>

							{errors.name && (
								<p 
									id="name-error"
									className="text-red-500 text-xs mt-1"
									role="alert"
								>
									{errors.name}
								</p>
							)}
						</div>

						<div>
							<label 
								htmlFor="email-input"
								className="text-sm font-medium text-[#2E2018] block"
							>
								Email
							</label>

							<input
								id="email-input"
								type="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									if (errors.email) {
										setErrors({ ...errors, email: undefined });
									}
								}}
								placeholder="you@example.com"
								className={`w-full mt-2 border rounded-xl px-4 py-3 outline-none transition-colors ${
									errors.email
										? "border-red-300 focus:border-red-500"
										: "border-[#D8CEC6] focus:border-[#3B2A1E]"
								}`}
								aria-invalid={!!errors.email}
								aria-describedby={errors.email ? "email-error" : undefined}
								disabled={isSubmitting}
							/>

							{errors.email && (
								<p 
									id="email-error"
									className="text-red-500 text-xs mt-1"
									role="alert"
								>
									{errors.email}
								</p>
							)}
						</div>

						<div>
							<label 
								htmlFor="message-input"
								className="text-sm font-medium text-[#2E2018] block"
							>
								Message
							</label>

							<textarea
								id="message-input"
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
									if (errors.message) {
										setErrors({ ...errors, message: undefined });
									}
								}}
								placeholder="Write your message..."
								className={`w-full mt-2 border rounded-xl px-4 py-3 h-36 resize-none outline-none transition-colors ${
									errors.message
										? "border-red-300 focus:border-red-500"
										: "border-[#D8CEC6] focus:border-[#3B2A1E]"
								}`}
								aria-invalid={!!errors.message}
								aria-describedby={errors.message ? "message-error" : undefined}
								disabled={isSubmitting}
							/>

							{errors.message && (
								<p 
									id="message-error"
									className="text-red-500 text-xs mt-1"
									role="alert"
								>
									{errors.message}
								</p>
							)}
						</div>

						<button
							onClick={handleSubmit}
							disabled={isSubmitting}
							className="w-full bg-[#3B2A1E] hover:bg-[#2A1C12] transition text-white py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed relative"
						>
							{isSubmitting ? (
								<span className="flex items-center justify-center gap-2">
									<svg 
										className="animate-spin h-5 w-5" 
										xmlns="http://www.w3.org/2000/svg" 
										fill="none" 
										viewBox="0 0 24 24"
									>
										<circle 
											className="opacity-25" 
											cx="12" 
											cy="12" 
											r="10" 
											stroke="currentColor" 
											strokeWidth="4"
										/>
										<path 
											className="opacity-75" 
											fill="currentColor" 
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										/>
									</svg>
									Sending...
								</span>
							) : (
								"Send Message"
							)}
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

				@keyframes spin {
					to {
						transform: rotate(360deg);
					}
				}

				.animate-spin {
					animation: spin 1s linear infinite;
				}
			`}</style>
		</main>
	);
}