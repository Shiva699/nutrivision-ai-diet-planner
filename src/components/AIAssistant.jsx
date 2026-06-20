import { useState } from 'react';
import { getNutritionAdvice } from '../services/groqService';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm your AI nutrition assistant. Ask me anything about diet, nutrition, meal planning, or healthy eating!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const quickQuestions = [
    "What should I eat before a workout?",
    "How much protein do I need daily?",
    "What are healthy snack options?",
    "How can I reduce sugar intake?"
  ];

  const handleSubmit = async (e, question = null) => {
    if (e) e.preventDefault();
    
    const userQuestion = question || input;
    if (!userQuestion.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: userQuestion };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Get AI response
      const response = await getNutritionAdvice(userQuestion);
      const assistantMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = { 
        role: 'assistant', 
        content: "Sorry, I couldn't process that question. Please try again." 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 max-w-4xl mx-auto py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-5xl">chat</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-on-surface">AI Nutrition Assistant</h2>
        </div>
        <p className="text-lg text-on-surface-variant">
          Get instant answers to your nutrition questions
        </p>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden">
        {/* Chat Messages */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4 custom-scrollbar">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-10 h-10 bg-tertiary-fixed-dim/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl">smart_toy</span>
                </div>
              )}
              
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                message.role === 'user' 
                  ? 'bg-gradient-to-r from-primary-fixed-dim to-tertiary-fixed-dim text-background'
                  : 'bg-white/5 border border-white/10 text-on-surface'
              }`}>
                <p className="leading-relaxed">{message.content}</p>
              </div>

              {message.role === 'user' && (
                <div className="w-10 h-10 bg-primary-fixed-dim/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-xl">person</span>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-10 h-10 bg-tertiary-fixed-dim/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl">smart_toy</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-tertiary-fixed-dim rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-tertiary-fixed-dim rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-tertiary-fixed-dim rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        <div className="px-6 py-4 border-t border-white/10">
          <p className="text-sm text-on-surface-variant mb-3">Quick Questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={(e) => handleSubmit(e, question)}
                disabled={loading}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-on-surface transition-colors disabled:opacity-50"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-6 border-t border-white/10">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about nutrition, diet, or healthy eating..."
              disabled={loading}
              className="flex-1 px-6 py-4 bg-surface border border-white/10 rounded-xl text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-tertiary-fixed-dim transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-6 py-4 bg-gradient-to-r from-tertiary-fixed-dim to-primary-fixed-dim text-background rounded-xl font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed gradient-animate"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
