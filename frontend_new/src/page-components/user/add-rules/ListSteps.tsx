import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { Link } from "src/components/Link";
import { Message } from "src/components/Message";
import { MessageVariants } from "src/components/Message/types";
import { PATHNAMES } from "src/constants/routes";
import { Sizes } from "src/@types/sizes";

export const ListSteps: FC = () => {
  const { rule } = useSelector((state: RootState) => state.rule);

  return (
    <ul className="flex flex-wrap items-start gap-5">
      {rule.map((rule, index) =>
        <li key={rule.id}>
          <Link
            href={PATHNAMES.USER_ADD_RULE_EDIT_INPUT.replace(':id', `${rule.id}`)}
            className="flex flex-col items-center gap-2 hover:scale-105"
          >
            <Message
              variant={MessageVariants.SUCCESS}
              className="uppercase"
              size={Sizes.SMALL}
            >
              {`Step ${index + 1} Type: ${rule.value !== undefined ? "Input" : "Button"}`}
            </Message>
            <p className="bg-white-base text-black-base px-2 rounded-20">
              {rule.name}
            </p>
          </Link>
        </li>)}
    </ul>
  );
};

