import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Button } from "components/button/Button";

import Logo from "../../assets/svg/kerry-logo.svg";
import Dribbble from "../../assets/svg/dribbble.svg";
import GitHub from "../../assets/svg/github.svg";
import Spotify from "../../assets/svg/spotify.svg";
import Letterboxd from "../../assets/svg/letterboxd.svg";

import { helmet } from "../../utils/helmet";
import { Header } from "../header/Header";
import { HeaderLink } from "../header/HeaderLink";
import { Footer } from "../footer/Footer";
import { Devtools } from "../devtools/Devtools";

import s from "./BaseLayout.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === "development";

// tslint:disable no-default-export
export default ({ children }: BaseLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink to="/about" name="About" />
      <HeaderLink to="/contact" name="Contact" />
      <Button href="https://kerrytokyo.com/">Author</Button>
    </Header>

    {children}

    <Footer
      logo={<Logo />}
      social={[
        { icon: <Dribbble />, to: "https://dribbble.com/kerry-tokyo" },
        { icon: <Letterboxd />, to: "https://letterboxd.com/vivingston" },
        { icon: <GitHub />, to: "https://github.com/kerry-tokyo" },
        {
          icon: <Spotify />,
          to:
            "https://open.spotify.com/user/v8vi31q8nof0di7jzzsw7vhkd?si=rBHI-m6WQiuji_Ix0NYVow",
        },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
