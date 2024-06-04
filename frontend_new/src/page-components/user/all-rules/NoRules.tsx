import React, { FC } from "react";
import { Link } from "src/components/Link";
import { PATHNAMES } from "src/constants/routes";

export const NoRules: FC = () => (
  <div className="flex flex-col justify-between col-span-3">
    <h3>
      There are no Rules
    </h3>

    <Link href={PATHNAMES.USER_ADD_RULE} className="bg-white-base text-center text-black-base border font-gobold rounded-20 px-4 py-1 w-max hover:border-black-base">
      create rule
    </Link>
  </div>
);

