import React, { useState, useEffect, useCallback } from 'react';
import { getProductData } from '../utils/getProductData';
import { itemsState } from '../Components/ProductListFilterWay/AsideItems/otherItems';
//-------------------匯入樣式套件-----------------------//
import './HomePage.scss';
import styled from '@emotion/styled';

//--------------------匯入子元件-----------------------//
// 商品清單-頁首
import ProductListHeader from '../Components/ProductListHeader';
// 商品清單-側欄(篩選欄)
import ProductListFilterWay from '../Components/ProductListFilterWay';
// 商品清單-待比較清單
import ProductListCompareBar from '../Components/ProductListCompareBar';
// 商品清單-價格排序功能列
import ProductListSortByPrice from '../Components/ProductListSortByPrice';
// 商品清單-商品資訊卡
import ProductListCards from '../Components/ProductListCards';
// 商品清單-頁面選擇功能列
import ProductListPageBar from '../Components/ProductListPageBar';
// 商品清單-頁尾
import ProductFooter from '../Components/ProductFooter';
//--------------------style------------------------//
//包Header、Wrap
const Container = styled.div`
  width: 1070px;
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
  ${'' /* background-color: #aaf; */}
  box-sizing: border-box;
`;

//--------------------component-----------------------//
function HomePage(props) {
  //--------------------建立狀態-----------------------//
  //商品資料
  const [productData, setProductData] = useState([10000, 80000]);
  //搜尋品牌或型號
  const [search, setSearch] = useState('');
  //篩選品牌
  const [filterBrand, setFilterBrand] = useState(-1);
  //價格篩選
  const [priceRange, setPriceRange] = useState([]);
  //篩選條件的勾選狀態
  const [filterCondition, setFilterCondition] = useState(itemsState);
  //價格排序
  const [sort, setSort] = useState(0);
  // //清空篩選條件
  // const [queryReset, setQueryReset] = useState(0);

  //--------------------取得商品資料------------------------//
  const getProductDataInSetState = useCallback(async () => {
    const data = await getProductData({
      search,
      filterBrand,
      frontPrice: priceRange[0],
      backPrice: priceRange[1],
      filterCondition,
      sort,
    });
    setProductData(data);
    // console.log('取商品資料', data);
  }, [search, filterBrand, priceRange, sort, filterCondition]);
  // componentDidMount，一掛載就GET資料
  useEffect(() => {
    getProductDataInSetState();
  }, [getProductDataInSetState]);

  //--------------------------JSX--------------------------//
  return (
    <>
      <Container>
        {/* 頁首 */}
        <ProductListHeader />
        {/* 待比較清單 */}
        <Row1>
          <ProductListCompareBar />
        </Row1>
        <Row2>
          {/* 篩選方式 */}
          <Aside>
            <ProductListFilterWay
              setSearch={setSearch}
              setFilterBrand={setFilterBrand}
              filterBrand={filterBrand}
              setPriceRange={setPriceRange}
              filterCondition={filterCondition}
              setFilterCondition={setFilterCondition}
            />
          </Aside>
          {/* 價格排序功能列 */}
          <Main>
            <ProductListSortByPrice
              sort={sort}
              setSort={setSort}
              productQuantity={productData.length}
            />
            {/* 商品列表 */}
            <ProductListCards productData={productData} />
            {/* 頁數選擇列 */}
            <ProductListPageBar />
          </Main>
        </Row2>
      </Container>
      {/* 頁尾 */}
      <ProductFooter />
    </>
  );
}
export default HomePage;
