import React, { FC } from "react";
import { Formik } from "formik";
import { PageWindow } from "src/components/PageWindow";
import { FormInput } from "src/components/FormInput";
import { InputElementInitialValues } from "src/@types/initialValues";
import { Message } from "src/components/Message";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { MessageVariants } from "src/components/Message/types";
import { Sizes } from "src/@types/sizes";
import { fieldsButton, fieldsInputElement } from "../constants";
import { InputElement } from "src/@types/inputElement";

interface Props {
  id: number;
  inputs: InputElement[];
  handleSubmit: (values: InputElementInitialValues) => void;
  handleDeleteInputElement: () => void;
  handleCanceBtn: () => void;
  type?: string;
}

export const EditInputElement: FC<Props> = ({
  id,
  inputs,
  handleSubmit,
  handleDeleteInputElement,
  handleCanceBtn,
  type,
}) => {
  const editInputElement = inputs.find(input => input.id === id);

  if (!editInputElement) {
    return (
      <Message
        size={Sizes.AVERAGE}
        variant={MessageVariants.ERROR}
      >
        {`InputElement with id: ${id} is not found`}
      </Message>
    );
  }

  const initialValues = {
    value: editInputElement.value,
    name: editInputElement.name,
    selector: editInputElement.selector,
  };

  return (
    <PageWindow className="relative" title={`Edit InputElement name: ${initialValues.name}`} >
      <Button
        type="button"
        className="absolute right-5 top-5"
        variant={ButtonVariants.RED}
        onClick={handleDeleteInputElement}
      >
        DElETE
      </Button>

      <Formik
        key={editInputElement.id}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <FormInput
          fields={initialValues.value === undefined ? fieldsButton : fieldsInputElement}
          handleCanceBtn={handleCanceBtn}
        />
      </Formik>
    </PageWindow>
  );
};
