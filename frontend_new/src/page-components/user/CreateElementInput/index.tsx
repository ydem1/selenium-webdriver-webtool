import React, { FC } from "react";
import { Formik, FormikHelpers } from "formik";
import { PageWindow } from "src/components/PageWindow";
import { FormInput } from "src/components/FormInput";
import { InputElementInitialValues } from "src/@types/initialValues";
import { initialValues, fieldsInputElement } from "../constants";

interface Props {
  title?: string;
  handleDispatch?: (values: InputElementInitialValues) => void;
}

export const CreateInputElement: FC<Props> = ({
  title = "Create new Input Element",
  handleDispatch,
}) => {
  const handleSubmit = (
    values: InputElementInitialValues,
    formikHelpers: FormikHelpers<InputElementInitialValues>,
  ) => {
    handleDispatch(values);
    formikHelpers.resetForm();
  };

  return (
    <PageWindow title={title}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <FormInput fields={fieldsInputElement} />
      </Formik>
    </PageWindow>
  );
};
