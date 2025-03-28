
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6 px-8 flex items-center justify-between bg-black/30 border-b border-white/10">
      <h1 className="text-3xl font-bold text-white">
        <span className="text-gradient">Tech1</span>
      </h1>
      <div className="flex items-center space-x-4">
        <Button 
          variant="outline" 
          className="text-white border-white/20 hover:bg-white/10"
        >
          Export
        </Button>
        <Button 
          variant="default" 
          className="bg-tech-gradient hover:opacity-90 text-white"
        >
          Share
        </Button>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-2 text-white/70 hover:text-white transition"
        >
          <Github size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
