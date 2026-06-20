import { useState } from 'react';
import { analyzeMeal } from '../services/groqService';

export default function AIMealAnalyzer() {
  const [mealInput, setMealInput] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!mealInput.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const result = await analyzeMeal(mealInput);
      setAnalysis(result);
    } catch (err) {
      setError("Failed to analyze meal. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getHealthScoreColor = (score) => {
    if (score >= 8) return 'text-tertiary-fixed-dim';
    if (score >= 6) return 'text-primary-fixed-dim';
    return 'text-error';
  };

  return (
    <section className="px-6 max-w-5xl mx-auto py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="material-symbols-outlined text-secondary-fixed-dim text-5xl">analytics</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-on-surface">AI Meal Analyzer</h2>
        </div>
        <p className="text-lg text-on-surface-variant">
          Get instant nutrition insights for any meal
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-on-surface mb-6">Describe Your Meal</h3>
          
          <form onSubmit={handleAnalyze} className="space-y-6">
            <div>
              <label className="block text-on-surface font-semibold mb-3">
                What did you eat?
              </label>
              <textarea
                value={mealInput}
                onChange={(e) => setMealInput(e.target.value)}
                placeholder="E.g., Grilled chicken breast with brown rice, steamed broccoli, and a side salad with olive oil dressing"
                rows="6"
                className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-secondary-fixed-dim transition-colors resize-none"
              />
              <p className="text-sm text-on-surface-variant mt-2">
                Be as detailed as possible for better analysis
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !mealInput.trim()}
              className="w-full py-4 bg-gradient-to-r from-secondary-fixed-dim to-tertiary-fixed-dim text-background rounded-xl font-semibold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed gradient-animate"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Analyzing...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">science</span>
                  Analyze Meal
                </span>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-error/10 border border-error/20 rounded-xl text-error">
              {error}
            </div>
          )}

          {/* Example meals */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-on-surface-variant mb-3">Try these examples:</h4>
            <div className="space-y-2">
              {[
                "Big Mac, large fries, and a Coke",
                "Greek yogurt with berries and honey",
                "Vegetable stir-fry with tofu and quinoa"
              ].map((example, i) => (
                <button
                  key={i}
                  onClick={() => setMealInput(example)}
                  className="w-full text-left px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-on-surface transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="glass-card p-8 rounded-3xl">
          {!analysis ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <span className="material-symbols-outlined text-on-surface-variant text-6xl mb-4">bar_chart</span>
              <h3 className="text-2xl font-semibold text-on-surface mb-2">Analysis Results</h3>
              <p className="text-on-surface-variant">Enter a meal description and click Analyze</p>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-on-surface mb-6">Nutrition Analysis</h3>

              {/* Health Score */}
              <div className="bg-gradient-to-r from-secondary-fixed-dim/10 to-tertiary-fixed-dim/10 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-on-surface-variant mb-1">Health Score</p>
                    <p className={`text-5xl font-bold ${getHealthScoreColor(analysis.healthScore)}`}>
                      {analysis.healthScore}<span className="text-2xl">/10</span>
                    </p>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                    <span className={`material-symbols-outlined text-4xl ${getHealthScoreColor(analysis.healthScore)}`}>
                      {analysis.healthScore >= 8 ? 'check_circle' : analysis.healthScore >= 6 ? 'info' : 'warning'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Estimated Calories */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary-fixed-dim">local_fire_department</span>
                  <h4 className="text-lg font-semibold text-on-surface">Estimated Calories</h4>
                </div>
                <p className="text-3xl font-bold text-primary-fixed-dim">{analysis.estimatedCalories} kcal</p>
              </div>

              {/* Macro Balance */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">balance</span>
                  <h4 className="text-lg font-semibold text-on-surface">Macro Balance</h4>
                </div>
                <p className="text-2xl font-bold text-tertiary-fixed-dim">{analysis.macroBalance}</p>
              </div>

              {/* Pros */}
              {analysis.pros && analysis.pros.length > 0 && (
                <div className="bg-tertiary-fixed-dim/5 p-6 rounded-2xl border border-tertiary-fixed-dim/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">thumb_up</span>
                    <h4 className="text-lg font-semibold text-on-surface">Positive Aspects</h4>
                  </div>
                  <ul className="space-y-2">
                    {analysis.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm mt-0.5">check</span>
                        <span className="text-on-surface-variant">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Cons */}
              {analysis.cons && analysis.cons.length > 0 && (
                <div className="bg-error/5 p-6 rounded-2xl border border-error/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-error">priority_high</span>
                    <h4 className="text-lg font-semibold text-on-surface">Areas to Improve</h4>
                  </div>
                  <ul className="space-y-2">
                    {analysis.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-error text-sm mt-0.5">close</span>
                        <span className="text-on-surface-variant">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Suggestion */}
              {analysis.suggestion && (
                <div className="bg-primary-fixed-dim/5 p-6 rounded-2xl border border-primary-fixed-dim/20">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-primary-fixed-dim">lightbulb</span>
                    <div>
                      <h4 className="text-lg font-semibold text-on-surface mb-2">AI Suggestion</h4>
                      <p className="text-on-surface-variant italic">"{analysis.suggestion}"</p>
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
