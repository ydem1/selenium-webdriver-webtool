import cn from "classnames";
import { MessageVariants } from "./types";
import { Sizes } from "src/@types/sizes";

const DEFAULT_MESSAGE_CLASSNAME = "w-full p-2 rounded-20";
const DEFAULT_MESSAGE_SIZE_CLASSNAME = "font-gobold italic font-bold";

export const MESSAGE_STYLE_VARIANTS = {
  [MessageVariants.SUCCESS]: cn(
    "bg-green-lighter border-4 border-green-light text-green-light",
    DEFAULT_MESSAGE_CLASSNAME
  ),
  [MessageVariants.WARNING]: cn(
    "bg-yellow-strong border-4 border-yellow-base text-white-base",
    DEFAULT_MESSAGE_CLASSNAME
  ),
  [MessageVariants.ERROR]: cn(
    "bg-white-base border-4 border-red-base text-red-base",
    DEFAULT_MESSAGE_CLASSNAME
  ),
};

export const MESSAGE_SIZE_VARIANTS = {
  [Sizes.SMALL]: cn(
    "text-xl",
    DEFAULT_MESSAGE_SIZE_CLASSNAME
  ),
  [Sizes.AVERAGE]: cn(
    "text-2xl",
    DEFAULT_MESSAGE_SIZE_CLASSNAME
  ),
  [Sizes.LARGE]: cn(
    "",
    DEFAULT_MESSAGE_SIZE_CLASSNAME
  ),
};
