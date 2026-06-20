import { foodCategories } from "../data/foodCategories";

export default function FoodCategories() {
  return (
    <section className="px-6 max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-on-surface mb-4">Smart Food Categories</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore nutrient-dense food groups tailored to your goals.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {foodCategories.map((category) => (
          <div 
            key={category.id}
            className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className={`w-16 h-16 ${category.iconBgColor} rounded-2xl flex items-center justify-center`}>
              <span className={`material-symbols-outlined text-3xl ${category.iconColor}`}>{category.icon}</span>
            </div>
            <span className="text-on-surface font-semibold text-center">{category.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
