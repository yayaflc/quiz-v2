import styles from './Quiz.module.css';
import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: 'Qual é o maior animal do mundo?',
    options: ['Elefante','Girafa','Baleia-azul','Besouro-rinoceronte','Lula-colossal'],
    correctAnswer: 'Baleia-azul'
  },
  {
    question: "Qual desses animais é carnívoro?",
    options: ['Furão','Zebra','Alce','Bisão','Canguru'],
    correctAnswer: 'Furão'
  },
  {
    question: "Qual animal passa 90% do dia dormindo?",
    options: ['Alpaca','Gato','Bicho-preguiça','Coala','Cobra'],
    correctAnswer: 'Coala'
  },
  {
    question: "Qual desses mamíferos põe ovos?",
    options: ['Castor','Ornitorinco','Esquilo','Lontra','Morcegos'],
    correctAnswer: 'Ornitorinco'
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(true);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return (
      <div className={styles.finalScreen}>
        <h2>Quiz Concluído!</h2>
        <p>Pontuação final: {score} de {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{currentQuestion + 1}. {questions[currentQuestion].question}</h2>
      <ul>
        {questions[currentQuestion].options.map((option) => (
          <li key={option}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;