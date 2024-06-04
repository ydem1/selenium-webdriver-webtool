import { TextInputType } from "src/@types/textInput";
import { InputElementInitialValues } from "src/@types/initialValues";

export const fieldsButton: TextInputType[] = [
  {
    name: "name",
    label: "Name"
  },
  {
    name: "selector",
    label: "Selector"
  }
];

export const initialValuesButton: InputElementInitialValues = {
  name: "",
  selector: "",
};

export const fieldsInputElement: TextInputType[] = [
  {
    name: "value",
    label: "Value"
  },
  {
    name: "name",
    label: "Name"
  },
  {
    name: "selector",
    label: "Selector"
  }
]

export const initialValues: InputElementInitialValues = {
  value: "",
  name: "",
  selector: "",
};