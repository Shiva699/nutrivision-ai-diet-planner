import { useState } from 'react';
import { faqData } from "../data/faqData";

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="px-6 max-w-4xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-on-surface mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-on-surface-variant">
          Everything you need to know about NutriVision.
        </p>
      </div>
      
      <div className="space-y-4">
        {faqData.map((faq) => (
          <div 
            key={faq.id}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
            >
              <h3 className="text-xl font-semibold text-on-surface pr-4">{faq.question}</h3>
              <span className={`material-symbols-outlined text-primary-fixed-dim transition-transform ${
                openId === faq.id ? 'rotate-180' : ''
              }`}>
                expand_more
              </span>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              openId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <p className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
