import { IRest } from "../../../models";
import { LoadingIcon } from "../../Icons";

export function LoadingButton({...rest}: IRest) {
  const buttonStyles =
    "bg-green border-2 border-green text-white rounded-xl cursor-pointer py-3 px-3.5 transition-all duration-300 ease-out fill-white max-w-36	w-full";

  return (
    <button className={buttonStyles} disabled {...rest}>
      <LoadingIcon width='25px' height="25px" />
    </button>
  );
}
