export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="px-6 max-w-7xl mx-auto py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">restaurant</span>
              <span className="text-2xl font-bold text-on-surface">NutriVision</span>
            </div>
            <p className="text-on-surface-variant mb-4 max-w-sm">
              AI-driven nutritional blueprints designed to align with your unique biology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-fixed-dim/10 flex items-center justify-center text-primary-fixed-dim hover:bg-primary-fixed-dim/20 transition-colors">
                <span className="material-symbols-outlined">home</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-fixed-dim/10 flex items-center justify-center text-primary-fixed-dim hover:bg-primary-fixed-dim/20 transition-colors">
                <span className="material-symbols-outlined">tag</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-fixed-dim/10 flex items-center justify-center text-primary-fixed-dim hover:bg-primary-fixed-dim/20 transition-colors">
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-on-surface font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Features</a></li>
              <li><a href="#plans" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Meal Plans</a></li>
              <li><a href="#testimonials" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-on-surface font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Help Center</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-on-surface-variant text-sm">
          <p>© 2024 NutriVision. All rights reserved. Built with precision and care.</p>
        </div>
      </div>
    </footer>
  );
}
