import Button from "./Button";

export default function Intro({ handleStart }) {
  return (
    <section className="h-[100%] w-full flex flex-col justify-center items-center gap-[1.5rem]">
      <div className="flex flex-col gap-[0.75rem] justify-center items-center">
        <h1 className="text-primary-dark text-[2rem] font-bold leading-[100%] font-karla">
          Quizzical
        </h1>
        <p className="text-[1rem] text-center font-normal leading-[100%] font-inter text-primary-dark">
          A fun trivia challenge to test your knowledge across all topics.
        </p>
      </div>
      <Button label="Start Quiz" onClick={handleStart} />
    </section>
  );
}
