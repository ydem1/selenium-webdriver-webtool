import React, { FC } from "react";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Link } from "src/components/Link";
import { PATHNAMES } from "src/constants/routes";

const Home: FC = () => (
  <section className="container">
    <div className="relative flex flex-col items-center justify-center gap-5 h-screen">
      <h1 className="text-center">
        Selenium Webdriver Tool
      </h1>
      <p>
        Our web application allows you not only to test your website in different conditions,
        but also to create and execute scenarios
        for interacting with web pages.
        You can easily create and customize
        scenarios to automate testing of various
        functionalities of your website.
        Additionally, you can add events
        and interactions on pages to test
        how your web application reacts to
        different user inputs. Our intuitive
        interface makes it easy to create and
        customize these scripts and events to
        ensure maximum efficiency and quality
        of your web product.
      </p>

      <Link
        className="text-3xl uppercase absolute bottom-10 right-0"
        href={PATHNAMES.USER}
      >
        <Button variant={ButtonVariants.PRIMARY}>
          Start
        </Button>
      </Link>
    </div>
  </section>
);

export default Home;
