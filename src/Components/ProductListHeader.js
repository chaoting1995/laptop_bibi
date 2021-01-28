import React from 'react';
import styled from '@emotion/styled';
//-----------------------匯入icon--------------------------//

import { ReactComponent as Logo } from '../images/logo.svg';
//-----------------------style---------------------------//
const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid white;
  margin-bottom: 40px;
  svg {
    width: 40px;
    height: 40px;
    ${'' /* background-color: #000; */}
  }
  h1 {
    font-size: 28px;
    font: 微軟正黑體;
    margin-left: 10px;
    font-weight: 400;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

//---------------------component------------------------//

const ProductListHeader = (props) => {
  return (
    <>
      <Header>
        <div>
          <Logo />
          <h1>電腦比比</h1>
        </div>
        <h1>商品列表</h1>
      </Header>
    </>
  );
};

export default ProductListHeader;
