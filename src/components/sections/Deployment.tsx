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
    return <span className="text-lg font-bold text-slate-300 whitespace-nowrap px-4">{name}</span>;
  }
  
  return (
    <img 
      src={logo} 
      alt={name} 
      className="h-full object-contain max-w-[100px] transition-all duration-300" 
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
};

const Deployment = () => {
  const baseTech1 = [
    { name: 'Microsoft 365', logo: 'https://cdn.simpleicons.org/microsoft365/white' },
    { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/googleworkspace/white' },
    { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/white' },
    { name: 'Azure', logo: 'https://cdn.simpleicons.org/microsoftazure/white' },
    { name: 'Cloudflare', logo: 'https://cdn.simpleicons.org/cloudflare/white' },
    { name: 'DigitalOcean', logo: 'https://cdn.simpleicons.org/digitalocean/white' },
  ];
  const tech1 = [...baseTech1, ...baseTech1, ...baseTech1, ...baseTech1];

  const baseTech2 = [
    { name: 'Cisco', logo: 'https://cdn.simpleicons.org/cisco/white' },
    { name: 'HP', logo: 'https://cdn.simpleicons.org/hp/white' },
    { name: 'Fortinet', logo: 'https://cdn.simpleicons.org/fortinet/white' },
    { name: 'Dell', logo: 'https://cdn.simpleicons.org/dell/white' },
    { name: 'Lenovo', logo: 'https://cdn.simpleicons.org/lenovo/white' },
    { name: 'Ubiquiti', logo: 'https://cdn.simpleicons.org/ubiquiti/white' },
    { name: 'Juniper', logo: 'https://cdn.simpleicons.org/junipernetworks/white' },
    { name: 'Palo Alto', logo: 'https://cdn.simpleicons.org/paloaltonetworks/white' }
  ];
  const tech2 = [...baseTech2, ...baseTech2, ...baseTech2, ...baseTech2];

  return (
    <section id="deployment" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/serverroom/1920/1080?blur=2" 
          alt="Server Room" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>
      
      <div className="absolute inset-0 bg-grid-slate opacity-30 z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technology Deployment <br/><span className="text-cyan-400">& Hardware Solutions</span></h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Modern workplace deployment and hardware readiness for reliable day-to-day operations.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn direction="up" delay={0.1}>
            <motion.div 
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                <Monitor className="text-cyan-400 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Workplace & Productivity Setup</h3>
              <ul className="space-y-4 flex-grow">
                {['Microsoft 365 deployment and integration', 'Google Workspace deployment and integration', 'Cloud storage solutions', 'Domain, email, and user setup'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-slate-700/50 overflow-hidden">
                <p className="text-sm text-slate-400 mb-4">Supported Technologies</p>
                <div className="relative w-full flex overflow-x-hidden group">
                  <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-slate-800 to-transparent z-10"></div>
                  <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-slate-800 to-transparent z-10"></div>
                  <div className="flex animate-scroll whitespace-nowrap gap-12 py-2 items-center">
                    {tech1.map((tech, idx) => (
                      <div key={idx} className="h-10 shrink-0 flex items-center justify-center transition-all duration-300 opacity-50 hover:opacity-100">
                        <TechLogo name={tech.name} logo={tech.logo} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <motion.div 
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Server className="text-blue-400 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Hardware & Infrastructure Rollout</h3>
              <ul className="space-y-4 flex-grow">
                {['Hardware procurement', 'Technology refresh programs', 'Device leasing and installation', 'Network and workstation solutions'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-slate-700/50 overflow-hidden">
                <p className="text-sm text-slate-400 mb-4">Supported Technologies</p>
                <div className="relative w-full flex overflow-x-hidden group">
                  <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-slate-800 to-transparent z-10"></div>
                  <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-slate-800 to-transparent z-10"></div>
                  <div className="flex animate-scroll whitespace-nowrap gap-12 py-2 items-center">
                    {tech2.map((tech, idx) => (
                      <div key={idx} className="h-10 shrink-0 flex items-center justify-center transition-all duration-300 opacity-50 hover:opacity-100">
                        <TechLogo name={tech.name} logo={tech.logo} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};


export { Deployment };
