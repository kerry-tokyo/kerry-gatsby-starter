import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';

import s from './Footer.scss';

interface Social {
  icon: ReactNode;
  to: string;
}

interface FooterProps {
  logo: ReactNode;
  social: Social[];
}

export const Footer = ({  social }: FooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <div>
          <h6 className= {s.copylight}>©︎ Kerry</h6>
        </div>
          <ul className={s.footer__list}>
            {social.map((item) => (
              <li key={item.to} className={s.footer__item}>
                <a href={item.to} target="_blank" rel="noopener noreferrer">
                  {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
);
