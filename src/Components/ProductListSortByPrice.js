import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #efefefd1;
  height: 40px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  span {
    margin-right: 10px;
    cursor: pointer;
  }
`;
const ProductListSortByPrice = (props) => {
  const { productData, setProductData, viewFilter, setViewFilter } = props;

  //價格預設排列
  const priceDefault = () =>
    setProductData(
      [...productData].sort((a, b) => a.product_id - b.product_id)
    );

  //價格由低到高
  const priceASC = () =>
    setProductData(
      [...productData].sort((a, b) => a.product_price - b.product_price)
    );

  //價格由高到低
  const priceDESC = () =>
    setProductData(
      [...productData].sort((a, b) => b.product_price - a.product_price)
    );

  return (
    <>
      <Container>
        <div>共 {productData.length} 項商品</div>
        <div>
          <span onClick={priceDefault}>預設</span>
          <span onClick={priceASC}>價格由低到高</span>
          <span onClick={priceDESC}>價格由高到低</span>
        </div>
      </Container>
    </>
  );
};

export default ProductListSortByPrice;
