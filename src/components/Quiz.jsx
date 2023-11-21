import styles from './Quiz.module.css';
import React, { useState } from 'react';

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
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return (
      <div>
        <h2>Quiz Concluído!</h2>
        <p>Pontuação final: {score} de {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{currentQuestion + 1}. {questions[currentQuestion].question}</h2>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={option}>
            <button
              onClick={() => handleAnswer(option)}
              style={{
                backgroundColor:
                  selectedOption === option
                    ? option === questions[currentQuestion].correctAnswer
                      ? '#cdf2d6'
                      : '#eebbbf'
                    : '',
                borderColor:
                  selectedOption === option
                  ? option === questions[currentQuestion].correctAnswer
                    ? '#155724'
                    : '#721c24'
                  :'#956947',
              }}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {selectedOption !== null && (
        <button className={styles.nextBtn} onClick={handleNextQuestion}>Próxima</button>
      )}
    </div>
  );
};

export default Quiz;