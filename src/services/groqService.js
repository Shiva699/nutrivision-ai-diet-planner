import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Enable client-side usage
});

/**
 * Generate a personalized meal plan using Groq AI
 * @param {Object} params - User preferences (goal, dietType, calories, restrictions)
 * @returns {Promise<Object>} - Generated meal plan
 */
export async function generateMealPlan(params) {
  const { goal, dietType, calories, restrictions } = params;
  
  const prompt = `You are a professional nutritionist AI. Generate a detailed one-day meal plan with the following requirements:

Goal: ${goal}
Diet Type: ${dietType}
Daily Calories: ${calories} kcal
Dietary Restrictions: ${restrictions || 'None'}

Please provide a JSON response with this exact structure:
{
  "breakfast": {
    "name": "Meal name",
    "time": "08:00 AM",
    "calories": 400,
    "description": "Brief description",
    "ingredients": ["ingredient1", "ingredient2"]
  },
  "lunch": {
    "name": "Meal name",
    "time": "01:00 PM",
    "calories": 500,
    "description": "Brief description",
    "ingredients": ["ingredient1", "ingredient2"]
  },
  "dinner": {
    "name": "Meal name",
    "time": "07:00 PM",
    "calories": 450,
    "description": "Brief description",
    "ingredients": ["ingredient1", "ingredient2"]
  },
  "snacks": {
    "name": "Snack options",
    "calories": 200,
    "description": "Healthy snack ideas"
  },
  "macros": {
    "protein": "30%",
    "carbs": "45%",
    "fats": "25%"
  },
  "tips": "Daily nutrition tip"
}

Only return valid JSON, no additional text.`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 2000,
    });

    const response = completion.choices[0]?.message?.content || "{}";
    return JSON.parse(response);
  } catch (error) {
    console.error("Error generating meal plan:", error);
    throw error;
  }
}

/**
 * Get AI nutrition advice
 * @param {string} question - User's nutrition question
 * @returns {Promise<string>} - AI response
 */
export async function getNutritionAdvice(question) {
  const prompt = `You are a professional nutritionist AI assistant. Answer this nutrition question clearly and concisely in 2-3 sentences:

Question: ${question}

Provide practical, evidence-based advice.`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 300,
    });

    return completion.choices[0]?.message?.content || "I couldn't generate advice at this time.";
  } catch (error) {
    console.error("Error getting nutrition advice:", error);
    throw error;
  }
}

/**
 * Analyze a meal and provide nutrition insights
 * @param {string} mealDescription - Description of the meal
 * @returns {Promise<Object>} - Nutrition analysis
 */
export async function analyzeMeal(mealDescription) {
  const prompt = `You are a nutrition analysis AI. Analyze this meal and provide insights:

Meal: ${mealDescription}

Provide a JSON response with this structure:
{
  "estimatedCalories": 500,
  "healthScore": 8,
  "pros": ["benefit1", "benefit2"],
  "cons": ["concern1"],
  "suggestion": "How to improve this meal",
  "macroBalance": "Good/Fair/Poor"
}

Only return valid JSON, no additional text.`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || "{}";
    return JSON.parse(response);
  } catch (error) {
    console.error("Error analyzing meal:", error);
    throw error;
  }
}

/**
 * Get personalized daily nutrition tips
 * @param {string} userGoal - User's health goal
 * @returns {Promise<string>} - Personalized tip
 */
export async function getDailyTip(userGoal) {
  const prompt = `You are a nutrition coach. Provide one practical, actionable nutrition tip for someone whose goal is: ${userGoal}. Keep it to 1-2 sentences.`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 0.8,
      max_tokens: 150,
    });

    return completion.choices[0]?.message?.content || "Stay hydrated and eat balanced meals!";
  } catch (error) {
    console.error("Error getting daily tip:", error);
    throw error;
  }
}
