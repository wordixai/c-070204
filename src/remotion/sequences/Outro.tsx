
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {extrapolateRight: 'clamp'});
  const titleScale = interpolate(frame, [0, 30], [0.9, 1], {extrapolateRight: 'clamp'});
  
  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {extrapolateRight: 'clamp'});
  const buttonOpacity = interpolate(frame, [60, 90], [0, 1], {extrapolateRight: 'clamp'});
  const buttonScale = interpolate(frame, [60, 90], [0.9, 1], {extrapolateRight: 'clamp'});
  
  return (
    <AbsoluteFill className="justify-center items-center">
      <div className="text-center">
        <h1 
          className="text-7xl font-bold mb-8"
          style={{
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            background: 'linear-gradient(to right, #9b87f5, #33C3F0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get Started Today
        </h1>
        
        <p 
          className="text-3xl text-white/90 max-w-2xl mx-auto mb-12"
          style={{
            opacity: subtitleOpacity,
          }}
        >
          Transform your workflow with modern solutions designed for the future
        </p>
        
        <div
          className="inline-block bg-tech-gradient px-8 py-4 rounded-full text-white text-xl font-bold"
          style={{
            opacity: buttonOpacity,
            transform: `scale(${buttonScale})`,
            boxShadow: '0 10px 30px rgba(155, 135, 245, 0.4)',
          }}
        >
          www.techflow.io
        </div>
      </div>
    </AbsoluteFill>
  );
};
