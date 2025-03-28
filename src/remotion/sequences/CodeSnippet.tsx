
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter';

export const CodeSnippet: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const opacity = interpolate(frame, [0, 30], [0, 1], {extrapolateRight: 'clamp'});
  const scale = interpolate(frame, [0, 30], [0.9, 1], {extrapolateRight: 'clamp'});
  
  // Sample React code
  const code = `import React, { useState, useEffect } from 'react';

// Modern tech component
function TechSolution() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getData();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  return (
    <div className="dashboard">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <DataVisualizer data={data} />
      )}
    </div>
  );
}`;

  // Calculate how much of the code to show based on the current frame
  const codeProgress = Math.min(1, frame / 120);
  const codeToShow = code.slice(0, Math.floor(code.length * codeProgress));

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  
  return (
    <AbsoluteFill className="justify-center items-center p-10">
      <div 
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
        className="max-w-5xl w-full"
      >
        <h2 
          className="text-4xl font-bold mb-8 text-white"
          style={{ opacity: titleOpacity }}
        >
          <span className="text-gradient">Elegant</span> Code Solutions
        </h2>
        
        <div className="code-container w-full overflow-hidden">
          <SyntaxHighlighter 
            code={codeToShow} 
            language="jsx"
            showLineNumbers
          />
          {codeProgress < 1 && <span className="cursor"></span>}
        </div>
      </div>
    </AbsoluteFill>
  );
};
