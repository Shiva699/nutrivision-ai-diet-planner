import { tipsData } from "../data/tipsData";

export default function DietTips() {
  return (
    <section id="features" className="px-6 max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-on-surface mb-4">Core Performance Principles</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Evidence-based strategies to optimize your nutritional foundation.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tipsData.map((tip) => (
          <div 
            key={tip.id}
            className="glass-card p-8 rounded-2xl group hover:scale-105 transition-transform cursor-pointer"
          >
            <div className={`w-16 h-16 ${tip.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <span className={`material-symbols-outlined text-3xl ${tip.iconColor}`}>{tip.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-on-surface mb-3">{tip.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
