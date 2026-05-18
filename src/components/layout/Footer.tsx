export function Footer() {
  return (
    <footer className="bg-kazen-black pt-20 pb-10 border-t border-kazen-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <h2 className="font-display text-2xl font-bold tracking-widest text-kazen-gold mb-6">
              KAZEN
            </h2>
            <p className="text-kazen-sand/60 font-light text-sm leading-relaxed mb-6">
              A modern luxury vegetarian restaurant inspired by Japanese culinary artistry. Elevating nature's finest ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-kazen-sand hover:text-kazen-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-kazen-sand hover:text-kazen-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-kazen-sand hover:text-kazen-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-kazen-white font-semibold tracking-widest uppercase text-xs mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-kazen-sand/70">
              <li><a href="#about" className="hover:text-kazen-gold transition-colors">Our Philosophy</a></li>
              <li><a href="#menu" className="hover:text-kazen-gold transition-colors">The Menu</a></li>
              <li><a href="#events" className="hover:text-kazen-gold transition-colors">Private Events</a></li>
              <li><a href="#reservations" className="hover:text-kazen-gold transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-kazen-white font-semibold tracking-widest uppercase text-xs mb-6">Hours</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-kazen-sand/70">
              <li>Mon - Thu: 5PM - 10PM</li>
              <li>Fri - Sat: 5PM - 11PM</li>
              <li>Sun: 4PM - 9PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-kazen-white font-semibold tracking-widest uppercase text-xs mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-kazen-sand/70">
              <li><a href="#" className="hover:text-kazen-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-kazen-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-kazen-white transition-colors">Accessibility Statement</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-kazen-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-kazen-sand/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Kazen. All rights reserved.</p>
          <p>Designed with Intent</p>
        </div>
      </div>
    </footer>
  );
}
