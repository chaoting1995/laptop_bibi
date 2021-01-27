import React from 'react';
import styled from '@emotion/styled';
import QueueAnim from 'rc-queue-anim';
//樣式
const Container = styled.div`
  ${'' /* background-color: rgb(144, 151, 151); */}
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
  min-height: 360px;
`;

const QueueAnimA = styled(QueueAnim)`
  width: 32%;
  margin: 5px;
`;

const ProductCard = styled.div`
  ${({ index }) => index};
  ${'' /* background-color: #faf; */}

  cursor: pointer;
  box-sizing: border-box;
  margin-top: 15px;
  height: 338px;
  ${'' /* outline: 1px solid red; */}
  position: relative;
  button {
    /* margin: auto; */
    /* text-align: center */
    /* vertical-align: middle */
    margin-top: -10px;
    width: 100%;
    height: 38px;
    border: 0px;
    background-color: #fff;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    span {
      font-size: 15px;
    }
    position: absolute;
    bottom: 0;
  }
  button:hover {
    background-color: rgb(243, 243, 243);
  }
  button:active {
    background-color: rgb(165, 165, 165);
    color: #fff;
  }
`;

const ProductImg = styled.div`
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  height: 170px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #fff;
    object-position: center center;
  }
  div {
    width: 100%;
    height: 50px;
    margin: 0;
    padding-top: 15px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    text-align: center;
    vertical-align: middle;
    transition: 0.5s;
  }
  h1 {
    color: rgb(61, 61, 61);
    font-size: 16px;
  }
  &:hover div {
    transform: translateY(-68px);
  }
`;

const ProductBrand = styled.div`
  font-size: 22px;
  margin-top: 15px;
`;
const ProductType = styled.div`
  font-size: 18px;
  margin-top: 8px;
  ${'' /* height: 40px; */}
`;
const ProductPrice = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 18px;
`;

const ProductListCards = (props) => {
  const { productData, filterCondition } = props;
  return (
    <>
      <Container>
        {productData.map((item, index) => {
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
            <QueueAnimA delay={50} className="queue-simple">
              <ProductCard key={item.product_id}>
                <ProductImg>
                  <img src={item.product_title_image} alt=""></img>
                  <div>
                    <h1>快速瀏覽</h1>
                  </div>
                </ProductImg>
                <ProductBrand>{item.product_brand}</ProductBrand>
                <ProductType>{item.product_name}</ProductType>
                <ProductPrice>NT${item.product_price}</ProductPrice>
                <button type="button" className="compare_btn">
                  <span>+</span>加入比較表
                </button>
              </ProductCard>
            </QueueAnimA>
          );
        })}
      </Container>
    </>
  );
};

export default ProductListCards;
