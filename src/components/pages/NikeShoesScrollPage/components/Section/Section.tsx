import React, { forwardRef, MutableRefObject, useEffect, useRef } from 'react';

import * as S from './Section.styles';

interface Props {
  scrollY: number;
  setPage: () => void;
  children: React.ReactNode;
}

export const Section = forwardRef(
  (props: Props, sectionRef: React.Ref<HTMLElement>) => {
    const { scrollY, setPage, children } = props;

    useEffect(() => {
      if (sectionRef === null) return;

      const current = (sectionRef as MutableRefObject<HTMLElement>).current;

      if (current) {
        const { offsetTop, offsetHeight } = current;
        const topGap = offsetHeight / 1.5;
        if (
          scrollY > offsetTop - topGap &&
          scrollY < offsetTop + offsetHeight - topGap
        ) {
          setPage();
        }
      }
    }, [scrollY]);

    return <S.Section ref={sectionRef}>{children}</S.Section>;
  },
);
Section.displayName = 'Section';
