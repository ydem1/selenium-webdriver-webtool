import React, { FC } from "react";
import { Form } from "formik";
import { TextInput } from "src/components/TextInput";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { TextInputType } from "src/@types/textInput";

interface Props {
  fields: TextInputType[];
  handleCanceBtn?: () => void;
}

export const FormInput: FC<Props> = ({
  fields,
  handleCanceBtn,
}) => {
  return (
    <Form className="flex flex-col gap-2.5">
      <div className="bg-white-base rounded-20 my-2.5 p-2.5">
        {fields.map(textInput => (
          <TextInput key={textInput.name} {...textInput} />
        ))}
      </div>

      <div className="flex justify-end gap-5 bg-green-base">
        <Button type="submit" variant={ButtonVariants.PRIMARY_BLACK}>
          Submit
        </Button>

        <Button type="reset" variant={ButtonVariants.SECONDARY} onClick={handleCanceBtn}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};
