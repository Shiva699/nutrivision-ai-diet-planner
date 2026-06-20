import { testimonialsData } from "../data/testimonialsData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-on-surface mb-4">Success Stories</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Real people achieving extraordinary results with NutriVision.
        </p>
      </div>
      
      {/* Avatar Group */}
      <div className="flex justify-center mb-12">
        <div className="flex -space-x-4">
          {testimonialsData.avatars.map((avatar) => (
            <img 
              key={avatar.id}
              src={avatar.src}
              alt={avatar.alt}
              className="w-16 h-16 rounded-full border-4 border-background object-cover hover:scale-110 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>
      
      {/* Reviews */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonialsData.reviews.map((review) => (
          <div 
            key={review.id}
            className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-primary-fixed-dim text-2xl">star</span>
              ))}
            </div>
            <p className="text-on-surface text-lg mb-6 leading-relaxed italic">"{review.text}"</p>
            <div>
              <p className="text-on-surface font-semibold">{review.name}</p>
              <p className="text-on-surface-variant text-sm">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
