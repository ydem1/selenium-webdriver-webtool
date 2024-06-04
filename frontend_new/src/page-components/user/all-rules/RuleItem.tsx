import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/redux/store";
import { removeRule } from "src/redux/slice/allRulesInputsSlice";
import { deleteRule, testRule } from "src/api/client";
import { AllRules } from "src/@types/rule";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Message } from "src/components/Message";
import { MessageVariants } from "src/components/Message/types";

export const RuleItem: FC<AllRules> = ({ id, rule }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleRunTestRule = () => {
    testRule({ id })
      .catch(() => {
        setErrorMessage("Input Element or Button do not find");
      });
  }

  const handleDeleteRule = () => {
    dispatch(removeRule(id));
    deleteRule(id);
  };

  return (
    <div className="flex flex-col gap-5 bg-white-base p-4 rounded-20">
      <h3>{`Rule with ID: ${id}`}</h3>

      <ul className="flex flex-col gap-2">
        {rule.map(rule =>
          <li key={rule.id} className="bg-green-light p-2 text-white-base text-xl rounded-20">
            {`${rule.id} ${rule.value !== undefined ? "Input" : "Button"} ${rule.name}`}
          </li>
        )}
      </ul>

      {errorMessage && (
        <Message variant={MessageVariants.ERROR}>
          {errorMessage}
        </Message>
      )}

      <div className="flex justify-end gap-5">
        <Button
          type="submit"
          variant={ButtonVariants.PRIMARY_BLACK}
          onClick={handleRunTestRule}
        >
          Run Test
        </Button>

        <Button
          type="reset"
          variant={ButtonVariants.SECONDARY}
          onClick={handleDeleteRule}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
