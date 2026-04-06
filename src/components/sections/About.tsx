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
import { AnimatedCounter } from '../ui/AnimatedCounter';

const About = () => {
  const certs = [
    { name: "AWS", logo: "https://logo.uplead.com/aws.amazon.com" },
    { name: "Google Cloud", logo: "https://logo.uplead.com/cloud.google.com" },
    { name: "Azure", logo: "https://logo.uplead.com/azure.microsoft.com" },
    { name: "Cisco", logo: "https://logo.uplead.com/cisco.com" },
    { name: "CompTIA", logo: "https://logo.uplead.com/comptia.org" },
    { name: "ITIL", logo: "https://logo.uplead.com/axelos.com" },
    { name: "PMP", logo: "https://logo.uplead.com/pmi.org" },
    { name: "Fortinet", logo: "https://logo.uplead.com/fortinet.com" }
  ];
  const stats = [
    { number: 20, suffix: "+", label: "Years Experience" },
    { number: 5, suffix: "", label: "Core Pillars" },
    { number: 100, suffix: "%", label: "End-to-End" },
    { number: 50, suffix: "+", label: "Enterprise Clients" },
    { number: 24, suffix: "/7", label: "Support" },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Interactive background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="perspective-1000">
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative transform-style-3d cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group-hover:shadow-cyan-500/20 transition-shadow duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center group-hover:border-cyan-100 transition-colors duration-300">
                    {/* Placeholder for Founder Image */}
                    <Users className="w-10 h-10 text-slate-400 group-hover:text-cyan-500 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">Lowenh Acabal</h3>
                    <p className="text-cyan-600 font-medium">Founder & CEO</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Innov8 is led by a founder with nearly two decades of experience across banking, education, telecommunications, pharmaceuticals, BPO, government, logistics, and direct selling.
                  </p>
                  <p>
                    From cloud solutions and network security to enterprise business platforms, Innov8 delivers reliable technology foundations that support long-term operational efficiency and growth.
                  </p>
                </div>
                
                <div className="mt-10 pt-8 border-t border-slate-100 overflow-hidden">
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Professional Certifications</p>
                  <div className="relative w-full flex overflow-x-hidden">
                    <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                    <div className="flex animate-scroll whitespace-nowrap gap-8 py-2 items-center">
                      {[...certs, ...certs, ...certs, ...certs].map((cert, idx) => (
                        <div key={idx} className="h-8 shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                          <img src={cert.logo} alt={cert.name} className="h-full object-contain max-w-[100px]" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn direction="left">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Built by Experts. <br/><span className="text-cyan-500">Designed for Business Growth.</span></h2>
            <p className="text-lg text-slate-600 mb-8">
              The company helps organizations modernize infrastructure, strengthen security, and deploy scalable digital systems.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10 hover:shadow-lg hover:shadow-slate-200/50 hover:border-cyan-100 transition-all cursor-default"
            >
               <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
               <p className="text-slate-600">To provide end-to-end infrastructure and business systems that empower modern teams to work efficiently and securely.</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="cursor-default group"
                >
                  <div className="text-4xl font-extrabold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                    <AnimatedCounter target={stat.number} />{stat.suffix}
                  </div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider leading-tight group-hover:text-cyan-500 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};


export { About };
