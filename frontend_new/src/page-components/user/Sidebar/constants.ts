import { PATHNAMES } from "src/constants/routes";
import { ISidebarItem } from "./types";

export const NAVIGATION_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    id: "1",
    href: PATHNAMES.USER_ADD_URL,
    title: 'add url',
  },
  {
    id: "2",
    href: PATHNAMES.USER_ADD_FORM,
    title: 'add form',
  },
  {
    id: "3",
    href: PATHNAMES.USER_ADD_RULE,
    title: 'create rule',
  },
  {
    id: "4",
    href: PATHNAMES.USER_ALL_RULES,
    title: 'all rules',
  },
];
