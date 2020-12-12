import React from 'react';
import styled from '@emotion/styled';
// import { ReactComponent as SearchIcon } from '../images/search_icon.svg';

const Container = styled.div`
  background-color: #efefef;
  min-width: 921px;
  margin-bottom: 40px;
  width: 90%;
  ${'' /* display: flex;
  justify-content: center; */}
`;

//包ProductListSearchBar
const Row1 = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 210px;
    height: 40px;
    margin: 20px;
    padding-left: 15px;
    box-sizing: border-box;
  }
`;

//包Main、Aside
const Row2 = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #507199;
    width: 170px;
    height: 40px;
    margin-bottom: 20px;
    padding-left: 15px;
    box-sizing: border-box;
    color: #fff;
    outline: none;
    border: 0px;
    cursor: pointer;
  }
`;
const ProductCompareBar = (props) => {
  return (
    <>
      <Container>
        <Row1>
          <input type="text" placeholder="輸入品牌或型號"></input>
          <input type="text" placeholder="輸入品牌或型號"></input>
          <input type="text" placeholder="輸入品牌或型號"></input>
          <input type="text" placeholder="輸入品牌或型號"></input>
        </Row1>
        <Row2>
          <button>前往比較表</button>
        </Row2>
      </Container>
    </>
  );
};

export default ProductCompareBar;
