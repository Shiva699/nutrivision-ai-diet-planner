# NutriVision - AI-Powered Diet Planner 🤖

A modern, production-ready diet planning web application powered by **Groq AI (LLaMA 3.3 70B)**, built with React, Vite, and Tailwind CSS.

## ✨ NEW: AI-Powered Features

### 🧠 Powered by Groq LLaMA 3.3 70B Model

1. **AI Meal Plan Generator** 🍽️
   - Generate complete personalized daily meal plans
   - Customizable by goal, diet type, calories, and restrictions
   - Includes breakfast, lunch, dinner, snacks with ingredients
   - Macro distribution and nutrition tips
   - **📥 Download as PDF** - Professional PDF export with one click

2. **AI Nutrition Assistant** 💬
   - Interactive chat with AI nutritionist
   - Instant answers to nutrition questions
   - Evidence-based dietary advice
   - Quick question shortcuts

3. **AI Meal Analyzer** 📊
   - Analyze any meal description
   - Get health score (1-10)
   - Estimated calories and macro balance
   - Pros, cons, and improvement suggestions

## 🚀 Core Features

- **Interactive Meal Planner**: View daily meals with nutrition breakdown
- **Nutrient Tracking**: Real-time monitoring of carbs, protein, and fats
- **Progress Dashboard**: Track your weekly nutrition goals
- **Smart Food Categories**: Browse through organized food groups
- **Health Benefits**: Learn about the science behind nutrition
- **Success Stories**: Real testimonials from satisfied users
- **FAQ Section**: Interactive accordion with common questions
- **Newsletter Signup**: Stay updated with the latest nutrition tips
- **Glassmorphic UI**: Modern, attractive design with smooth animations
- **Fully Responsive**: Perfect on mobile, tablet, and desktop

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Material Symbols**: Google's icon library
- **Custom CSS**: Enhanced animations and glass effects

## 📦 Project Structure

```
dietplanner/
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AIMealGenerator.jsx    # 🤖 AI Feature 1
│   │   ├── AIAssistant.jsx        # 🤖 AI Feature 2
│   │   ├── AIMealAnalyzer.jsx     # 🤖 AI Feature 3
│   │   ├── MealPlanner.jsx        # Diet functionality
│   │   ├── DietTips.jsx
│   │   ├── ProgressSection.jsx
│   │   ├── FoodCategories.jsx
│   │   ├── Benefits.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── services/          # AI Services
│   │   └── groqService.js  # 🤖 Groq API integration
│   ├── data/              # Data files
│   │   ├── mealsData.js    # Meal and nutrient data
│   │   ├── benefitsData.js
│   │   ├── faqData.js
│   │   ├── foodCategories.js
│   │   ├── testimonialsData.js
│   │   └── tipsData.js
│   ├── pages/
│   │   └── Home.jsx        # Main page
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Enhanced styles
├── public/
│   └── favicon.svg
├── .env                    # 🔐 API Key (DO NOT SHARE)
└── Configuration files

## 🎨 Key Components

### MealPlanner Component
The core diet functionality showing:
- Daily meal schedule (Breakfast, Lunch, Dinner)
- Meal images and calorie counts
- Nutrient distribution (Carbs, Protein, Fats)
- AI-powered suggestions
- Shopping list generator

### ProgressSection Component
Tracks user progress with:
- Weekly calorie targets
- Protein intake monitoring
- Hydration tracking
- Real-time progress bars

## 🚀 Quick Start

### Prerequisites
- Node.js installed
- Groq API key (already configured in `.env`)

### Install Dependencies
```bash
npm install
```

### Environment Setup
Your `.env` file should contain:
```
VITE_GROQ_API_KEY=your_groq_api_key_here
```
✅ Already configured!

### Development Server
```bash
npm run dev
```
OR double-click `start-dev.bat`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤖 AI Features Documentation

For detailed information about AI features, see:
- **[AI_FEATURES.md](AI_FEATURES.md)** - Complete AI features guide
- **[QUICK_START_AI.md](QUICK_START_AI.md)** - Quick start guide

## 🎯 Diet Functionality

The application includes a fully functional diet planner with:

1. **Meal Planning**: Three meals per day with images and nutritional info
2. **Nutrient Tracking**: Visual representation of macro distribution
3. **AI Suggestions**: Smart recommendations based on daily intake
4. **Progress Monitoring**: Weekly tracking of nutrition goals
5. **Shopping List**: Generate lists from meal plans
6. **Food Categories**: Browse and explore different food groups

## 🌐 Deployment

The app is production-ready and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interactions
- Optimized images and animations

## ✨ UI/UX Features

- Glassmorphic cards with blur effects
- Smooth scroll animations
- Hover effects and transitions
- Gradient backgrounds
- Material Design icons
- Custom scrollbars
- Accessibility support
- Reduced motion support

## 🔧 Customization

All data is modular and can be easily customized:
- Edit files in `src/data/` to change content
- Modify `tailwind.config.js` for color schemes
- Update `src/index.css` for custom styles

## 📄 License

This project is built for demonstration purposes.

## 🎉 Built with Care

Created from scratch with attention to:
- Clean, maintainable code
- Modern React best practices
- Performance optimization
- Beautiful, intuitive UI
- Complete diet planning functionality
