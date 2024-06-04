import { InputElement } from "./inputElement";

export type Rule = InputElement[];

export interface AllRules {
  id: number;
  rule: Rule;
}
