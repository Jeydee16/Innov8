import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const TechLogo = ({ name, logo }: { name: string, logo: string }) => {
  const [error, setError] = useState(false);
  
  if (error || !logo) {
    return <span className="text-xl md:text-2xl font-bold text-slate-200 tracking-wide whitespace-nowrap">{name}</span>;
  }
  
  return (
    <img 
      src={logo} 
      alt={name} 
      className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" 
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
};

const Partners = () => {
  const basePartners = [
    { name: "VST ECS", logo: "https://logo.clearbit.com/vstecs.ph" },
    { name: "ByteStraits", logo: "https://logo.clearbit.com/bytestraits.com" },
    { name: "Agmo Studio", logo: "https://logo.clearbit.com/agmostudio.com" },
    { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/white" }
  ];
  
  const partners = [...basePartners, ...basePartners, ...basePartners, ...basePartners, ...basePartners, ...basePartners, ...basePartners, ...basePartners];

  return (
    <section id="partners" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/technology/1920/1080?blur=4" 
          alt="Technology Partners" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="absolute inset-0 bg-grid-slate opacity-20 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Powered by Trusted <span className="text-cyan-400">Technology Leaders</span></h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Partnering with the best to deliver excellence and innovative solutions for your business.</p>
          </FadeIn>
        </div>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden group z-10">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex animate-scroll whitespace-nowrap py-4 hover:[animation-play-state:paused]">
          {partners.map((partner, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5, scale: 1.05, boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.3)" }}
              className="mx-4 md:mx-6 flex items-center justify-center px-8 py-6 bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl hover:bg-slate-800 transition-all cursor-pointer min-w-[200px]"
            >
              <TechLogo name={partner.name} logo={partner.logo} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export { Partners };
