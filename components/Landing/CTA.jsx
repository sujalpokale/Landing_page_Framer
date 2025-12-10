"use client"; // Required for Framer Motion

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="signup" className="w-full py-16 bg-gradient-to-r from-indigo-600 to-sky-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Text */}
        <motion.div
          className="text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Start automating today
          </motion.h2>
          <motion.p
            className="mt-2 text-indigo-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Try ProductX free for 14 days — no credit card required.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-indigo-700 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create free account
          </motion.a>
          <motion.a
            href="#demo"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md border text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request demo
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
