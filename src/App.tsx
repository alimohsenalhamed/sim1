/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  ArrowUpRight, 
  Monitor, 
  Smartphone, 
  Palette, 
  Code, 
  Handshake,
  ExternalLink
} from "lucide-react";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`max-w-7xl mx-auto px-6 py-12 ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[3rem] p-12 shadow-sm ${className}`}>
    {children}
  </div>
);

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center text-sm font-medium text-ink/60">
        <div className="flex items-center gap-4">
          <span>kawsar.design@gmail.com</span>
          <button className="px-3 py-1 bg-white rounded-full border border-black/5 hover:bg-ink hover:text-white transition-colors">Copy</button>
          <button className="px-3 py-1 bg-white rounded-full border border-black/5 hover:bg-ink hover:text-white transition-colors">CV</button>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink transition-colors">LinkedIn</a>
          <span>/</span>
          <a href="#" className="hover:text-ink transition-colors">Dribbble</a>
          <span>/</span>
          <a href="#" className="hover:text-ink transition-colors">Instagram</a>
        </div>
      </header>

      {/* Hero Section */}
      <Section>
        <Card className="flex flex-col items-center text-center py-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              <img 
                src="https://picsum.photos/seed/designer/200/200" 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-4 border-bg-main"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-sm border border-black/5 text-xs font-medium flex items-center gap-1">
                Kawsar Ahmed 👋
              </div>
            </div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.1] mb-10">
              Building digital products, brands, and experience.
            </motion.h1>
            
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ink text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 group"
            >
              Latest Shots
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        </Card>
      </Section>

      {/* Services Section */}
      <Section>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Collaborate with brands and agencies<br />to create impactful results.
          </h2>
          <div className="inline-block px-4 py-1 bg-white rounded-full border border-black/5 text-xs font-medium text-ink/60">
            Services
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Palette className="w-6 h-6" />, 
              title: "UX & UI", 
              desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use." 
            },
            { 
              icon: <Smartphone className="w-6 h-6" />, 
              title: "Web & Mobile App", 
              desc: "Transforming ideas into exceptional web and mobile app experiences." 
            },
            { 
              icon: <Monitor className="w-6 h-6" />, 
              title: "Design & Creative", 
              desc: "Crafting visually stunning designs that connect with your audience." 
            },
            { 
              icon: <Code className="w-6 h-6" />, 
              title: "Development", 
              desc: "Bringing your vision to life with the latest technology and design trends." 
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <Card className="flex flex-col items-center text-center py-24 bg-white">
          <div className="w-16 h-16 bg-bg-main rounded-full flex items-center justify-center mb-8">
            <Handshake className="w-8 h-8 text-ink/40" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
            Tell me about your next<br />project
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-ink text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-ink/90 transition-colors">
              <Mail className="w-4 h-4" />
              Email Me
            </button>
            <button className="bg-white text-ink px-8 py-4 rounded-full font-medium border border-black/5 hover:bg-bg-main transition-colors">
              WhatsApp
            </button>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-8 py-12 flex justify-between items-center text-xs font-medium text-ink/40">
        <div>© 2024 All rights reserved.</div>
      </footer>
    </div>
  );
}
