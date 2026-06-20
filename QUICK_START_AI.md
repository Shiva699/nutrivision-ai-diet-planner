# 🚀 Quick Start Guide - AI Features

## Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure API Key
Your `.env` file already has the Groq API key:
```
VITE_GROQ_API_KEY=YOUR_GROQ_API_KEY```

### Step 3: Start Development Server
```bash
npm run dev
```
OR double-click `start-dev.bat`

---

## 🎯 AI Features at a Glance

### 1️⃣ AI Meal Plan Generator
**What**: Generate complete daily meal plans with AI
**How**: Fill form → Click "Generate" → Get instant meal plan
**Time**: 3-5 seconds

### 2️⃣ AI Nutrition Assistant  
**What**: Chat with AI nutritionist
**How**: Type question → Get instant answer
**Time**: 1-3 seconds

### 3️⃣ AI Meal Analyzer
**What**: Analyze any meal for nutrition
**How**: Describe meal → Click "Analyze" → Get health score + insights
**Time**: 2-4 seconds

---

## 🧪 Test It Out

### Try AI Meal Generator:
1. Select "Weight Loss" + "Balanced" + "2000 cal"
2. Click "Generate Meal Plan"
3. See personalized breakfast, lunch, dinner

### Try AI Assistant:
1. Click "What should I eat before a workout?"
2. Get instant AI advice
3. Ask follow-up questions

### Try Meal Analyzer:
1. Type: "Grilled chicken with rice and vegetables"
2. Click "Analyze Meal"
3. See health score, calories, pros/cons

---

## 📂 Project Structure

```
dietplanner/
├── src/
│   ├── services/
│   │   └── groqService.js         # AI API calls
│   ├── components/
│   │   ├── AIMealGenerator.jsx   # Feature 1
│   │   ├── AIAssistant.jsx        # Feature 2
│   │   └── AIMealAnalyzer.jsx     # Feature 3
│   └── pages/
│       └── Home.jsx                # All features combined
└── .env                            # API key (DO NOT SHARE)
```

---

## ✅ Verification Checklist

- [x] `npm install` completed
- [x] `.env` file exists with API key
- [x] `npm run dev` starts server
- [x] All 3 AI features visible on homepage
- [x] Meal generator creates plans
- [x] Chat assistant responds
- [x] Meal analyzer works

---

## 🐛 Quick Fixes

**If AI features don't work**:
1. Check `.env` file exists
2. Restart dev server
3. Check browser console for errors
4. Verify internet connection

**If build fails**:
```bash
npm install
npm run build
```

---

## 🎉 You're Ready!

Your AI-powered diet planner is now:
- ✅ Fully functional
- ✅ Production ready
- ✅ Using Groq LLaMA 3.3 70B
- ✅ Beautiful UI with animations
- ✅ Mobile responsive

**Start the server and explore!** 🚀
