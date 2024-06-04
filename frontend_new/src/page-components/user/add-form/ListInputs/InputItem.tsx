import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Link } from "src/components/Link";
import { InputElement } from "src/@types/inputElement";
import { PATHNAMES } from "src/constants/routes";
import cn from "classnames";

export const InputItem: FC<InputElement> = ({ id, name }) => {
  const { id: idParams } = useParams();

  const isActive = +idParams === id;

  return (
    <li key={id}>
      <Link href={PATHNAMES.USER_ADD_FORM_EDIT_INPUT.replace(':id', `${id}`)}>
        <Button
          className={cn("w-full", { "opacity-20": isActive })}
          variant={ButtonVariants.PRIMARY}
        >
          {name}
        </Button>
      </Link>
    </li>
  );
};
