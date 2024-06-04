import React, { FC, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import { getUrl } from "src/redux/slice/urlSlice";
import { Message } from "src/components/Message";
import { MessageVariants } from "src/components/Message/types";

export const CurrentUrl: FC = () => {
  const { url, loading } = useSelector((state: RootState) => state.url);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUrl());
  }, [dispatch]);

  return (
    <div className="bg-green-base p-5 text-black-base max-w-md rounded-20 break-words min-w-52 w-52">
      {loading ? (
        <Oval
          wrapperClass="flex justify-center"
          height="100%"
          width="80"
        />
      ) : (url === "" ? (
        <Message variant={MessageVariants.WARNING}>
          There are no Url
        </Message>

      ) : (
        <a href={url} target="_black">
          <Message variant={MessageVariants.SUCCESS} childrenClassName="hover:scale-105">
            {url}
          </Message>
        </a>
      ))}
    </div>
  );
};

