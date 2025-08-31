
import React from 'react';
import type { MbtiResult } from '../types';

interface ResultScreenProps {
  result: MbtiResult;
  onRestart: () => void;
}

// A simple markdown-to-html parser
const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n').map((line, i) => {
        if (line.startsWith('### ')) {
            return <h3 key={i} className="text-xl font-bold mt-6 mb-2 text-cyan-300">{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('- ')) {
            return <li key={i} className="ml-5 list-disc">{line.replace('- ', '')}</li>;
        }
        if (line.trim() === '') {
            return <br key={i} />;
        }
        return <p key={i} className="mb-2">{line}</p>;
    });

    return <>{lines}</>;
};


const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  return (
    <div className="p-6 md:p-10 bg-slate-800/70 rounded-2xl shadow-2xl backdrop-blur-sm w-full animate-fade-in max-h-[90vh] overflow-y-auto">
      <div className="text-center mb-6">
        <p className="text-slate-400">당신의 성격 유형은...</p>
        <h1 className="text-5xl md:text-6xl font-bold my-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          {result.type}
        </h1>
        <h2 className="text-2xl text-slate-200 font-semibold">{result.title}</h2>
      </div>

      <div className="text-slate-300 leading-relaxed text-left bg-slate-900/50 p-6 rounded-lg">
        <SimpleMarkdown text={result.description} />
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          다시하기
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
