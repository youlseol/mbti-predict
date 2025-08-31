
import React from 'react';
import type { Question, MbtiDimension } from '../types';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (dimension: MbtiDimension) => void;
}

const ProgressBar: React.FC<{ current: number, total: number }> = ({ current, total }) => {
    const percentage = (current / total) * 100;
    return (
        <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
            <div 
                className="bg-cyan-400 h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};


const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  return (
    <div className="p-6 md:p-10 bg-slate-800/50 rounded-2xl shadow-2xl backdrop-blur-sm w-full animate-fade-in">
      <div className="mb-6">
        <p className="text-cyan-400 font-bold text-lg mb-2">
          Question {questionNumber}/{totalQuestions}
        </p>
        <ProgressBar current={questionNumber} total={totalQuestions} />
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-slate-100">
          {question.question}
        </h2>
      </div>
      <div className="flex flex-col space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.dimension)}
            className="w-full text-left p-4 bg-slate-700/60 rounded-lg text-slate-200 hover:bg-cyan-500/50 hover:text-white transition-all duration-200 ease-in-out transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className="text-lg">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
