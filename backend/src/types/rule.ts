import { Input } from "./input.js";

export type Rule = Input[];

export interface AllRules {
  id: number;
  rule: Rule;
}
