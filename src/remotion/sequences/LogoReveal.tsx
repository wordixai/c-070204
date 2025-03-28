
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const LogoReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Animation properties for the logo
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 15,
      mass: 1,
      stiffness: 120,
    }
  });
  
  const scale = interpolate(progress, [0, 1], [0.7, 1]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  
  // Animation properties for the text
  const textOpacity = interpolate(frame, [30, 60], [0, 1], {extrapolateRight: 'clamp'});
  const textTranslate = interpolate(frame, [30, 60], [20, 0], {extrapolateRight: 'clamp'});
  
  return (
    <AbsoluteFill className="justify-center items-center">
      <div className="text-center">
        {/* Logo */}
        <div 
          style={{
            opacity,
            transform: `scale(${scale})`,
          }}
          className="mb-12"
        >
          <div className="w-40 h-40 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-tech-gradient rotate-45 transform-gpu" />
            <div className="absolute inset-4 rounded-full bg-tech-charcoal transform-gpu" />
            <div 
              className="absolute inset-8 rounded-full bg-tech-gradient transform-gpu"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, #9b87f5, #33C3F0)',
                boxShadow: '0 0 40px rgba(155, 135, 245, 0.6)'
              }}
            />
          </div>
        </div>
        
        {/* Text */}
        <h2 
          className="text-5xl font-bold text-white mb-4"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslate}px)`,
          }}
        >
          Tech<span className="text-tech-blue">Flow</span>
        </h2>
        
        <p 
          className="text-xl text-white/70 max-w-md mx-auto"
          style={{
            opacity: interpolate(frame, [60, 90], [0, 1], {extrapolateRight: 'clamp'}),
            transform: `translateY(${interpolate(frame, [60, 90], [15, 0], {extrapolateRight: 'clamp'})}px)`,
          }}
        >
          Streamline your workflow with our innovative technology platform
        </p>
      </div>
    </AbsoluteFill>
  );
};
