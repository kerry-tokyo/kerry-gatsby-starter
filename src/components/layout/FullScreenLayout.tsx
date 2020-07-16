import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import Logo from '../../assets/svg/kerry-logo.svg';
import Dribbble from '../../assets/svg/dribbble.svg';
import Twitter from '../../assets/svg/twitter.svg';
import GitHub from '../../assets/svg/github.svg';
import Spotify from '../../assets/svg/spotify.svg';
import Letterboxd from '../../assets/svg/letterboxd.svg';


import { helmet } from '../../utils/helmet';
import { Header } from '../header/Header';
import { HeaderLink } from '../header/HeaderLink';
import { Devtools } from '../devtools/Devtools';

import s from './BaseLayout.scss';

interface BaseLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable no-default-export
export default ({ children }: BaseLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
        <HeaderLink  to="https://dribbble.com/kerry-tokyo" icon={<Dribbble />} />
        <HeaderLink  to="https://letterboxd.com/vivingston/" icon={< Letterboxd/>} />
        <HeaderLink  to="https://open.spotify.com/user/v8vi31q8nof0di7jzzsw7vhkd?si=rBHI-m6WQiuji_Ix0NYVow" icon={<Spotify />} />
        <HeaderLink  to="https://github.com/kerry-tokyo" icon={<GitHub />} />
    </Header>

    {children}

    <div className={s.copylight}>
      <h6>©︎ Kerry</h6>
    </div>

    {isDev && <Devtools />}
  </div>
);
