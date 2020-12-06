import React, { useState, useEffect } from 'react';
//-------------------引入樣式套件-----------------------//
import './HomePage.scss';
import styled from '@emotion/styled';

//--------------------引入子元件-----------------------//
import ProductListHeader from '../../Components/ProductListHeader';

import ProductListFilterWay from '../../Components/ProductListFilterWay';

import ProductListSearchBar from '../../Components/ProductListSearchBar';
import ProductListSortByPrice from '../../Components/ProductListSortByPrice';
import ProductListCards from '../../Components/ProductListCards';
import ProductListPageBar from '../../Components/ProductListPageBar';

import ProductFooter from '../../Components/ProductFooter';

function HomePage(props) {
  //商品資料的狀態
  const [productData, setProductData] = useState([]);
  //過濾品牌
  const [viewFilter, setViewFilter] = useState('');
  //過濾條件的勾選狀態
  const [filterCondition, setFilterCondition] = useState({
    product_HDD: {
      '1TB SSD': false,
      '56G SSD': false,
      '512G SSD': false,
    },
    product_CPU: { i5: false, i7: false },
    product_DRAM: { '8G': false, '16G': false },
    product_battery: {
      '25-30wh': false,
      '40-49wh': false,
      '50-59wh': false,
      '60-69wh': false,
      '70-79wh': false,
    },
    product_weight: {
      '1kg以下(不含1kg)': false,
      '1.0-1.19kg': false,
      '1.2-1.39kg': false,
      '1.4-1.59kg': false,
      '1.6kg以上': false,
    },
  });

  //--------------------樣式元件------------------------//

  //包Header、Wrap
  const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto 0 auto;
  `;

  //包ProductListSearchBar
  const Row1 = styled.div`
    display: flex;
    justify-content: center;
  `;

  //包Main、Aside
  const Row2 = styled.div`
    display: flex;｀
  `;

  //控制商品清單的寬度比例
  const Main = styled.main`
    width: 75%;
  `;
  //控制側欄的寬度比例
  const Aside = styled.aside`
    width: 25%;
    margin-right: 20px;
    background-color: #aaf;
    box-sizing: border-box;
  `;

  //取得商品資料
  async function getDataFromServer() {
    const url = 'http://35.194.203.197/test.php';
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    console.log('首次讀取商品資料表', data);
    setProductData(data);
  }

  // componentDidMount，一掛載就GET會員資料表
  useEffect(() => {
    getDataFromServer();
    console.log('一掛載就讀取商品資料表');
  }, []);

  return (
    <>
      <Container>
        {/* 頁頭，開始 */}
        <ProductListHeader />
        {/* 頁頭，結束 */}

        {/* <div className="container-fluid d-flex justify-content-center"> */}

        {/* 搜尋列，開始 */}
        <Row1>
          {/* <Main> */}
          <ProductListSearchBar />
          {/* </Main> */}
        </Row1>
        {/* 搜尋列，結束 */}

        {/* 篩選方式與商品列表，開始 */}
        <Row2>
          <Aside>
            <ProductListFilterWay
              setViewFilter={setViewFilter}
              filterCondition={filterCondition}
              setFilterCondition={setFilterCondition}
            />
          </Aside>
          <Main>
            <ProductListSortByPrice
              productData={productData}
              setProductData={setProductData}
            />
            <ProductListCards
              productData={productData}
              viewFilter={viewFilter}
              filterCondition={filterCondition}
            />
            <ProductListPageBar />
          </Main>
        </Row2>
        {/* 篩選方式與商品列表，結束 */}
        {/* </div> */}
      </Container>

      {/* 頁尾，開始 */}
      <ProductFooter />
      {/* 頁尾，結束 */}
    </>
  );
}
export default HomePage;
