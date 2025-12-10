"use client"; // ← Add this at the very top

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      description: "Ideal for individuals",
      price: "$9",
      period: "/mo",
      features: ["Basic workspace", "Email support", "Community access"],
      bg: "bg-gray-50",
      textColor: "text-gray-600",
      buttonBg: "bg-black",
      buttonText: "text-white",
      buttonLabel: "Choose Starter Plan",
      border: "border border-gray-200",
    },
    {
      id: 2,
      name: "Pro",
      description: "Best for teams",
      price: "$29",
      period: "/mo",
      features: ["Unlimited projects", "Priority email support", "AI workspace tools"],
      bg: "bg-black",
      textColor: "text-gray-200",
      buttonBg: "bg-white",
      buttonText: "text-black",
      buttonLabel: "Choose Pro Plan",
      border: "border-2 border-black",
    },
    {
      id: 3,
      name: "Enterprise",
      description: "For large-scale systems",
      price: "Custom",
      features: ["Dedicated workspace", "Priority onboarding", "24/7 support"],
      bg: "bg-gray-50",
      textColor: "text-gray-600",
      buttonBg: "bg-black",
      buttonText: "text-white",
      buttonLabel: "Contact Sales for Enterprise Plan",
      border: "border border-gray-200",
    },
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          No hidden fees. No surprises. Upgrade when you're ready.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`p-8 rounded-2xl ${plan.bg} ${plan.border}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className={`text-xl font-semibold mb-2 ${plan.textColor}`}>{plan.name}</h3>
              <p className={`${plan.textColor} mb-6`}>{plan.description}</p>
              <p className={`text-4xl font-bold mb-6 ${plan.textColor}`}>
                {plan.price}
                {plan.period && <span className="text-lg font-normal">{plan.period}</span>}
              </p>
              <ul className={`space-y-2 mb-8 ${plan.textColor}`}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <motion.button
                className={`w-full py-3 ${plan.buttonBg} ${plan.buttonText} rounded-xl font-semibold`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={plan.buttonLabel}
              >
                {plan.name === "Pro"
                  ? "Upgrade Now"
                  : plan.name === "Enterprise"
                  ? "Contact Sales"
                  : "Get Started"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
