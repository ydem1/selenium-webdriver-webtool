import React, { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import { addSubmitBtn, postSubmitBtn } from "src/redux/slice/formBtnSlice";
import { addInputElement, getInputElements, removeInputElement, updateInputElement } from "src/redux/slice/formInputsSlice";
import { getId } from "src/utils/getId";
import { deleteInputElement, postInputElement, testForm, updateInputElementToServer } from "src/api/client";
import { CreateInputElement } from "src/page-components/user/CreateElementInput";
import { ListInputs } from "src/page-components/user/add-form/ListInputs";
import { EditInputElement } from "src/page-components/user/EditInputElement";
import { CreateButtonElement } from "src/page-components/user/CreateButtonElement";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { PATHNAMES } from "src/constants/routes";
import { InputElementInitialValues } from "src/@types/initialValues";

const AddForm: FC = () => {
  const { pathname } = useLocation();
  const isEdit = pathname.includes("edit");
  const { id: editId } = useParams();

  const navigate = useNavigate();

  const { inputs } = useSelector((state: RootState) => state.inputs);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitInput = (values: InputElementInitialValues) => {
    const newInputElement = { ...values, id: getId(inputs) };

    dispatch(addInputElement(newInputElement));
    postInputElement(newInputElement);
  }

  const handleSubmitButton = (values: InputElementInitialValues) => {
    dispatch(addSubmitBtn(values));
    dispatch(postSubmitBtn({ ...values, id: 12 }));
  }

  const handleStartTest = () => {
    testForm();
  };

  const handleSubmitEdit = (
    values: InputElementInitialValues,
  ) => {
    dispatch(updateInputElement( { ...values, id: +editId }));
    updateInputElementToServer(+editId, { ...values, id: +editId });
    dispatch(getInputElements());
    navigate(PATHNAMES.USER_ADD_FORM);
  };

  const handleDeleteInputElement = () => {
    dispatch(removeInputElement(+editId));
    deleteInputElement(+editId);
    dispatch(getInputElements());
    navigate(PATHNAMES.USER_ADD_FORM);
  };

  const handleCanceBtn = () => {
    navigate(PATHNAMES.USER_ADD_FORM);
  }

  return (
    <div className="flex justify-between items-start gap-5 w-full">
      {isEdit ? (
        <EditInputElement
          id={+editId}
          inputs={inputs}
          handleSubmit={handleSubmitEdit}
          handleDeleteInputElement={handleDeleteInputElement}
          handleCanceBtn={handleCanceBtn}
        />
      ) : (
        <div className="flex flex-col gap-10 w-full">
          <CreateInputElement
            handleDispatch={handleSubmitInput}
          />

          <CreateButtonElement
            title="Create submit button"
            handleDispatch={handleSubmitButton}
          />

          <Button
            className="text-3xl uppercase"
            variant={ButtonVariants.PRIMARY_BLACK}
            onClick={handleStartTest}
          >
            Start Test Form
          </Button>
        </div>
      )}
      <ListInputs />
    </div>
  );
};

export default AddForm;
