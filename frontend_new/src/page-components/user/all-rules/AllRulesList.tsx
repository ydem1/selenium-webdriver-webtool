import React, { FC } from "react";
import { RuleItem } from "src/page-components/user/all-rules/RuleItem";
import { AllRules } from "src/@types/rule";

interface Props {
  allRules: AllRules[];
}

export const AllRulesList: FC<Props> = ({ allRules }) => (
  <ul className="flex flex-col gap-5">
    {allRules.map(rule => (
      <li key={rule.id}>
        <RuleItem {...rule} />
      </li>
    ))}
  </ul>
);

