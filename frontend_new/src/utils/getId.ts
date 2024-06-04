import { InputElement } from "src/@types/inputElement";
import { AllRules } from "src/@types/rule";

export const getId = (inputs: (InputElement | AllRules)[]) => {
  let newId = 1;
  if (inputs.length !== 0) {
    const maxId = inputs.reduce((max: number, input: InputElement | AllRules) => Math.max(max, input.id), 0);
    newId = maxId + 1;
  }
  
  return newId;
}