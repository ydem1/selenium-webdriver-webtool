import React, { FC } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

export const PageWindow: FC<Props> = ({
  className,
  title,
  children,
}) => (
  <div className={cn("bg-green-base w-full p-5 text-black-base rounded-20", className)}>
    {title && <h3>{title}</h3>}
    {children}
  </div>
);
