import React from "react";
import { Helmet } from "react-helmet";
import BaseLayout from "components/layout/BaseLayout";

import { BlockText } from "components/block-text/BlockText";

// tslint:disable no-default-export
export default () => (
  <BaseLayout>
    <Helmet title="About" />

    <BlockText heading="About" description="This is About page." />
  </BaseLayout>
);
