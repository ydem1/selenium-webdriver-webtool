import React, { FC } from "react";
import { CreateUrl } from "src/page-components/user/add-url/CreateUrl";
import { CurrentUrl } from "src/page-components/user/add-url/CurrentUrl";

const AddUrl: FC = () => {
  return (
    <div className="flex items-center gap-5 w-full">
      <CreateUrl />
      <CurrentUrl />
    </div>
  );
};

export default AddUrl;

