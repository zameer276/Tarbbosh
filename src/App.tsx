import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, ChevronRight, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { menuItems } from './data/menu';

const WHATSAPP_NUMBER = "917006846210";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Tarboosh%20Restaurant%20I%20want%20to%20place%20an%20order`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className={`w-8 h-8 ${scrolled ? 'text-warm-orange' : 'text-white'}`} />
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-warm-brown' : 'text-white'}`}>
              Tarboosh
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-warm-orange ${scrolled ? 'text-warm-brown' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-2 px-5 text-sm">
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-warm-brown' : 'text-white'} p-2`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-soft-brown/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-warm-brown hover:text-warm-orange hover:bg-soft-brown/10 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920"
        alt="Delicious Food"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Tarboosh Restaurant
        </h1>
        <p className="text-xl md:text-2xl text-cream/90 mb-10 font-light italic">
          Authentic Kashmiri & Multi-Cuisine Delights in the Heart of Dhobiwan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="btn-primary text-lg px-8 py-4">
            Explore Menu
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
            Order on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
    
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
        <div className="w-1 h-2 bg-white/50 rounded-full" />
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-warm-orange p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="text-white font-bold text-4xl">10+</p>
            <p className="text-white/80 text-sm">Years of Excellence</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-warm-brown mb-6">Our Story</h2>
          <p className="text-lg text-warm-brown/70 mb-6 leading-relaxed">
            Welcome to Tarboosh Restaurant, where tradition meets taste. Located on the scenic Srinagar-Gulmarg Road, we take pride in serving authentic Kashmiri flavors alongside a diverse multi-cuisine menu.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-soft-green/20 p-2 rounded-lg text-soft-green">
                <UtensilsCrossed size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Fresh Ingredients</h4>
                <p className="text-sm text-warm-brown/60">Sourced daily from local markets</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-warm-orange/20 p-2 rounded-lg text-warm-orange">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Warm Hospitality</h4>
                <p className="text-sm text-warm-brown/60">A cozy feel for every guest</p>
              </div>
            </div>
          </div>
          <ul className="space-y-3 mb-8">
            {['Authentic Kashmiri Wazwan', 'Multi-cuisine Veg & Non-Veg', 'Freshly Brewed Coffee & Kahwa', 'Family-friendly Atmosphere'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-warm-brown/80">
                <ChevronRight size={18} className="text-warm-orange" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<'Veg' | 'Non-Veg' | 'Fast Food' | 'Beverages'>('Veg');
  const categories: ('Veg' | 'Non-Veg' | 'Fast Food' | 'Beverages')[] = ['Veg', 'Non-Veg', 'Fast Food', 'Beverages'];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-soft-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Delicious Menu</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-warm-orange text-white shadow-md'
                  : 'bg-white text-warm-brown hover:bg-soft-brown/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-warm-orange">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-warm-brown mb-4">{item.name}</h3>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center py-2 text-sm"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const SpecialOffers = () => (
  <section id="offers" className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-title">Special Offers</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Family Feast Combo",
            desc: "Full Mutton Rogan Josh + 4 Naan + 2 Cold Drinks",
            price: "₹899",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
          },
          {
            title: "Weekend Special Biryani",
            desc: "Buy 2 Chicken Biryani and get 1 Veg Biryani FREE!",
            price: "Limited Time",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800"
          }
        ].map((offer, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
              <span className="bg-warm-orange text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
                {offer.price}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-white/80 text-sm">{offer.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-24 bg-soft-brown/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-title">Our Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "https://picsum.photos/seed/food1/600/600",
          "https://picsum.photos/seed/food2/600/600",
          "https://picsum.photos/seed/rest1/600/600",
          "https://picsum.photos/seed/food3/600/600",
          "https://picsum.photos/seed/rest2/600/600",
          "https://picsum.photos/seed/food4/600/600",
          "https://picsum.photos/seed/food5/600/600",
          "https://picsum.photos/seed/rest3/600/600",
        ].map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-title">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-warm-orange/10 p-3 rounded-xl text-warm-orange">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Our Location</h4>
              <p className="text-warm-brown/70">Srinagar - Gulmarg Rd, New Colony, Waripora, Dhobiwan, Jammu and Kashmir 193404</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-warm-orange/10 p-3 rounded-xl text-warm-orange">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">WhatsApp Order</h4>
              <p className="text-warm-brown/70">+91 70068 46210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-warm-orange/10 p-3 rounded-xl text-warm-orange">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
              <p className="text-warm-brown/70">Mon - Sun: 09:00 AM - 10:00 PM</p>
            </div>
          </div>
          
          <div className="pt-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center py-4 text-lg">
              Place an Order Now
            </a>
          </div>
        </div>
        
        <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border border-soft-brown/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.474663674681!2d74.5248166!3d34.0573138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e199859f555555%3A0x7f55555555555555!2sTarboosh%20Restaurant!5e0!3m2!1sen!2sin!4v1710720000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-warm-brown text-cream py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <UtensilsCrossed className="w-8 h-8 text-warm-orange" />
            <span className="text-2xl font-bold tracking-tight">Tarboosh</span>
          </div>
          <p className="text-cream/60 max-w-sm mb-6">
            Experience the finest Kashmiri and multi-cuisine dishes in a cozy and welcoming environment. Quality food, fresh ingredients, and warm service.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-warm-orange transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-warm-orange transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-cream/60">
            <li><a href="#home" className="hover:text-warm-orange transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-warm-orange transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-warm-orange transition-colors">Menu</a></li>
            <li><a href="#contact" className="hover:text-warm-orange transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Info</h4>
          <ul className="space-y-3 text-cream/60">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="shrink-0 text-warm-orange" />
              <span>Srinagar - Gulmarg Rd, Dhobiwan, J&K</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0 text-warm-orange" />
              <span>+91 70068 46210</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 text-center text-cream/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Tarboosh Restaurant. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
  >
    <MessageCircle size={32} />
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <SpecialOffers />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
