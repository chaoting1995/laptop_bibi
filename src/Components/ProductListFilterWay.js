import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ProductListFWPriceSlider from './ProductListFWPriceSlider';
import { ReactComponent as SearchIcon } from '../images/search_icon.svg';
import $ from 'jquery';

// const FWBigHeader = styled.div`
//   font-size: 28px;
//   font-weight: 500;
//   margin-bottom: 20px;
// `;

const FWSmallHeader = styled.div`
  font-size: 17px;
  font-weight: 900;
  padding: 25px 0;
  margin: -20px 0;
  cursor: pointer;
`;

const Ul = styled.ul`
  ${'' /* display: none; */}
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    font-size: 15px;
    line-height: 1.5;
    cursor: pointer;
  }
  li:hover {
    color: gray;
  }
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: -20px;
  input {
    width: 220px;
    height: 40px;
    margin: 20px 0 20px 0;
    padding-left: 15px;
    box-sizing: border-box;
    border: 0px;
    outline: none;
  }
  button {
    width: 40px;
    height: 40px;
    margin: 20px 0 20px 0;
    box-sizing: border-box;
    background-color: #507199;
    border: 0px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
      background-color: #385981;
    }

    }
    svg {
      width: 20px;
      height: 20px;
      margin-left: 3px;
      fill: #fff;
    }
  }
`;

// const SearchI = styled(SearchIcon)`
//   fill: #fff;
// `;
const ProductListFilterWay = (props) => {
  // priceRange, setPriceRange，直接用{...props}傳
  const {
    searchString,
    setSearchString,
    setViewFilter,
    filterCondition,
    setFilterCondition,
    getDataFromServer,
    setPriceStart,
    setPriceEnd,
  } = props;

  const [priceRange, setPriceRange] = useState([]);
  // const [priceRange, setPriceRange] = useState([10000, 80000]);
  //   setWeatherElement((prevState) => ({
  //     ...prevState,
  //     isLoading: true,
  //   }));

  //整理成陣列的欄位名稱
  const filterWayBrand = [
    {
      big_header: '品牌',
      little_headers: [
        '所有',
        'ASUS 華碩',
        'acer 宏碁',
        'Fujitsu 富士通',
        'LG',
        'HP',
      ],
    },
  ];
  const filterWayColumn = [
    // {
    //   big_header: ['價格', 'product_price'],
    //   little_headers: [],
    // },
    {
      big_header: ['硬碟', 'product_storage'],
      little_headers: ['1TB SSD', '256G SSD', '512G SSD'],
    },
    {
      big_header: ['處理器', 'product_CPU'],
      little_headers: ['i5', 'i7'],
    },
    {
      big_header: ['記憶體', 'product_memory'],
      little_headers: ['8G', '16G'],
    },
    {
      big_header: ['重量', 'product_weight'],
      little_headers: [
        '1kg以下(不含1kg)',
        '1.0-1.19kg',
        '1.2-1.39kg',
        '1.4-1.59kg',
        '1.6kg以上',
      ],
    },
    {
      big_header: ['電池容量', 'product_battery'],
      little_headers: ['25-30wh', '40-49wh', '50-59wh', '60-69wh', '70-79wh'],
    },
  ];

  const onChangeFilterCondition = (key) => {
    setFilterCondition({
      ...filterCondition,
      [key[0]]: {
        ...filterCondition[key[0]],
        [key[1]]: !filterCondition[key[0]][key[1]],
      },
    });
  };

  // 篩選方式的收闔清單
  useEffect(() => {
    $('.filter_ul_1').on('click', function () {
      $(this).next().slideToggle('fast');
    });
  }, []);

  return (
    <>
      <section>
        {/* <FWBigHeader>篩選方式</FWBigHeader>
        <hr /> */}
        <SearchBar>
          <input
            type="text"
            placeholder="輸入品牌或型號"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
            autoFocus
          ></input>
          <button type="button" onClick={() => getDataFromServer(searchString)}>
            <SearchIcon />
          </button>
        </SearchBar>

        <hr />
        <h4 className="filter_ul_1 d-flex justify-content-between">
          <FWSmallHeader>品牌</FWSmallHeader>
        </h4>
        <Ul className="filter_ul_2">
          {filterWayBrand[0].little_headers.map((item, index) => {
            return (
              <li key={index} onClick={() => setViewFilter(item)}>
                {item}
              </li>
            );
          })}
        </Ul>
        <hr />

        <h4 className="filter_ul_1 d-flex justify-content-between">
          <FWSmallHeader>價格</FWSmallHeader>
        </h4>
        <Ul className="filter_ul_2">
          <ProductListFWPriceSlider
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            setPriceStart={setPriceStart}
            setPriceEnd={setPriceEnd}
          />
        </Ul>
        {/* <button type="button" onClick={() => setPriceRangeB(priceRange)}>
          aaa
        </button> */}
        <hr />
        {filterWayColumn.map((item, index) => {
          const currentBigHeader = item.big_header;
          return (
            <div key={index}>
              <h4 className="filter_ul_1">
                <FWSmallHeader>{item.big_header[0]}</FWSmallHeader>
              </h4>
              <Ul className="filter_ul_2">
                {item.little_headers.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      onChangeFilterCondition([currentBigHeader[1], item]);
                    }}
                  >
                    <label>
                      <input
                        type="checkbox"
                        // value={item}
                        defaultChecked={
                          filterCondition[currentBigHeader[1]][item]
                        }
                      />
                      {item}
                    </label>
                  </li>
                ))}
              </Ul>
              <hr />
            </div>
          );
        })}
        <h4 className="clear_filter_condition">
          清除篩選條件 <span>X</span>{' '}
        </h4>
      </section>
    </>
  );
};

export default ProductListFilterWay;
