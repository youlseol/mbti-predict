
import React, { useState, useCallback, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';
import { getMbtiDescription } from './services/geminiService';
import { QUESTIONS, MBTI_INFO } from './constants';
import type { MbtiDimension, MbtiResult } from './types';

type GameState = 'start' | 'quiz' | 'loading' | 'result';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<MbtiDimension, number>>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });
  const [result, setResult] = useState<MbtiResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setResult(null);
    setError(null);
  };

  const handleAnswer = (dimension: MbtiDimension) => {
    setAnswers(prev => ({ ...prev, [dimension]: prev[dimension] + 1 }));
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('loading');
    }
  };

  const calculateAndFetchResult = useCallback(async () => {
    try {
      const E_I = answers.E > answers.I ? 'E' : 'I';
      const S_N = answers.S > answers.N ? 'S' : 'N';
      const T_F = answers.T > answers.F ? 'T' : 'F';
      const J_P = answers.J > answers.P ? 'J' : 'P';
      const mbtiType = `${E_I}${S_N}${T_F}${J_P}`;

      const description = await getMbtiDescription(mbtiType);

      setResult({
        type: mbtiType,
        title: MBTI_INFO[mbtiType]?.title || '알 수 없는 유형',
        description: description,
      });
    } catch (err) {
      console.error(err);
      setError('결과를 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
        setGameState('result');
    }
  }, [answers]);

  useEffect(() => {
    if (gameState === 'loading') {
      calculateAndFetchResult();
    }
  }, [gameState, calculateAndFetchResult]);
  

  const renderScreen = () => {
    switch (gameState) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'quiz':
        return (
          <QuestionScreen
            question={QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        );
      case 'loading':
        return <LoadingScreen />;
      case 'result':
        if (error) {
            return (
                <div className="flex flex-col items-center justify-center h-screen text-center p-4">
                    <p className="text-red-500 text-xl mb-4">{error}</p>
                    <button
                        onClick={handleStart}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
                    >
                        다시 시도
                    </button>
                </div>
            )
        }
        return result && <ResultScreen result={result} onRestart={handleStart} />;
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
