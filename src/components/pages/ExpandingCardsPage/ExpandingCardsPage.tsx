import React, { useState } from 'react';
import {
  faSnowflake,
  faSun,
  faTint,
  faTree,
  faWalking,
} from '@fortawesome/free-solid-svg-icons';

import { Card } from './components';
import { GlobalStyles } from './styles';

import * as S from './ExpandingCardsPage.styles';

const cards = [
  {
    background:
      'url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)',
    icon: faWalking,
    title: 'Blonkisoaz',
    description: 'Omuke trughte a otufta',
  },
  {
    background:
      'url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg)',
    icon: faSnowflake,
    title: 'Oretemauw',
    description: 'Omuke trughte a otufta',
  },
  {
    background:
      'url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg)',
    icon: faTree,
    title: 'Iteresuselle',
    description: 'Omuke trughte a otufta',
  },
  {
    background:
      'url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)',
    icon: faTint,
    title: 'Idiefe',
    description: 'Omuke trughte a otufta',
  },
  {
    background:
      'url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg)',
    icon: faSun,
    title: 'Inatethi',
    description: 'Omuke trughte a otufta',
  },
];

export const ExpandingCardsPage = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <GlobalStyles />
      <S.CardContainer length={cards.length}>
        {cards.map((card, index) => (
          <Card
            key={`${card.title}-${index}`}
            active={activeCard === index}
            background={card.background}
            icon={card.icon}
            title={card.title}
            description={card.description}
            onClick={() => setActiveCard(index)}
          />
        ))}
      </S.CardContainer>
    </>
  );
};
