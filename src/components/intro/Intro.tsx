import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';

import s from './Intro.scss';

interface IntroProps {
  children: ReactNode;
}

export const Intro = ({ children }: IntroProps) => (
  <div className={s.intro}>
    <Container>
        <div className={s.intro__col}>
          <div className={s.intro__text}>{children}</div>
        </div>
    </Container>
  </div>
);
