import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const YesOrNo = ({ question, onAnswer }) => {
  const [timer, setTimer] = useState(30);
  const [userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
      onAnswer('TimeUp');
    }

    return () => clearInterval(interval);
  }, [timer, onAnswer]);

  const handleUserAnswer = (answer) => {
    setUserAnswer(answer);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{question}</h1>
        <div className="flex justify-between">
          <button
            className="bg-green-500 w-full text-white px-4 py-2 rounded-md mr-4 hover:bg-green-600"
            onClick={() => {
              handleUserAnswer('Yes');
              onAnswer('Yes');
            }}
          >
            Yes
          </button>
          <button
            className="bg-red-500 w-full text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={() => {
              handleUserAnswer('No');
              onAnswer('No');
            }}
          >
            No
          </button>
        </div>
        <p className="mt-4">Time remaining: {timer}s</p>
      </div>
    </div>
  );
};

const MultipleChoice = ({ question, options, onAnswer }) => {
  const [timer, setTimer] = useState(30);
  const [userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
      onAnswer('TimeUp');
    }

    return () => clearInterval(interval);
  }, [timer, onAnswer]);

  const handleUserAnswer = (answer) => {
    setUserAnswer(answer);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{question}</h1>
        <div className="flex flex-col">
          {options.map((option, index) => (
            <button
              key={index}
              className="bg-zinc-700 w-full text-white px-4 py-2 rounded-md mb-2 hover:bg-blue-600"
              onClick={() => {
                handleUserAnswer(option);
                onAnswer(option);
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="mt-4">Time remaining: {timer}s</p>
      </div>
    </div>
  );
};

function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0);
  const { id } = useParams();
  // const data = [
  //   { type: 'YesNo', question: 'Is the sky blue?', answer: 'Yes' },
  //   {
  //     type: 'MultipleChoice',
  //     question: 'What is the capital of France?',
  //     options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
  //     answer: 'Paris',
  //   },
  //   { type: 'YesNo', question: 'Are elephants reptiles?', answer: 'No' },
  //   {
  //     type: 'MultipleChoice',
  //     question: 'Which programming language is React built with?',
  //     options: ['JavaScript', 'Java', 'C++', 'Python'],
  //     answer: 'JavaScript',
  //   },
  // ];

  const handleAnswer = (userResponse) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (userResponse === 'TimeUp' || userResponse === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      console.log('Final Score:', score);
    }
  }, [currentQuestionIndex, score, questions.length]);
  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await axios.get(`http://localhost:3000/api/question/${id}`);
      setQuestions(response.data.questions)
    }
    fetchQuestion()
  }, [])

  const renderQuestion = (questions) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === 1) {
      return <YesOrNo question={currentQuestion.question} onAnswer={handleAnswer} />;
    } else if (currentQuestion.type === 0) {
      return (
        <MultipleChoice
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={handleAnswer}
        />
      );
    }

    return null;
  };

  return (
    <div>
      {questions && currentQuestionIndex < questions.length ? (
        renderQuestion(questions)
      ) : (
        <div className='w-screen h-screen justify-center items-center flex'>
            <div className='font-bold text-3xl w-[20rem] h-[20rem] text-center p-8 flex justify-center items-center rounded-full bg-teal-500 text-white'>
                <p>All questions answered! Final Score: {score}</p>
            </div>
        </div>
      )}
    </div>
  );
}

export default Questions;
