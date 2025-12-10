export default function Features(){
    return(
        <section id="features" className="w-full py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6"> 
                    Designed for Real Productivity
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-14">
                    ProductX removes friction and adds clarity to your workflow. Every feature is engineered to save time and increase precision.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold mb-3">
                                Instant Work Sync
                        </h3>
                        <p className="text-gray-600">
                            Your tasks, notes, and project updates stay in perfect sync across every device.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-400">
                        <h3 className="text-xl font-semibold mb-3">Zero Setup Dashboard</h3>
                        <p className="text-gray-600">
                            No onboarding chaos. You're productive from minute one with a fully guided UI.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold mb-3">Live AI Suggestions</h3>
                        <p className="text-gray-600">
                            Smart recommendations help you decide faster and plan smarter.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}