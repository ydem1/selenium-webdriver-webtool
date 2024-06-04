import React, { FC } from "react";
import { Formik, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/redux/store";
import { addUrl, postUrl } from "src/redux/slice/urlSlice";
import { PageWindow } from "src/components/PageWindow";
import { FormInput } from "src/components/FormInput";
import { initialValues, textInputs } from "./constant";
import { UrlInitialValues } from "src/@types/initialValues";

export const CreateUrl: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (
    values: UrlInitialValues,
    formikHelpers: FormikHelpers<UrlInitialValues>,
  ) => {
    const { url } = values;
    dispatch(addUrl(url));
    dispatch(postUrl(values));
    formikHelpers.resetForm();
  };

  return (
    <PageWindow title="Add new url">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <FormInput fields={textInputs} />
      </Formik>
    </PageWindow>
  );
};
