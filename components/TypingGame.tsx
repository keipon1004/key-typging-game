'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Question {
  ja: string;
  romaji: string[];
}

interface TypingGameProps {
  questions: Question[];
}

const TypingGame: React.FC<TypingGameProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (isCorrect || questions.length === 0) return;

    const newInput = userInput + e.key;
    setUserInput(newInput);

    if (questions[currentQuestion].romaji.includes(newInput.toLowerCase())) {
      setIsCorrect(true);
      setScore(score + 1);
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setUserInput('');
      setIsCorrect(false);
    } else {
      alert(`ゲーム終了！スコア: ${score + 1}/${questions.length}`);
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [userInput, currentQuestion, isCorrect, score, questions]);

  return (
    <Card style={{ width: '100%', maxWidth: '32rem', margin: '0 auto' }}>
      <CardHeader>
        <CardTitle style={{ textAlign: 'center' }}>タイピングゲーム</CardTitle>
      </CardHeader>
      <CardContent style={{ marginTop: '1.5rem' }}>
        {questions.length > 0 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{questions[currentQuestion].ja}</div>
            <div style={{ fontSize: '1.5rem', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              {userInput.split('').map((char, index) => (
                <span key={index} style={{ margin: '0 0.25rem' }}>{char}</span>
              ))}
            </div>
          </div>
        )}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.25rem' }}>
            問題: {currentQuestion + 1} / {questions.length}
          </div>
          <div style={{ fontSize: '1.25rem' }}>
            スコア: {score}
          </div>
        </div>
        {isCorrect && (
          <div style={{ textAlign: 'center', color: '#10b981', fontSize: '1.25rem' }}>
            正解！
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TypingGame;