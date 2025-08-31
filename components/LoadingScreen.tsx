
import React, { useState, useEffect } from 'react';

const loadingMessages = [
    "당신의 성향을 분석중입니다...",
    "AI가 성격의 패턴을 찾고 있습니다...",
    "결과를 거의 다 만들었어요...",
    "잠시만 기다려주세요!",
];

const LoadingScreen: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-slate-800/50 rounded-2xl shadow-2xl">
      <div className="w-16 h-16 border-4 border-t-4 border-slate-600 border-t-cyan-400 rounded-full animate-spin mb-6"></div>
      <h2 className="text-2xl font-bold text-slate-100 mb-2">결과 분석 중</h2>
      <p className="text-slate-300 transition-opacity duration-500 ease-in-out">
        {loadingMessages[messageIndex]}
      </p>
    </div>
  );
};

export default LoadingScreen;
