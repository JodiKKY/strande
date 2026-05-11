"use client";

import { motion } from "motion/react";
import { Playfair_Display, Montserrat } from "next/font/google";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Braids from "@/components/Braids";
import HowItWorks from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

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
    <div
      className={`${montserrat.className} w-full min-h-screen bg-[#F8F1E9]`}
    >
      {/* Main Content Wrapper */}
      <main
        className="
          relative
          overflow-hidden
          bg-[#F8F1E9]
          rounded-b-[50px] md:rounded-b-[90px]
          shadow-[0_20px_80px_rgba(0,0,0,0.06)]
        "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="
              absolute top-0 left-1/2
              h-[500px] w-[500px]
              -translate-x-1/2
              rounded-full
              bg-[#EAD8C8]/30
              blur-3xl
            "
          />
        </div>

        {/* Animated Sections */}
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
            className="pt-24 md:pt-32"
          >
            <Hero />
          </motion.section>

          {/* Features */}
          <motion.section
            variants={sectionVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-20 md:mt-24"
          >
            <Features />
          </motion.section>

          {/* Braids */}
          <motion.section
            variants={sectionVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-24 md:mt-28"
          >
            <Braids />
          </motion.section>

          {/* Process */}
          <motion.section
            variants={sectionVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-24 md:mt-28"
          >
            <HowItWorks />
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={sectionVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-24 md:mt-32 pb-20 md:pb-28"
          >
            <CTA />
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}