import React, { useState } from 'react';
import styled from 'styled-components';

import { Product, Section, SideNav } from './components';
import { getProducts } from './data';
import { useScroll } from './hooks';

export const NikeShoesScrollPage = () => {
  const products = getProducts();
  const refs = [...Array(products.length + 1)].fill(React.createRef());

  const [currentPage, setCurrentPage] = useState(0);
  const { scrollY } = useScroll();

  console.log(currentPage);

  return (
    <Layout>
      <SideNav currentPage={currentPage} />
      <Section
        ref={refs[0]}
        scrollY={scrollY}
        setPage={() => setCurrentPage(0)}
      >
        <Title>NIKE 스니커즈</Title>
      </Section>
      {products.map((product, index) => {
        const sectionIndex = index + 1;

        return (
          <Section
            key={product.title}
            scrollY={scrollY}
            setPage={() => setCurrentPage(sectionIndex)}
          >
            <Product
              title={product.title}
              description={product.description}
              images={product.images}
              imageAlt={product.imageAlt}
              active={currentPage === sectionIndex}
            />
          </Section>
        );
      })}
    </Layout>
  );
};

const BACKGROUND = '#FFF';

const Layout = styled.main`
  background: ${BACKGROUND};
  overflow-x: hidden;
`;

const Title = styled.h1`
  padding-top: 40vh;
  margin: 0;

  color: #000;
  font-size: 60px;
  text-align: center;
`;
