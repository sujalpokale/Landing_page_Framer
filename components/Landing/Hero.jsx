"use client"; // Make it a Client Component

import React from "react";
import { motion } from "framer-motion";

export default function Hero({ cms = {} }) {
  const brandName = cms.brandName ?? "ProductX";
  const heroTitle = cms.heroTitle ?? "Automate the busywork. Focus on impact.";
  const heroSubtitle = cms.heroSubtitle ?? "ProductX automates repetitive tasks across your stack so your team ships faster.";
  const ctaPrimary = cms.ctaPrimary ?? "Get started - free";
  const ctaSecondary = cms.ctaSecondary ?? "Request demo";

  return (
    <header className="border-b">
      <a href="#main" className="sr-only focus:not-sr-only p-2">
        Skip to content
      </a>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label={`${brandName} home`}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="6" fill="#111827" />
            <path d="M7 12h10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-semibold text-lg">{brandName}</span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          <a className="text-sm hover:underline" href="#features">Features</a>
          <a href="#pricing" className="text-sm hover:underline">Pricing</a>
          <a href="#doc" className="text-sm hover:underline">Docs</a>
          <a href="##" className="text-sm hover:underline">Sign In</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md border">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Text */}
          <motion.div
            className="w-full lg:w-6/12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {heroTitle}
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-600 text-lg sm:text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="#signup"
                className="inline-flex items-center px-5 py-3 rounded-md bg-black text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaPrimary}
              </motion.a>
              <motion.a
                href="#demo"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaSecondary}
              </motion.a>
            </motion.div>

            <ul className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <li>Free 14-day trial</li>
              <li>No credit card</li>
              <li>SOC2 Type II</li>
            </ul>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="w-full lg:w-6/12 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <figure aria-hidden="false" className="w-full max-w-md">
              <svg viewBox="0 0 600 400" className="w-full h-auto" role="img" aria-label="ProductX dashboard preview">
                <rect width="600" height="400" rx="14" fill="#0f172a" />
                <g fill="#e6eef8">
                  <rect x="48" y="60" width="504" height="28" rx="6" />
                  <rect x="48" y="110" width="200" height="18" rx="6" />
                  <rect x="48" y="140" width="280" height="18" rx="6" />
                  <rect x="48" y="170" width="160" height="18" rx="6" />
                </g>
              </svg>
              <figcaption className="sr-only">Screenshot of ProductX workflow builder</figcaption>
            </figure>
          </motion.div>
        </div>
      </section>
    </header>
  );
}
