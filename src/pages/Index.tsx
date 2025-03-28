
import { useState } from 'react';
import { Player } from '@remotion/player';
import { RemotionRoot } from '../remotion/Root';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const Index = () => {
  const [playing, setPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [volume, setVolume] = useState(1);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <header className="py-6 px-8 flex items-center justify-between bg-black/30 border-b border-white/10">
        <h1 className="text-3xl font-bold text-white">
          <span className="text-gradient">Tech</span>Flow Video Editor
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
        </div>
      </header>
      
      <main className="flex-1 p-8 flex flex-col">
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black/50 mx-auto max-w-6xl w-full">
          <Player
            component={RemotionRoot}
            durationInFrames={600}
            compositionWidth={1920}
            compositionHeight={1080}
            fps={30}
            style={{ width: '100%' }}
            controls
            autoPlay
            allowFullscreen
            inputProps={{}}
            clickToPlay
            loop
          />
        </div>
        
        <div className="mt-8 bg-black/30 border border-white/10 rounded-xl p-6 max-w-6xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Video Controls</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-white/70 mr-2">Volume:</span>
                <div className="w-32">
                  <Slider 
                    defaultValue={[100]} 
                    max={100} 
                    step={1}
                    onValueChange={([value]) => setVolume(value / 100)}
                  />
                </div>
              </div>
              <Button
                variant={playing ? "destructive" : "default"}
                onClick={() => setPlaying(!playing)}
                className={playing ? "bg-red-500 hover:bg-red-600" : "bg-tech-gradient hover:opacity-90"}
              >
                {playing ? "Pause" : "Play"}
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition cursor-pointer">
              <h3 className="text-white font-medium mb-2">Intro</h3>
              <p className="text-white/60 text-sm">Opening sequence with main title</p>
            </div>
            <div className="col-span-1 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition cursor-pointer">
              <h3 className="text-white font-medium mb-2">Code Animation</h3>
              <p className="text-white/60 text-sm">Animated code typing sequence</p>
            </div>
            <div className="col-span-1 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition cursor-pointer">
              <h3 className="text-white font-medium mb-2">Logo Reveal</h3>
              <p className="text-white/60 text-sm">Animated brand logo reveal</p>
            </div>
            <div className="col-span-1 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition cursor-pointer">
              <h3 className="text-white font-medium mb-2">Feature List</h3>
              <p className="text-white/60 text-sm">Product features with animations</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
