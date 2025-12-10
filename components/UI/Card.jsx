"use client"; // Required for Framer Motion

import { motion } from "framer-motion";

export default function Card({ title, children, className = "" }) {
  return (
    <motion.div
      className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-200 ${className} cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    >
      {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
      <div className="text-gray-600">{children}</div>
    </motion.div>
  );
}
