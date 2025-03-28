
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import dracula from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);

interface Props {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

export const SyntaxHighlighter: React.FC<Props> = ({ code, language, showLineNumbers = false }) => {
  return (
    <div className="font-mono text-lg leading-relaxed">
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers={showLineNumbers}
        customStyle={{
          background: '#1A1F2C',
          padding: '2rem',
          borderRadius: '8px',
          fontSize: '1.125rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
