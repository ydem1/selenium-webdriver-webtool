import { FC, SVGProps } from "react";

export type SVGReactComponent = FC<SVGProps<SVGSVGElement>>;

export interface ILink {
  id: number | string;
  label?: string;
  href: string;
  isOpenNewTab?: boolean;
  icon?: SVGReactComponent;
}

export interface Image {
  title?: string;
  url: string;
}
