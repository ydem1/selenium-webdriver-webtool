import React, { FC } from "react";
import cn from "classnames";
import { MESSAGE_SIZE_VARIANTS, MESSAGE_STYLE_VARIANTS } from "./constants";
import { MessageVariants } from "./types";
import { Sizes } from "src/@types/sizes";

interface Props {
  className?: string;
  variant?: MessageVariants;
  size?: Sizes;
  children: React.ReactNode;
  childrenClassName?: string;
}

export const Message: FC<Props> = ({
  className,
  childrenClassName,
  variant,
  size,
  children,
}) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className={cn(MESSAGE_STYLE_VARIANTS[variant], className)}>
        <p className={cn(MESSAGE_SIZE_VARIANTS[size], childrenClassName, "text-center")}>
          {children}
        </p>
      </div>
    </div>
  );
};
