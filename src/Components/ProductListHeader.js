import React from 'react';
import styled from '@emotion/styled';

const ProductListHeader = (props) => {
  const Header = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid white;
    margin-bottom: 40px;
    img {
      width: 40px;
      height: 40px;
      background-color: #000;
    }
  `;

  const HeaderTitle = styled.div`
    font-size: 28px;
    font: 微軟正黑體;
    margin-left: 10px;
  `;

  //   const Logo = styled.img`
  //     width: 50px;
  // `;

  return (
    <>
      <Header>
        {/* <div className="container col-9 header-content"> */}
        {/* <div className="row d-flex align-items-end"> */}
        <img src="../images/laptopbibi_logo.webp" alt="" />
        <HeaderTitle>電腦比比</HeaderTitle>
        {/* </div> */}
        {/* </div> */}
      </Header>
    </>
  );
};

export default ProductListHeader;
