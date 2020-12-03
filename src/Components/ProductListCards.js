import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: rgb(144, 151, 151);
  ${'' /* // display: flex; */}
  ${'' /* // flex-wrap: wrap; */}
  ${'' /* // box-sizing: border-box; */}
  ${'' /* flex-direction: column-reverse; */}
`;

const ProductCard = styled.div`
  ${({ index }) => index};
  background-color: #faf;
  width: 31%;
  ${'' /* // height: 340px; */}
  margin: 5px;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
`;

const ProductListCards = (props) => {
  const { productData, viewFilter } = props;

  return (
    <>
      <Container>
        {productData.map((item, index) => {
          if (viewFilter === 'ASUS' && item.product_brand !== viewFilter)
            return <></>;
          if (viewFilter === 'acer' && item.product_brand !== viewFilter)
            return <></>;
          if (viewFilter === 'Fujitsu' && item.product_brand !== viewFilter)
            return <></>;
          if (viewFilter === 'LG' && item.product_brand !== viewFilter)
            return <></>;
          if (
            viewFilter === 'HP' &&
            item.product_brand !== viewFilter &&
            item.product_brand !== 'hp'
          )
            //權宜之計
            return <></>;

          return (
            <ProductCard key={index}>
              product_id: {item.product_id}
              <br />
              product_brand: {item.product_brand}
              <br />
              product_name: {item.product_name}
              <br />
              product_price: {item.product_price}
              <br />
              product_image: {item.product_image}
              <br />
              product_CPU: {item.product_CPU}
              <br />
              product_DRAM: {item.product_DRAM}
              <br />
              product_HDD: {item.product_HDD}
              <br />
              product_battery: {item.product_battery}
            </ProductCard>
          );
        })}
      </Container>
    </>
  );
};

export default ProductListCards;
