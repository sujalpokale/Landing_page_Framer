"use client"; // Required for Framer Motion

import { motion } from "framer-motion";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import CTA from "./CTA";

export default function ProductXLanding() {
  return (
    <motion.main
      className="w-full overflow-hidden bg-white text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Hero Section */}
      <motion.section variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
        <Hero />
      </motion.section>

      {/* Features Section */}
      <motion.section variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
        <Features />
      </motion.section>

      {/* Pricing Section */}
      <motion.section variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
        <Pricing />
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
        <CTA />
      </motion.section>
    </motion.main>
  );
}
