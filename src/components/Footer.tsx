
import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-10 text-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              <span className="text-gradient">Tech</span>Flow
            </h3>
            <p className="text-white/70"> technology.
              Make your ideas flow through compelling visuals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">Templates</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">Resources</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition">
                <Github size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-white/70">contact@techflow.com</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} TechFlow Video Editor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
