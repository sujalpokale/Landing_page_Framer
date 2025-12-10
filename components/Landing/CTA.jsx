export default function CTA() {
  return (
    <section id="signup" className="w-full py-16 bg-gradient-to-r from-indigo-600 to-sky-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white">
          <h2 className="text-2xl font-bold">Start automating today</h2>
          <p className="mt-2 text-indigo-100">Try ProductX free for 14 days — no credit card required.</p>
        </div>

        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-indigo-700 font-medium">Create free account</a>
          <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-md border text-white">Request demo</a>
        </div>
      </div>
    </section>
  );
}
