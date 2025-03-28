
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Video } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-tech-charcoal to-black border-b border-white/10">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
             test 0009 hero Create Amazing <span className="text-gradient">Videos</span> with Ease
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-xl">
              Powerful video editing tools that help you create professional-looking content without the steep learning curve.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-tech-gradient hover:opacity-90 text-white gap-2"
              >
                <Play size={20} />
                Start Creating
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 gap-2"
              >
                <Video size={20} />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/video-editor-preview.webp" 
                alt="TechFlow Video Editor in action" 
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback to a gradient if image fails to load
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJub25lIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB5MT0iMCIgeDI9IjgwMCIgeTI9IjQwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMxQTFGMkMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5Yjg3ZjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDgwMHY0MDBIMHoiLz48L3N2Zz4=';
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-tech-charcoal/80 to-transparent flex items-end p-6">
                <div className="text-white text-sm md:text-base font-medium">
                  Advanced video editing made simple
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-tech-gradient opacity-30 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-tech-gradient opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
