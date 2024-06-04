import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "src/components/Link";
import { PATHNAMES } from "src/constants/routes";

const NotFound: FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate(PATHNAMES.HOME);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <section className="container py-25">
      <h2 className="text-5xl">Not Found Page</h2>

      <div className="flex gap-2 mt-10">
        <p>{`After ${count} seconds you will be taken to the home page, or just `}</p>
        <p className="font-bold">
          <Link href={PATHNAMES.HOME}>
            сlick
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
