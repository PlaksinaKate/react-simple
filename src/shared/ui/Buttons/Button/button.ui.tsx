import { IButton } from "./button.model";

export function Button({ children, onClick, ...rest }: IButton) {
  const buttonStyles =
    "bg-green border-2 border-green min-w-min rounded-xl cursor-pointer py-3 px-5 text-white text-base font-semibold	transition-all duration-300 ease-out";
  const buttonStylesHover = "hover:bg-dark-green hover:border-dark-green";
  const buttonStylesFocus = "focus:border-2	focus:border-black";
  return (
    <button
      className={`${buttonStyles} ${buttonStylesHover} ${buttonStylesFocus}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
