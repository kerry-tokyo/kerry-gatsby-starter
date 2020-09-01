import React from "react";
import { Helmet } from "react-helmet";
import BaseLayout from "components/layout/BaseLayout";

import { Hero } from "components/hero/Hero";

// tslint:disable no-default-export
export default () => (
  <BaseLayout>
    <Helmet title="Home" />

    <Hero
      strong="Kerry Gatsby Starter"
      title=" is a modern starter that uses TypeScript, React and
        CSS modules."
    ></Hero>
  </BaseLayout>
);
