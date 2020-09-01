import React, { ReactNode } from "react";

import { Container } from "components/container/Container";

import s from "./Hero.scss";

interface HeroProps {
  title: string;
  text?: string;
  strong?: string;
}

export const Hero = ({ text, title, strong }: HeroProps) => (
  <div className={s.hero}>
    <Container>
      <div className={s.hero__col}>
        <h1 className={s.title}>
          {strong ? <span className={s.strong}>{strong}</span> : ""}
          {title}
        </h1>
        {text ? <p className={s.text}>{text}</p> : ""}
      </div>
    </Container>
  </div>
);
