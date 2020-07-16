import React from 'react';
import { Helmet } from 'react-helmet';
import  BaseLayout from 'components/layout/BaseLayout';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

// tslint:disable no-default-export
export default () => (
  <BaseLayout>
    <Helmet title="Home" />

    <Intro>
      <h1>
        ケリーは、東京に住むデザイナーです。日々、ユニークなブランド、デジタル製品、イラストレーション、UIの設計と構築に励んでいます。
      </h1>
    </Intro>

  </BaseLayout>
);
