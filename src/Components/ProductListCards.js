import React from 'react';
import styled from '@emotion/styled';

//樣式
const Container = styled.div`
  background-color: rgb(144, 151, 151);
`;

const ProductCard = styled.div`
  ${({ index }) => index};
  background-color: #faf;
  width: 31%;
  margin: 5px;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
`;

const ProductListCards = (props) => {
  const { productData, viewFilter, filterCondition } = props;
  return (
    <>
      <Container>
        {productData.map((item, index) => {
          //針對品牌做篩選的流程控制
          if (viewFilter === 'ASUS 華碩' && item.product_brand !== 'ASUS')
            return <></>;
          if (viewFilter === 'acer 宏碁' && item.product_brand !== 'acer')
            return <></>;
          if (
            viewFilter === 'Fujitsu 富士通' &&
            item.product_brand !== 'Fujitsu'
          )
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

          if (
            Object.values(filterCondition.product_HDD).includes(true) &&
            !filterCondition.product_HDD[item.product_HDD]
          )
            return <></>;
          if (
            Object.values(filterCondition.product_CPU).includes(true) &&
            !filterCondition.product_CPU[item.product_CPU]
          )
            return <></>;

          if (
            Object.values(filterCondition.product_DRAM).includes(true) &&
            !filterCondition.product_DRAM[item.product_DRAM]
          )
            return <></>;
          if (
            Object.values(filterCondition.product_weight).includes(true) &&
            !filterCondition.product_weight[item.product_weight]
          )
            return <></>;
          if (
            Object.values(filterCondition.product_battery).includes(true) &&
            !filterCondition.product_battery[item.product_battery]
          )
            return <></>;

          return (
            <ProductCard key={item.product_id}>
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
