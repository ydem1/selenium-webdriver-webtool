import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "src/redux/store";
import { addAllRules } from "src/redux/slice/allRulesInputsSlice";
import { addRule, clearRule, removeInputRule, updateInputRule } from "src/redux/slice/ruleInputsSlice";
import { postRule } from "src/api/client";
import { getId } from "src/utils/getId";
import { CreateButtonElement } from "src/page-components/user/CreateButtonElement";
import { CreateInputElement } from "src/page-components/user/CreateElementInput";
import { ListSteps } from "src/page-components/user/add-rules/ListSteps";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { InputElementInitialValues } from "src/@types/initialValues";
import { EditInputElement } from "src/page-components/user/EditInputElement";
import { PATHNAMES } from "src/constants/routes";

const AddRule: FC = () => {
  const { pathname } = useLocation();
  const isEdit = pathname.includes("edit");
  const { id: editId } = useParams();

  const navigate = useNavigate();

  const { rule } = useSelector((state: RootState) => state.rule);
  const { allRules } = useSelector((state: RootState) => state.allRules);

  const dispatch = useDispatch<AppDispatch>();

  const handleAddInputToRule = (values: InputElementInitialValues) => {
    const newInputElement = { ...values, id: getId(rule) };
    dispatch(addRule(newInputElement));
  }

  const handleSaveRule = () => {
    const newRule = { rule, id: getId(allRules) };
    postRule(newRule);

    dispatch(addAllRules(newRule));
    dispatch(clearRule());
  }

  const handleSubmitEdit = (
    values: InputElementInitialValues,
  ) => {
    dispatch(updateInputRule({ ...values, id: +editId }));
    navigate(PATHNAMES.USER_ADD_RULE);
  };

  const handleDeleteInputElementEdit = () => { 
    dispatch(removeInputRule(+editId));
    navigate(PATHNAMES.USER_ADD_RULE);
  };

  const handleCanceBtnEdit = () => {
    navigate(PATHNAMES.USER_ADD_RULE);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {isEdit ? (
        <>
          <EditInputElement
            id={+editId}
            inputs={rule}
            handleSubmit={handleSubmitEdit}
            handleDeleteInputElement={handleDeleteInputElementEdit}
            handleCanceBtn={handleCanceBtnEdit}
          />
          <ListSteps />
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-10">
            <CreateButtonElement handleDispatch={handleAddInputToRule} />
            <CreateInputElement handleDispatch={handleAddInputToRule} />
          </div>

          <ListSteps />

          <Button
            type="button"
            variant={ButtonVariants.PRIMARY_BLACK}
            onClick={handleSaveRule}
          >
            Save Rule
          </Button>
        </>
      )}
    </div>
  );
};

export default AddRule;
