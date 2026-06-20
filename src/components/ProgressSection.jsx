export default function ProgressSection() {
  return (
    <section className="px-6 max-w-7xl mx-auto py-20">
      <div className="glass-card rounded-3xl p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-on-surface mb-6">
              Personalized Nutrition Tracking
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Monitor your progress with real-time analytics. Our AI adapts your meal plans based on your body's response, ensuring optimal results every day.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-fixed-dim/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-2xl">trending_up</span>
                </div>
                <div>
                  <h4 className="text-on-surface font-semibold">Real-Time Analytics</h4>
                  <p className="text-on-surface-variant text-sm">Track every macro and micro nutrient</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-tertiary-fixed-dim/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl">psychology</span>
                </div>
                <div>
                  <h4 className="text-on-surface font-semibold">AI-Powered Insights</h4>
                  <p className="text-on-surface-variant text-sm">Adaptive meal plans that evolve with you</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-on-surface mb-6">Weekly Progress</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-on-surface-variant">Calories Target</span>
                  <span className="text-on-surface font-semibold">1,850 / 2,000</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-primary-fixed-dim to-tertiary-fixed-dim rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-on-surface-variant">Protein Intake</span>
                  <span className="text-on-surface font-semibold">145g / 150g</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[97%] bg-gradient-to-r from-tertiary-fixed-dim to-primary-fixed-dim rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-on-surface-variant">Hydration</span>
                  <span className="text-on-surface font-semibold">2.8L / 3.0L</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[93%] bg-gradient-to-r from-secondary-fixed-dim to-tertiary-fixed-dim rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
