
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const TextTransition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const features = [
    "Seamless Integration",
    "Real-time Analytics",
    "Advanced Security",
    "Cloud Optimization",
    "Smart Automation"
  ];
  
  return (
    <AbsoluteFill className="justify-center items-center">
      <div className="max-w-4xl w-full">
        <h2 
          className="text-4xl font-bold mb-16 text-center text-white"
          style={{
            opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateRight: 'clamp'}),
            transform: `translateY(${interpolate(frame, [0, 30], [30, 0], {extrapolateRight: 'clamp'})}px)`,
          }}
        >
          Powerful <span className="text-gradient">Features</span>
        </h2>
        
        <div className="space-y-10">
          {features.map((feature, index) => {
            const startFrame = 30 + index * 20;
            const progress = spring({
              frame: frame - startFrame,
              fps,
              config: {
                damping: 15,
                mass: 0.8,
                stiffness: 100,
              },
              durationInFrames: 40,
            });
            
            const isActive = frame >= startFrame;
            const opacity = isActive ? progress : 0;
            const translateX = interpolate(progress, [0, 1], [50, 0]);
            
            return (
              <div 
                key={index}
                className="flex items-center bg-tech-charcoal/40 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                style={{
                  opacity,
                  transform: `translateX(${translateX}px)`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2)`,
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-tech-gradient mr-6 flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{feature}</h3>
                  <p className="text-white/70">
                    {getFeatureDescription(feature)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

function getFeatureDescription(feature: string): string {
  switch (feature) {
    case "Seamless Integration":
      return "Connect with your existing tools and workflows without disruption";
    case "Real-time Analytics":
      return "Monitor and analyze performance metrics as they happen";
    case "Advanced Security":
      return "Enterprise-grade security with multi-layer protection";
    case "Cloud Optimization":
      return "Efficient resource allocation and scaling for all your needs";
    case "Smart Automation":
      return "Automate repetitive tasks with AI-powered workflows";
    default:
      return "";
  }
}
