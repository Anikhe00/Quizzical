import AnswerButton from "./AnswerButton";

export default function Question({
  question,
  options,
  selected,
  changeOption,
  submitted,
  correctAnswer,
}) {
  return (
    <div className="w-[100%] flex flex-col justify-center items-start gap-[1rem]">
      <h1 className="font-karla text-[1rem] font-bold text-primary-dark leading-[100%]">
        {question}
      </h1>
      <div className="flex flex-wrap flex-row justify-start items-start gap-[0.75rem]">
        {options.map((option) => (
          <AnswerButton
            key={option}
            option={option}
            selected={selected}
            changeOption={changeOption}
            submitted={submitted}
            correctAnswer={correctAnswer}
          />
        ))}
      </div>
      <hr className="w-[100%] border-[1px] border-border" />
    </div>
  );
}
