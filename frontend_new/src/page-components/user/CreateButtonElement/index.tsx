import React, { FC } from "react";
import { Formik, FormikHelpers } from "formik";
import { PageWindow } from "src/components/PageWindow";
import { FormInput } from "src/components/FormInput";
import { InputElementInitialValues } from "src/@types/initialValues";
import { fieldsButton, initialValuesButton } from "../constants";

interface Props {
  title?: string;
  handleDispatch?: (values: InputElementInitialValues) => void;
}

export const CreateButtonElement: FC<Props> = ({
  title = "Create Button Element",
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
    <PageWindow title={title} >
      <Formik
        initialValues={initialValuesButton}
        onSubmit={handleSubmit}
      >
        <FormInput fields={fieldsButton} />
      </Formik>
    </PageWindow>
  );
};
