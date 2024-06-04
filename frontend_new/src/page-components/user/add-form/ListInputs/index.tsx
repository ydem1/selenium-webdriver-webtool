import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { AppDispatch, RootState } from "src/redux/store";
import { getInputElements } from "src/redux/slice/formInputsSlice";
import { getSubmitBtn } from "src/redux/slice/formBtnSlice";
import { Message } from "src/components/Message";
import { MessageVariants } from "src/components/Message/types";
import { InputItem } from "./InputItem";
import { Sizes } from "src/@types/sizes";

export const ListInputs: FC = () => {
  const { inputs, loading: inputsLoading } = useSelector((state: RootState) => state.inputs);
  const { submitBtn, loading: submitBtnLoading } = useSelector((state: RootState) => state.submitBtn);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getInputElements());
    dispatch(getSubmitBtn());
  }, [dispatch]);

  return (
    <ul className="flex flex-col gap-5 min-w-52 w-52">
      <li>
        <h3 className="text-center">Current fields</h3>
      </li>
      {inputsLoading ? (
        <Oval
          wrapperClass="flex justify-center"
          height="100%"
          width="80"
        />
      ) : (
        inputs.length !== 0 ? (
          inputs.map(input => (
            <InputItem key={input.id} {...input} />
          ))
        ) : (
          <Message
            variant={MessageVariants.WARNING}
            size={Sizes.AVERAGE}
          >
            There are no inputs
          </Message>
        )
      )}

      <h3 className="text-center">Submit button</h3>

      {submitBtnLoading ? (
        <Oval
          wrapperClass="flex justify-center"
          height="100%"
          width="80"
        />
      ) : (
        <li>
          {submitBtn.name !== "" ? (
            <p className="bg-black-base text-white-base border text-center font-gobold -skew-x-12 px-4 py-2 ">{submitBtn.name}</p>
          ) : (
            <Message
              variant={MessageVariants.WARNING}
              size={Sizes.AVERAGE}
            >
              There is no Submit button
            </Message>
          )}
        </li>
      )}
    </ul>
  );
};
