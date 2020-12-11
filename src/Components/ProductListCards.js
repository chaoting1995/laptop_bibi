import React from 'react';
import styled from '@emotion/styled';

//樣式
const Container = styled.div`
  ${'' /* background-color: rgb(144, 151, 151); */}
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;

const ProductCard = styled.div`
  ${({ index }) => index};
  ${'' /* background-color: #faf; */}
  width: 32%;
  margin: 5px;
  cursor: pointer;
  box-sizing: border-box;

  button {
    /* margin: auto; */
    /* text-align: center */
    /* vertical-align: middle */
    margin-top: -10px;
    width: 100%;
    height: 38px;
    border: 1px solid white;
    background-color: #fff;
    border-radius: 5px;
    outline: none;
  }
  button:hover {
    background-color: rgb(243, 243, 243);
  }
  button:active {
    background-color: rgb(218, 218, 218);
  }
`;

const ProductImg = styled.div`
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #fff;
    object-position: center center;
  }
  div {
    width: 100%;
    height: 50px;
    margin: 0;
    padding-top: 15px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    vertical-align: middle;
    transition: 0.5s;
  }
  h1 {
    color: rgb(61, 61, 61);
    font-size: 16px;
  }
  &:hover div {
    transform: translateY(-70px);
  }
`;

const ProductTitle = styled.p`
  font-size: 20px;
  margin-top: 15px;
`;
const ProductPrice = styled.p`
  font-size: 13px;
  margin-top: -8px;
  margin-bottom: 18px;
`;

const ProductListCards = (props) => {
  const { productData, viewFilter, priceRange, filterCondition } = props;
  console.log('priceRange in cards', priceRange);
  return (
    <>
      <Container>
        {productData.map((item, index) => {
          //篩選品牌
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

          //判斷價格是否在篩選範圍的函式
          //const priceInPriceRange = (p) =>
          //p >= priceRange[0] && p <= priceRange[1];
          //篩選價格
          //if (!priceInPriceRange(item.product_price)) return <></>;

          //篩選硬碟
          if (
            Object.values(filterCondition.product_storage).includes(true) &&
            !filterCondition.product_storage[item.product_storage]
          )
            return <></>;
          //篩選處理器
          if (
            Object.values(filterCondition.product_CPU).includes(true) &&
            !filterCondition.product_CPU[item.product_CPU]
          )
            return <></>;
          //篩選記憶體
          if (
            Object.values(filterCondition.product_memory).includes(true) &&
            !filterCondition.product_memory[item.product_memory]
          )
            return <></>;
          //篩選電池
          if (
            Object.values(filterCondition.product_battery).includes(true) &&
            !filterCondition.product_battery[item.product_battery]
          )
            return <></>;

          //重量轉成重量範圍的函式
          const weight2weightRange = (w) => {
            // let w = +w.replace('kg', '');
            // console.log(w);
            if (1 > w) {
              return '1kg以下(不含1kg)';
            } else if (w >= 1.0 && w < 1.2) {
              return '1.0-1.19kg';
            } else if (w >= 1.2 && w < 1.4) {
              return '1.2-1.39kg';
            } else if (w >= 1.4 && w < 1.6) {
              return '1.4-1.59kg';
            } else if (w >= 1.6) {
              return '1.6kg以上';
            } else {
              return '';
            }
          };
          //篩選重量
          if (
            Object.values(filterCondition.product_weight).includes(true) &&
            !filterCondition.product_weight[
              weight2weightRange(item.product_weight)
            ]
          )
            return <></>;
          //秀出篩選後的商品清單
          return (
            <ProductCard key={item.product_id}>
              <ProductImg>
                <img src={item.product_title_image} alt=""></img>
                <div>
                  <h1>快速瀏覽</h1>
                </div>
              </ProductImg>
              <ProductTitle>
                {/* {item.product_brand} <br /> */}
                {item.product_name}
              </ProductTitle>
              <ProductPrice>NT${item.product_price}</ProductPrice>
              <button type="button" class="compare_btn">
                <span class="add">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="currentColor"
                      d="M12.159 7.2h-3.36v-3.36c0-0.442-0.358-0.48-0.8-0.48s-0.8 0.038-0.8 0.48v3.36h-3.359c-0.442 0-0.48 0.358-0.48 0.8s0.038 0.8 0.48 0.8h3.359v3.36c0 0.442 0.358 0.48 0.8 0.48s0.8-0.038 0.8-0.48v-3.36h3.36c0.442 0 0.481-0.358 0.481-0.8s-0.038-0.8-0.481-0.8z"
                    ></path>
                  </svg>
                </span>
              </button>
            </ProductCard>
          );
        })}
      </Container>
    </>
  );
};

export default ProductListCards;
