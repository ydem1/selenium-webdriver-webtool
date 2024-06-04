import React, { FC } from "react";
import cn from "classnames";
import { useLocation } from "react-router";
import { Link } from "src/components/Link";
import { ISidebarItem } from "./types";

interface Props {
  item: ISidebarItem;
}

export const SidebarItem: FC<Props> = ({ item }) => {
  const { pathname } = useLocation();
  const { title, href } = item;

  const isActive = pathname.includes(href);

  const className = cn(
    "block bg-green-base text-center text-black-base font-gobold rounded-20 px-4 py-1 w-full hover:scale-105",
    { "opacity-20": isActive }
  );

  return (
    <li>
      <Link href={href} className={className}>
        {title}
      </Link>
    </li>
  );
};
