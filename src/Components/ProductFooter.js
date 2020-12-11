import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: rgb(158, 158, 158);
  padding-top: 50px;
  text-align: center;
  vertical-align: middle;
`;

const FooterText = styled.h1`
  font-size: 20px;
`;

const ProductFooter = (props) => {
  return (
    <>
      <Footer>
        <FooterText>
          Author: Chao-ting, Chang & Ching-shang-chi-chu & Pei-yun
        </FooterText>
      </Footer>
    </>
  );
};

export default ProductFooter;
