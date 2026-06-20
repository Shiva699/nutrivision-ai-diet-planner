import { mealsData } from "../data/mealsData";

export default function MealPlanner() {
  return (
    <section id="plans" className="px-6 max-w-7xl mx-auto py-20">
      <div className="glass-card rounded-3xl overflow-hidden grid lg:grid-cols-4 min-h-[600px]">
        {/* Main Planner Dashboard */}
        <div className="lg:col-span-3 p-8 lg:p-12 space-y-8 border-r border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-on-surface">Meal Blueprint: Wednesday</h2>
              <p className="text-lg text-on-surface-variant mt-2">Your tailored roadmap for metabolic optimization.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-3 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-3 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {mealsData.meals.map((meal) => (
              <div 
                key={meal.id} 
                className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    alt={meal.imageAlt} 
                    src={meal.image} 
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`text-xs ${meal.colorClass} uppercase tracking-widest font-semibold`}>
                        {meal.time} • {meal.type}
                      </span>
                      <h4 className="text-xl font-semibold text-on-surface mt-1">{meal.title}</h4>
                    </div>
                    <span className="text-sm text-on-surface-variant font-medium">{meal.calories}</span>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Planner Sidebar Stats */}
        <div className="bg-surface-container-high/30 p-8 flex flex-col gap-8">
          <h3 className="text-xl font-semibold text-on-surface">Nutrient Distribution</h3>
          <div className="space-y-6">
            {mealsData.nutrients.map((nutrient) => (
              <div key={nutrient.id} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">{nutrient.label}</span>
                  <span className="text-on-surface font-semibold">{nutrient.value}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${nutrient.colorClass} ${nutrient.widthClass} rounded-full transition-all duration-1000`}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-auto glass-card p-6 rounded-xl space-y-3">
            <p className="text-sm text-on-surface-variant italic">"{mealsData.aiSuggestion}"</p>
            <div className="flex items-center gap-2 text-primary-fixed-dim text-sm font-semibold">
              <span className="material-symbols-outlined text-lg">lightbulb</span> AI Suggestion
            </div>
          </div>
          
          <button className="w-full py-3 rounded-xl bg-surface border border-white/10 text-sm font-semibold hover:bg-white/5 transition-colors">
            Generate Shopping List
          </button>
        </div>
      </div>
    </section>
  );
}
