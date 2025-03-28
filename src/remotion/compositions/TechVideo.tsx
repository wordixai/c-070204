
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { Intro } from '../sequences/Intro';
import { CodeSnippet } from '../sequences/CodeSnippet';
import { LogoReveal } from '../sequences/LogoReveal';
import { TextTransition } from '../sequences/TextTransition';
import { Outro } from '../sequences/Outro';

export const TechVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  
  // Calculate sequence timing
  const introEnd = 150;
  const codeSnippetStart = introEnd - 30;
  const codeSnippetEnd = 300;
  const logoRevealStart = codeSnippetEnd - 30;
  const logoRevealEnd = 450;
  const textTransitionStart = logoRevealEnd - 30;
  const textTransitionEnd = 540;
  const outroStart = textTransitionEnd - 30;

  return (
    <AbsoluteFill className="bg-tech-charcoal font-sans">
      {/* Background gradient animation */}
      <AbsoluteFill 
        style={{
          background: 'radial-gradient(circle at center, rgba(155, 135, 245, 0.2), rgba(26, 31, 44, 0.9))',
          opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateRight: 'clamp'}),
        }}
      />

      {/* Intro sequence */}
      <Sequence from={0} durationInFrames={introEnd}>
        <Intro />
      </Sequence>

      {/* Code snippet animation */}
      <Sequence from={codeSnippetStart} durationInFrames={codeSnippetEnd - codeSnippetStart}>
        <CodeSnippet />
      </Sequence>

      {/* Logo reveal animation */}
      <Sequence from={logoRevealStart} durationInFrames={logoRevealEnd - logoRevealStart}>
        <LogoReveal />
      </Sequence>

      {/* Text transition animation */}
      <Sequence from={textTransitionStart} durationInFrames={textTransitionEnd - textTransitionStart}>
        <TextTransition />
      </Sequence>

      {/* Outro sequence */}
      <Sequence from={outroStart} durationInFrames={durationInFrames - outroStart}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
