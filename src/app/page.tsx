"use client";
import React, { useState, useEffect } from "react";
import { examData, MULTIPLE_SELECT } from "../../lib/const";

interface Answers {
  [questionId: number]: string | string[];
}

const ExamApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [searchTerm, setSearchTerm] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  // Function to filter questions based on search term
  const filteredQuestions = examData.filter(
    (question) =>
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.id.toString().includes(searchTerm)
  );
  const handleAnswerChange = (
    questionId: number,
    selectedOption: string,
    isMultiSelect = false
  ) => {
    if (isMultiSelect) {
      // For multiple select questions
      const currentSelections = (answers[questionId] || []) as string[];
      const updatedSelections = currentSelections.includes(selectedOption)
        ? currentSelections.filter((option) => option !== selectedOption)
        : [...currentSelections, selectedOption];

      setAnswers({
        ...answers,
        [questionId]: updatedSelections,
      });
    } else {
      // For single select questions
      setAnswers({
        ...answers,
        [questionId]: selectedOption,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleJumpToQuestion = (index: React.SetStateAction<number>) => {
    setCurrentQuestion(index);
  };

  const handleSubmit = () => {
    let correctAnswers = 0;

    // Calculate score
    examData.forEach((question) => {
      const userAnswer = answers[question.id];

      if (question.type === MULTIPLE_SELECT) {
        // For multiple select, all options must match
        if (
          Array.isArray(userAnswer) &&
          Array.isArray(question.answer) &&
          userAnswer.length === question.answer.length &&
          userAnswer.every((option) => question.answer.includes(option))
        ) {
          correctAnswers++;
        }
      } else {
        // For single select questions
        if (userAnswer === question.answer) {
          correctAnswers++;
        }
      }
    });

    setScore(correctAnswers);
    setExamSubmitted(true);
  };

  useEffect(() => {
    // Timer countdown
    if (!examSubmitted && timeLeft > 0) {
      const timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    } else if (timeLeft === 0 && !examSubmitted) {
      // Auto-submit exam when time runs out
      handleSubmit();
    }
  }, [timeLeft, examSubmitted, handleSubmit]);

  const resetExam = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setExamSubmitted(false);
    setScore(0);
    setTimeLeft(60 * 60);
    setShowAnswer(false);
  };

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Calculate progress percentage
  const progressPercentage =
    (Object.keys(answers).length / examData.length) * 100;

  if (examSubmitted) {
    return (
      <div className="min-h-screen bg-orange-50 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500">
          <h1 className="text-3xl font-bold text-center mb-6 text-orange-700">
            Huawei Cloud Exam Results
          </h1>

          <div className="mb-8 p-6 bg-orange-50 rounded-lg text-center border border-orange-200">
            <p className="text-2xl">
              Your Score:{" "}
              <span className="font-bold text-orange-600">{score}</span> out of{" "}
              {examData.length}
            </p>
            <p className="text-xl mt-2">
              Percentage:{" "}
              <span className="font-bold text-orange-600">
                {Math.round((score / examData.length) * 100)}%
              </span>
            </p>
            <p className="mt-4">
              {Math.round((score / examData.length) * 100) >= 70 ? (
                <span className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-full">
                  PASSED
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 font-bold py-2 px-4 rounded-full">
                  FAILED
                </span>
              )}
            </p>
          </div>

          <div className="mb-6">
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg font-medium"
            >
              {showAnswer ? "Hide Answers" : "Show Answers"}
            </button>

            {showAnswer && (
              <div className="space-y-6 mt-6">
                {examData.map((question) => {
                  const userAnswer = answers[question.id];
                  const isCorrect =
                    question.type === MULTIPLE_SELECT
                      ? Array.isArray(userAnswer) &&
                        Array.isArray(question.answer) &&
                        userAnswer.length === question.answer.length &&
                        userAnswer.every((option) =>
                          question.answer.includes(option)
                        )
                      : userAnswer === question.answer;

                  return (
                    <div
                      key={question.id}
                      className={`p-5 rounded-lg ${
                        isCorrect
                          ? "bg-green-50 border-l-4 border-green-500"
                          : "bg-red-50 border-l-4 border-red-500"
                      }`}
                    >
                      <p className="font-medium mb-3 text-gray-800">
                        <span className="inline-block bg-gray-100 text-gray-700 rounded-full h-6 w-6 text-center mr-2">
                          {question.id}
                        </span>
                        {question.question}
                      </p>
                      <div className="ml-8 space-y-2">
                        {question.options.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-start mt-1"
                          >
                            <span
                              className={`mr-2 ${
                                question.type === MULTIPLE_SELECT
                                  ? question.answer.includes(option.id)
                                    ? "text-green-600 font-medium"
                                    : ""
                                  : question.answer === option.id
                                  ? "text-green-600 font-medium"
                                  : ""
                              }`}
                            >
                              {option.id}. {option.text}
                            </span>

                            {question.type === MULTIPLE_SELECT
                              ? userAnswer &&
                                userAnswer.includes(option.id) && (
                                  <span
                                    className={
                                      question.answer.includes(option.id)
                                        ? "ml-2 text-green-600"
                                        : "ml-2 text-red-600"
                                    }
                                  >
                                    {question.answer.includes(option.id)
                                      ? "✓"
                                      : "✗"}
                                  </span>
                                )
                              : userAnswer === option.id && (
                                  <span
                                    className={
                                      question.answer === option.id
                                        ? "ml-2 text-green-600"
                                        : "ml-2 text-red-600"
                                    }
                                  >
                                    {question.answer === option.id ? "✓" : "✗"}
                                  </span>
                                )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-gray-700 bg-white p-4 rounded-lg border border-gray-200">
                        <span className="font-medium text-orange-600">
                          Explanation:
                        </span>{" "}
                        {question.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={resetExam}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg font-medium"
            >
              Retake Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 border-t-4 border-orange-500">
          <h1 className="text-3xl font-bold text-center mb-6 text-orange-700">
            Huawei Cloud Certification Exam
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-orange-100 p-4 rounded-lg">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium text-gray-700">
                Time Remaining:{" "}
                <span className="font-bold text-orange-700">
                  {formatTime(timeLeft)}
                </span>
              </p>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium text-gray-700">
                Questions Answered:{" "}
                <span className="font-bold text-orange-700">
                  {Object.keys(answers).length}
                </span>{" "}
                / {examData.length}
              </p>
            </div>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="mb-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredQuestions.length > 0 ? (
            <div>
              <div className="mb-6 bg-white p-6 rounded-lg border border-gray-200">
                <p className="font-medium text-lg mb-2 text-orange-700 flex items-center">
                  <span className="bg-orange-100 text-orange-700 rounded-full h-8 w-8 flex items-center justify-center mr-2">
                    {filteredQuestions[currentQuestion].id}
                  </span>
                  <span>of {examData.length}</span>
                </p>
                <p className="mb-6 text-gray-800 text-lg">
                  {filteredQuestions[currentQuestion].question}
                </p>

                <div className="space-y-3">
                  {filteredQuestions[currentQuestion].options.map((option) => {
                    const isSelected =
                      filteredQuestions[currentQuestion].type ===
                      MULTIPLE_SELECT
                        ? !!answers[filteredQuestions[currentQuestion].id] &&
                          Array.isArray(
                            answers[filteredQuestions[currentQuestion].id]
                          ) &&
                          (
                            answers[
                              filteredQuestions[currentQuestion].id
                            ] as string[]
                          ).includes(option.id)
                        : answers[filteredQuestions[currentQuestion].id] ===
                          option.id;

                    return (
                      <div
                        key={option.id}
                        className={`flex items-center p-3 border rounded-lg transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:bg-orange-50"
                        }`}
                        onClick={() =>
                          handleAnswerChange(
                            filteredQuestions[currentQuestion].id,
                            option.id,
                            filteredQuestions[currentQuestion].type ===
                              MULTIPLE_SELECT
                          )
                        }
                      >
                        {filteredQuestions[currentQuestion].type ===
                        MULTIPLE_SELECT ? (
                          <div
                            className={`w-5 h-5 border rounded mr-3 flex items-center justify-center ${
                              isSelected
                                ? "bg-orange-500 border-orange-500"
                                : "border-gray-400"
                            }`}
                          >
                            {isSelected && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            )}
                          </div>
                        ) : (
                          <div
                            className={`w-5 h-5 border rounded-full mr-3 flex items-center justify-center ${
                              isSelected
                                ? "bg-orange-500 border-orange-500"
                                : "border-gray-400"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-3 h-3 rounded-full bg-white"></div>
                            )}
                          </div>
                        )}
                        <span className="text-gray-800">
                          {option.id}. {option.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`px-5 py-2 bg-white border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-all flex items-center ${
                    currentQuestion === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:cursor-pointer"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentQuestion === filteredQuestions.length - 1}
                  className={`px-5 py-2 bg-white border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-all flex items-center hover:cursor-pointer ${
                    currentQuestion === filteredQuestions.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600 py-10">
              No questions match your search
            </p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-t-4 border-orange-500">
          <h2 className="font-bold mb-4 text-orange-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Question Navigator
          </h2>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {examData.map((question, index) => {
              const isAnswered = !!answers[question.id];
              const isCurrent = currentQuestion === index;

              return (
                <button
                  key={question.id}
                  onClick={() => handleJumpToQuestion(index)}
                  className={`p-2 rounded-lg text-center transition-all duration-200 ${
                    isAnswered
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  } ${
                    isCurrent
                      ? "ring-2 ring-orange-400"
                      : "hover:cursor-pointer ring-0"
                  }`}
                >
                  {question.id}
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-10">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg font-medium hover:cursor-pointer"
          >
            Submit Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamApp;
