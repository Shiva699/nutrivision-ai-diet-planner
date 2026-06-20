import { useState } from 'react';
import { generateMealPlan } from '../services/groqService';
import { downloadDietPlanPDF, calculateTotalCalories } from '../services/pdfService';

export default function AIMealGenerator() {
  const [formData, setFormData] = useState({
    goal: 'weight-loss',
    dietType: 'balanced',
    calories: '2000',
    restrictions: ''
  });
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const plan = await generateMealPlan(formData);
      setMealPlan(plan);
    } catch (err) {
      setError("Failed to generate meal plan. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    if (!mealPlan) return;
    
    try {
      downloadDietPlanPDF(mealPlan, formData);
    } catch (err) {
      console.error("Error generating PDF:", err);
      setError("Failed to generate PDF. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="px-6 max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary-fixed-dim text-5xl">psychology</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-on-surface">AI Meal Plan Generator</h2>
        </div>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Get a personalized meal plan powered by advanced AI technology
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-on-surface mb-6">Your Preferences</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-on-surface font-semibold mb-2">Health Goal</label>
              <select 
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-colors"
              >
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="maintenance">Maintain Weight</option>
                <option value="energy">Increase Energy</option>
              </select>
            </div>

            <div>
              <label className="block text-on-surface font-semibold mb-2">Diet Type</label>
              <select 
                name="dietType"
                value={formData.dietType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-colors"
              >
                <option value="balanced">Balanced</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="keto">Keto</option>
                <option value="paleo">Paleo</option>
                <option value="mediterranean">Mediterranean</option>
              </select>
            </div>

            <div>
              <label className="block text-on-surface font-semibold mb-2">Daily Calories</label>
              <input 
                type="number"
                name="calories"
                value={formData.calories}
                onChange={handleChange}
                min="1200"
                max="4000"
                className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-colors"
              />
            </div>

            <div>
              <label className="block text-on-surface font-semibold mb-2">Dietary Restrictions (Optional)</label>
              <input 
                type="text"
                name="restrictions"
                value={formData.restrictions}
                onChange={handleChange}
                placeholder="e.g., No nuts, gluten-free"
                className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary-fixed-dim transition-colors"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-primary-fixed-dim to-tertiary-fixed-dim text-background rounded-xl font-semibold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed gradient-animate"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Generating...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">restaurant_menu</span>
                  Generate Meal Plan
                </span>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-error/10 border border-error/20 rounded-xl text-error">
              {error}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="glass-card p-8 rounded-3xl custom-scrollbar overflow-y-auto max-h-[800px]">
          {!mealPlan ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <span className="material-symbols-outlined text-on-surface-variant text-6xl mb-4">fastfood</span>
              <h3 className="text-2xl font-semibold text-on-surface mb-2">Your Meal Plan Will Appear Here</h3>
              <p className="text-on-surface-variant">Fill out the form and click Generate to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-on-surface">Your Personalized Meal Plan</h3>
                
                {/* Download PDF Button */}
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-fixed-dim to-primary-fixed-dim text-background rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg gradient-animate"
                >
                  <span className="material-symbols-outlined">download</span>
                  Download PDF
                </button>
              </div>
              
              {/* Total Calories Display */}
              <div className="bg-gradient-to-r from-primary-fixed-dim/10 to-tertiary-fixed-dim/10 p-4 rounded-xl border border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-semibold">Total Daily Calories:</span>
                  <span className="text-2xl font-bold text-primary-fixed-dim">{calculateTotalCalories(mealPlan)} kcal</span>
                </div>
              </div>
              
              {/* Breakfast */}
              {mealPlan.breakfast && (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary-fixed-dim">wb_sunny</span>
                    <h4 className="text-xl font-semibold text-on-surface">Breakfast - {mealPlan.breakfast.time}</h4>
                  </div>
                  <h5 className="text-lg font-bold text-primary-fixed-dim mb-2">{mealPlan.breakfast.name}</h5>
                  <p className="text-on-surface-variant mb-2">{mealPlan.breakfast.description}</p>
                  <p className="text-sm text-tertiary-fixed-dim font-semibold">{mealPlan.breakfast.calories} kcal</p>
                  {mealPlan.breakfast.ingredients && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {mealPlan.breakfast.ingredients.map((ing, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-primary-fixed-dim/10 text-primary-fixed-dim rounded-full">
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Lunch */}
              {mealPlan.lunch && (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">lunch_dining</span>
                    <h4 className="text-xl font-semibold text-on-surface">Lunch - {mealPlan.lunch.time}</h4>
                  </div>
                  <h5 className="text-lg font-bold text-tertiary-fixed-dim mb-2">{mealPlan.lunch.name}</h5>
                  <p className="text-on-surface-variant mb-2">{mealPlan.lunch.description}</p>
                  <p className="text-sm text-tertiary-fixed-dim font-semibold">{mealPlan.lunch.calories} kcal</p>
                  {mealPlan.lunch.ingredients && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {mealPlan.lunch.ingredients.map((ing, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-tertiary-fixed-dim/10 text-tertiary-fixed-dim rounded-full">
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Dinner */}
              {mealPlan.dinner && (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-secondary-fixed-dim">dinner_dining</span>
                    <h4 className="text-xl font-semibold text-on-surface">Dinner - {mealPlan.dinner.time}</h4>
                  </div>
                  <h5 className="text-lg font-bold text-secondary-fixed-dim mb-2">{mealPlan.dinner.name}</h5>
                  <p className="text-on-surface-variant mb-2">{mealPlan.dinner.description}</p>
                  <p className="text-sm text-secondary-fixed-dim font-semibold">{mealPlan.dinner.calories} kcal</p>
                  {mealPlan.dinner.ingredients && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {mealPlan.dinner.ingredients.map((ing, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-secondary-fixed-dim/10 text-secondary-fixed-dim rounded-full">
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Snacks */}
              {mealPlan.snacks && (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary-fixed-dim">cookie</span>
                    <h4 className="text-xl font-semibold text-on-surface">Snacks</h4>
                  </div>
                  <h5 className="text-lg font-bold text-primary-fixed-dim mb-2">{mealPlan.snacks.name}</h5>
                  <p className="text-on-surface-variant mb-2">{mealPlan.snacks.description}</p>
                  <p className="text-sm text-primary-fixed-dim font-semibold">{mealPlan.snacks.calories} kcal</p>
                </div>
              )}

              {/* Macros */}
              {mealPlan.macros && (
                <div className="bg-gradient-to-r from-primary-fixed-dim/10 to-tertiary-fixed-dim/10 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-semibold text-on-surface mb-4">Macro Distribution</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary-fixed-dim">{mealPlan.macros.protein}</p>
                      <p className="text-sm text-on-surface-variant">Protein</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-tertiary-fixed-dim">{mealPlan.macros.carbs}</p>
                      <p className="text-sm text-on-surface-variant">Carbs</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-secondary-fixed-dim">{mealPlan.macros.fats}</p>
                      <p className="text-sm text-on-surface-variant">Fats</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tips */}
              {mealPlan.tips && (
                <div className="bg-primary-fixed-dim/5 p-6 rounded-2xl border border-primary-fixed-dim/20">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-primary-fixed-dim">tips_and_updates</span>
                    <div>
                      <h4 className="text-lg font-semibold text-on-surface mb-2">AI Nutrition Tip</h4>
                      <p className="text-on-surface-variant italic">"{mealPlan.tips}"</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
