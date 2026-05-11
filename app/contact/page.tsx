"use client";

import React, { useState } from "react";

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

	function validate() {
		const e: typeof errors = {};

		if (!name.trim()) {
			e.name = "Please enter your name.";
		}

		if (!email.trim()) {
			e.email = "Please enter your email.";
		} else if (
			!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
		) {
			e.email = "Please enter a valid email.";
		}

		if (!message.trim()) {
			e.message = "Please enter a message.";
		}

		setErrors(e);

		return Object.keys(e).length === 0;
	}

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!validate()) return;

		console.log("Contact form submission:", {
			name,
			email,
			message,
		});

		setSubmitted(true);

		setName("");
		setEmail("");
		setMessage("");
		setErrors({});
	}

	return (
		<main className="min-h-screen bg-[#FAF7F4] flex items-center justify-center px-6 py-20">
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
						We’d love to hear from you.
					</p>

					<div className="mt-8">
						<p className="text-sm uppercase tracking-wide text-[#8A7768]">
							Email
						</p>

						<p className="mt-2 text-lg text-[#2E2018]">
							inquires@strandé.com    
						</p>
					</div>
				</section>

				{/* Right Side */}
				<section className="p-10">
					{submitted && (
						<div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
							Your message has been sent successfully.
						</div>
					)}

					<form
						onSubmit={onSubmit}
						className="space-y-5"
						noValidate
					>
						<div>
							<label className="text-sm font-medium text-[#2E2018]">
								Name
							</label>

							<input
								type="text"
								value={name}
								onChange={(e) =>
									setName(e.target.value)
								}
								placeholder="Your name"
								className="w-full mt-2 border border-[#D8CEC6] rounded-xl px-4 py-3 outline-none focus:border-[#3B2A1E]"
							/>

							{errors.name && (
								<p className="text-red-500 text-xs mt-1">
									{errors.name}
								</p>
							)}
						</div>

						<div>
							<label className="text-sm font-medium text-[#2E2018]">
								Email
							</label>

							<input
								type="email"
								value={email}
								onChange={(e) =>
									setEmail(e.target.value)
								}
								placeholder="you@example.com"
								className="w-full mt-2 border border-[#D8CEC6] rounded-xl px-4 py-3 outline-none focus:border-[#3B2A1E]"
							/>

							{errors.email && (
								<p className="text-red-500 text-xs mt-1">
									{errors.email}
								</p>
							)}
						</div>

						<div>
							<label className="text-sm font-medium text-[#2E2018]">
								Message
							</label>

							<textarea
								value={message}
								onChange={(e) =>
									setMessage(e.target.value)
								}
								placeholder="Write your message..."
								className="w-full mt-2 border border-[#D8CEC6] rounded-xl px-4 py-3 h-36 resize-none outline-none focus:border-[#3B2A1E]"
							/>

							{errors.message && (
								<p className="text-red-500 text-xs mt-1">
									{errors.message}
								</p>
							)}
						</div>

						<button
							type="submit"
							className="w-full bg-[#3B2A1E] hover:bg-[#2A1C12] transition text-white py-3 rounded-xl font-medium"
						>
							Send Message
						</button>
					</form>
				</section>
			</div>
		</main>
	);
}