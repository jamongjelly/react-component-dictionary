import React from 'react';
import cx from 'classnames';

import * as S from './Product.styles';

interface Props {
  title: string;
  description: string;
  images: [string, string];
  imageAlt: string;
  active: boolean;
}

export const Product = ({
  title,
  description,
  images,
  imageAlt,
  active,
}: Props) => {
  return (
    <>
      <S.InnerWrap>
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductDescription>{description}</S.ProductDescription>
      </S.InnerWrap>
      <S.ImageWrap className={cx({ active })}>
        <img src={images[0]} alt={imageAlt} />
        <img src={images[1]} alt={imageAlt} />
      </S.ImageWrap>
    </>
  );
};
