import { useState } from "react";
import Question from "./components/Question";
import Button from "./components/Button";
import Confetti from "react-confetti";
import blob1 from "./assets/blobs-right.svg";
import blob2 from "./assets/blobs-left.svg";

function App() {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const fetchQuestions = () => {
    setLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((question) => ({
          ...question,
          options: [
            ...question.incorrect_answers,
            question.correct_answer,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(formatted);
        setLoading(false);
      });
  };

  const decodeHtml = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  const handleSelected = (index, value) => {
    setSelected({ ...selected, [index]: value });
  };

  const handleStart = () => {
    setShowIntro(false);
    fetchQuestions();
  };

  const handleCheck = (e) => {
    e.preventDefault();
    let newScore = 0;
    questions.forEach((question, index) => {
      if (question.correct_answer === selected[index]) {
        setSubmitted(true);
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const playAgain = () => {
    setSubmitted(false);
    setSelected({});
    setScore(0);
    fetchQuestions();
  };

  return (
    <main className="relative w-[100%] max-w-[45rem] h-[100%] flex flex-col items-center justify-items-start bg-background px-[1.5rem] py-[1.5rem] md:px-[3rem] md:py-[3rem] lg:px-[4.5rem] lg:py-[3rem]">
      <img src={blob1} className="absolute right-0 top-0" />
      <img src={blob2} className="absolute left-0 bottom-0" />
      {submitted && score === questions.length && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <Confetti />
        </div>
      )}
      {showIntro ? (
        <section className="h-[100%] w-full flex flex-col justify-center items-center gap-[1.5rem]">
          <div className="flex flex-col gap-[0.75rem] justify-center items-center">
            <h1 className="text-primary-dark text-[2rem] font-bold leading-[100%] font-karla">
              Quizzical
            </h1>
            <p className="text-[1rem] font-normal leading-[100%] font-inter text-primary-dark">
              Some description if needed
            </p>
          </div>
          <Button label="Start Quiz" onClick={handleStart} />
        </section>
      ) : (
        <form className="flex z-10 flex-col justify-start items-start gap-[1.5rem]">
          {loading ? (
            <p className="text-[1rem] font-normal leading-[100%] font-inter text-primary-dark">
              Loading questions...
            </p>
          ) : (
            questions.map((question, index) => (
              <Question
                key={index}
                question={decodeHtml(question.question)}
                options={question.options.map((option) => decodeHtml(option))}
                selected={selected[index] || ""}
                changeOption={(e) => handleSelected(index, e.target.value)}
                submitted={submitted}
                correctAnswer={decodeHtml(question.correct_answer)}
              />
            ))
          )}

          {!loading && questions.length > 0 && (
            <div className="w-[100%] flex flex-col md:flex-row lg:flex-row gap-[1rem] justify-start  md:justify-between lg:justify-between items-center">
              {submitted && (
                <p className="text-[0.875rem] font-bold leading-[100%] font-inter text-primary-dark">
                  {`You scored ${score} out of ${questions.length} questions.`}
                </p>
              )}
              <Button
                label={!submitted ? "Check Answers" : "Play Again"}
                onClick={!submitted ? handleCheck : playAgain}
              />
            </div>
          )}
        </form>
      )}
    </main>
  );
}

export default App;
