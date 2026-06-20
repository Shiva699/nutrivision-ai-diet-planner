export default function Hero() {
  return (
    <section className="relative px-6 max-w-7xl mx-auto py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="px-4 py-2 rounded-full bg-primary-fixed-dim/10 text-primary-fixed-dim border border-primary-fixed-dim/20 text-sm font-semibold inline-block">
            Visionary Diet Planning
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-on-surface leading-tight">
            Transform Your Health Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed-dim to-tertiary-fixed-dim gradient-animate">
              Smarter Nutrition
            </span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl">
            AI-driven nutritional blueprints designed to align with your unique biology. Precision planning meets futuristic health technology.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-fixed-dim to-secondary-container text-background rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary-fixed-dim/20 gradient-animate">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-primary-fixed-dim/40 text-primary-fixed-dim rounded-xl font-semibold text-lg hover:bg-primary-fixed-dim/5 transition-all">
              Explore Diet Tips
            </button>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-fixed-dim/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="glass-card rounded-3xl p-2 float-animation relative overflow-hidden">
            <img 
              className="w-full h-auto rounded-3xl object-cover shadow-2xl" 
              alt="Cinematic, high-fidelity food photography of a vibrant Mediterranean Salmon Bowl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6u31mLVYHfnQgC8r6k99KQspW2aJbM1VK_c_PDAaw52viD2lHx_uSsLu44QPDfoXY255MSnLf4QFJeKU0oGysty5a2iu2Zv2GBd3eGdrE8QvKgDX-N5kYld0IkYVd_it25ay1P5xgRp6atfttL-9q_MUkhPemI_WryWwJ2Fr3ifRDuQhIHgVogictDpIXi6q_f1IzwouscEOmIgRopCl_dd1m-bFGL-6tgXYiCIE6mKd9Ib3i-8EXHkS3NyijWiU5VWSb0cZF-Nk"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
