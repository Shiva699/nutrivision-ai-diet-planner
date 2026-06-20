export default function Newsletter() {
  return (
    <section className="px-6 max-w-4xl mx-auto py-20">
      <div className="glass-card p-12 rounded-3xl text-center">
        <span className="material-symbols-outlined text-primary-fixed-dim text-5xl mb-6 inline-block">mail</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-on-surface mb-4">Stay Updated</h2>
        <p className="text-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
          Get the latest nutrition science, meal plans, and exclusive wellness content delivered to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-surface border border-white/10 rounded-xl text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary-fixed-dim transition-colors"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-primary-fixed-dim to-tertiary-fixed-dim text-background rounded-xl font-semibold hover:scale-105 transition-transform gradient-animate"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
