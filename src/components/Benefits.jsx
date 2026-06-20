import { benefitsData } from "../data/benefitsData";

export default function Benefits() {
  return (
    <section className="px-6 max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-on-surface mb-4">Health Benefits</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Transform every aspect of your wellbeing with precision nutrition.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefitsData.map((benefit) => (
          <div 
            key={benefit.id}
            className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform cursor-pointer"
          >
            <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
              <span className={`material-symbols-outlined text-3xl ${benefit.iconColor}`}>{benefit.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-on-surface mb-3">{benefit.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
