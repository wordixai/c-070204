
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {extrapolateRight: 'clamp'});
  const titleTranslate = interpolate(frame, [0, 30], [50, 0], {extrapolateRight: 'clamp'});

  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {extrapolateRight: 'clamp'});
  const subtitleTranslate = interpolate(frame, [30, 60], [20, 0], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill className="justify-center items-center">
      <div className="text-center px-20">
        <h1 
          className="text-7xl font-bold mb-8"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslate}px)`,
            background: 'linear-gradient(to right, #9b87f5, #33C3F0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Modern Tech Solutions
        </h1>
        <p 
          className="text-3xl text-white/90 max-w-4xl mx-auto"
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleTranslate}px)`,
          }}
        >
          Building the future with cutting-edge technology and innovative solutions
        </p>
        
        {/* Animated lines/accents */}
        <div 
          className="w-20 h-1 bg-tech-gradient mx-auto mt-12 rounded-full"
          style={{
            opacity: interpolate(frame, [70, 90], [0, 1], {extrapolateRight: 'clamp'}),
            width: interpolate(frame, [70, 90], [0, 100], {extrapolateRight: 'clamp'}),
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
