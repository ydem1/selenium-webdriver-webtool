import React, { FC } from "react";
import { ErrorMessage, Field } from "formik";
import { TextInputType } from "src/@types/textInput";

export const TextInput: FC<TextInputType> = ({ label, name }) => (
  <div>
    <h4 className="font-bold">{label}</h4>
    <Field
      className="border border-black-base w-full px-1 rounded-20"
      type="text"
      name={name}
    />
    <ErrorMessage name={name} component="div" />
  </div>
);

