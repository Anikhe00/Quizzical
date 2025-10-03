export default function AnswerButton({
  option,
  selected,
  changeOption,
  submitted,
  correctAnswer,
}) {
  return (
    <label className={`${submitted ? "" : "cursor-pointer"} w-auto`}>
      <input
        type="radio"
        name="answer"
        value={option}
        checked={selected === option}
        onChange={changeOption}
        disabled={submitted}
        className="hidden"
      />
      <span
        className={`w-auto flex items-center justify-center  text-primary-dark text-[0.64rem] leading-[100%] px-[0.875rem] py-[0.25rem] h-[1.25rem] rounded-[0.5rem] font-inter font-medium border-[1px] ${
          submitted
            ? option === correctAnswer
              ? "bg-success border-success text-primary-dark"
              : option === selected
              ? "bg-error text-border border-error"
              : "border-primary-main/50 text-primary-dark bg-background"
            : selected === option
            ? "bg-primary-light border-primary-light text-primary-dark"
            : "border-primary-main/50 hover:bg-primary-light text-primary-dark"
        }`}
      >
        {option}
      </span>
    </label>
  );
}
