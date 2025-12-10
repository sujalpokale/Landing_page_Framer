export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          No hidden fees. No surprises. Upgrade when you're ready.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Basic Plan */}
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-600 mb-6">Ideal for individuals</p>
            <p className="text-4xl font-bold mb-6">$9<span className="text-lg font-normal">/mo</span></p>
            <ul className="text-gray-600 space-y-2 mb-8">
              <li>Basic workspace</li>
              <li>Email support</li>
              <li>Community access</li>
            </ul>
            <button className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition" aria-label="Choose Starter Plan">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-black text-white rounded-2xl border-2 border-black">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-300 mb-6">Best for teams</p>
            <p className="text-4xl font-bold mb-6">$29<span className="text-lg font-normal">/mo</span></p>
            <ul className="text-gray-200 space-y-2 mb-8">
              <li>Unlimited projects</li>
              <li>Priority email support</li>
              <li>AI workspace tools</li>
            </ul>
            <button className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:opacity-90 transition" aria-label="Choose Pro Plan">
              Upgrade Now
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">For large-scale systems</p>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="text-gray-600 space-y-2 mb-8">
              <li>Dedicated workspace</li>
              <li>Priority onboarding</li>
              <li>24/7 support</li>
            </ul>
            <button className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition" aria-label="Contact Sales for Enterprise Plan">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
