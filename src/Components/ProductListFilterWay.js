import React from 'react';
import styled from '@emotion/styled';

const Ul = styled.ul`
  ${'' /* display: none; */}
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProductListFilterWay = (props) => {
  const { setViewFilter, filterCondition, setFilterCondition } = props;
  //   setWeatherElement((prevState) => ({
  //     ...prevState,
  //     isLoading: true,
  //   }));

  //整理成陣列的欄位名稱
  const filterWayBrand = [
    {
      big_header: '品牌',
      little_headers: [
        '所有品牌',
        'ASUS 華碩',
        'acer 宏碁',
        'Fujitsu 富士通',
        'LG',
        'HP',
      ],
    },
  ];
  const filterWayColumn = [
    {
      big_header: ['價格', 'product_price'],
      little_headers: [],
    },
    {
      big_header: ['硬碟', 'product_HDD'],
      little_headers: ['1TB SSD', '256G SSD', '512G SSD'],
    },
    {
      big_header: ['處理器', 'product_CPU'],
      little_headers: ['i5', 'i7'],
    },
    {
      big_header: ['記憶體', 'product_DRAM'],
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

  return (
    <>
      <section>
        <h4 id="filter_way">篩選方式</h4>
        <hr />
        <h4 className="filter_ul_1 d-flex justify-content-between">
          <span>品牌</span>
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

        {filterWayColumn.map((item, index) => {
          const currentBigHeader = item.big_header;
          return (
            <div key={index}>
              <h4 className="filter_ul_1">
                <span>{item.big_header[0]}</span>
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
