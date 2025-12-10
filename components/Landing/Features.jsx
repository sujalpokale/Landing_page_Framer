"use client"; // Required for Framer Motion

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Instant Work Sync",
      description:
        "Your tasks, notes, and project updates stay in perfect sync across every device.",
      border: "border-gray-100",
    },
    {
      id: 2,
      title: "Zero Setup Dashboard",
      description:
        "No onboarding chaos. You're productive from minute one with a fully guided UI.",
      border: "border-gray-400",
    },
    {
      id: 3,
      title: "Live AI Suggestions",
      description: "Smart recommendations help you decide faster and plan smarter.",
      border: "border-gray-100",
    },
  ];

  return (
    <section id="features" className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Designed for Real Productivity
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ProductX removes friction and adds clarity to your workflow. Every feature is engineered to save time and increase precision.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`p-6 bg-white rounded-2xl shadow-sm border ${feature.border} cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
