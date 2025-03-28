
import React from 'react';
import { Github, Instagram, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/50 border-t border-white/10 py-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-gradient">Tech</span>Flow
            </h3>
            <p className="text-white/70 text-sm">
              Professional video editing platform for tech content creators. Create stunning code animations, presentations and tutorials.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition">Features</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition">Templates</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition">Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} TechFlow Video Editor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
