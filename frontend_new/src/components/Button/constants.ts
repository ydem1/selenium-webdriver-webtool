import cn from "classnames";
import { ButtonVariants } from "./types";

const DEFAULT_BUTTON_CLASSNAME = "font-gobold -skew-x-12 px-4 py-2";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]: cn(
    "bg-green-base text-black-base hover:opacity-80",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.PRIMARY_BLACK]: cn(
    "bg-black-base text-white-base border hover:brightness-125",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.SECONDARY]: cn(
    "bg-white-base text-black-base border border-black-base hover:brightness-125",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.RED]: cn(
    "bg-red-base text-white-base hover:opacity-80",
    DEFAULT_BUTTON_CLASSNAME
  ),
};
