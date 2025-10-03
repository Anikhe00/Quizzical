export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary-main hover:bg-primary-dark cursor-pointer font-inter text-white px-[1.5rem] py-[0.875rem] rounded-[1rem] text-[1rem] leading-[100%]"
    >
      {label}
    </button>
  );
}
