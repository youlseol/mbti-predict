
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-slate-800/50 rounded-2xl shadow-2xl backdrop-blur-sm animate-fade-in">
      <div className="mb-8">
        <i className="fas fa-brain text-6xl text-cyan-400"></i>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        AI MBTI 예측기
      </h1>
      <p className="text-slate-300 text-lg mb-8 max-w-md">
        몇 가지 질문에 답하고 당신의 성격 유형을 알아보세요. AI가 당신의 MBTI를 분석하고 자세한 설명을 제공합니다.
      </p>
      <button
        onClick={onStart}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        시작하기
      </button>
    </div>
  );
};

export default StartScreen;
