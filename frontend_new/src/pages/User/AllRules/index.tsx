import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { AppDispatch, RootState } from "src/redux/store";
import { PageWindow } from "src/components/PageWindow";
import { getAllRulesElements } from "src/redux/slice/allRulesInputsSlice";
import { AllRulesList } from "src/page-components/user/all-rules/AllRulesList";
import { NoRules } from "src/page-components/user/all-rules/NoRules";

const AllRules: FC = () => {
  const { allRules, loading } = useSelector((state: RootState) => state.allRules);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllRulesElements())
  }, [dispatch])

  return (
    <PageWindow>
      {loading ? (
        <Oval
          wrapperClass="flex justify-center"
          height="100%"
          width="180"
        />
      ) : (allRules.length === 0 ? (
        <NoRules />
      ) : (
        <AllRulesList allRules={allRules} />
      ))}

    </PageWindow>
  );
};

export default AllRules;
