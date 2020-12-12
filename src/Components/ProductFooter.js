import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.footer`
  width: 100%;
  height: 150px;
  background-color: rgb(158, 158, 158);
  ${'' /* padding-top: 50px; */}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.h1`
  font-size: 15px;
  color: #fff;
  line-hight: 60px;
`;

const ProductFooter = (props) => {
  return (
    <>
      <Footer>
        <FooterText>
          @2020電腦比比
          <br />
          成為合作夥伴
          <br />
          聯絡我們 laptopbibi.service@gmail.com
        </FooterText>
      </Footer>
    </>
  );
};

export default ProductFooter;
