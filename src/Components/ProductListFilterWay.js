import React from 'react';
import styled from '@emotion/styled';

const Ul = styled.ul`
  ${'' /* display: none; */}
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProductListFilterWay = (props) => {
  const { setViewFilter } = props;
  //   setWeatherElement((prevState) => ({
  //     ...prevState,
  //     isLoading: true,
  //   }));

  const filterWayColumn = [
    {
      big_header: '硬碟',
      little_headers: ['1TB SSD', '56G SSD', '512G SSD'],
    },
    {
      big_header: '處理器',
      little_headers: ['i5', 'i7'],
    },
    {
      big_header: '記憶體',
      little_headers: ['16G', '16G'],
    },
    {
      big_header: '重量',
      little_headers: [
        '1.1-1.29kg',
        '1.3-1.39kg',
        '1.4-1.5kg',
        '1.7-1.79kg',
        '1kg以下',
      ],
    },
    {
      big_header: '電池容量',
      little_headers: ['25-30wh', '40-49wh', '50-59wh', '60-69wh', '70-79wh'],
    },
  ];

  return (
    <>
      <section>
        <h4 id="filter_way">篩選方式</h4>
        <hr />
        <h4 className="filter_ul_1 d-flex justify-content-between">
          <span>系列</span>
        </h4>
        <Ul className="filter_ul_2">
          <li onClick={() => setViewFilter('')}>所有</li>
          <li onClick={() => setViewFilter('ASUS')}>ASUS 華碩</li>
          <li onClick={() => setViewFilter('acer')}>acer 宏碁</li>
          <li onClick={() => setViewFilter('Fujitsu')}>Fujitsu 富士通</li>
          <li onClick={() => setViewFilter('LG')}>LG</li>
          <li onClick={() => setViewFilter('HP')}>HP</li>
        </Ul>
        <hr />
        {filterWayColumn.map((item, index) => {
          return (
            <>
              <h4 className="filter_ul_1">
                <span>{item.big_header}</span>
              </h4>
              <Ul className="filter_ul_2">
                {item.little_headers.map((item, index) => (
                  <li>
                    <label>
                      <input type="checkbox" />
                      {item}
                    </label>
                  </li>
                ))}
              </Ul>
              <hr />
            </>
          );
        })}

        {/* <h4 className="filter_ul_1">
          <span>硬碟</span>
        </h4>
        <Ul className="filter_ul_2">
          <li>
            <label>
              <input type="checkbox" /> 1TB SSD
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 56G SSD
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 512G SSD
            </label>
          </li>
        </Ul>
        <hr />
        <h4 className="filter_ul_1">
          <span>處理器</span>
        </h4>
        <Ul className="filter_ul_2">
          <li>
            <label>
              <input type="checkbox" /> i5
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> i7
            </label>
          </li>
        </Ul>
        <hr />
        <h4 className="filter_ul_1">
          <span>記憶體</span>
        </h4>
        <Ul className="filter_ul_2">
          <li>
            <label>
              <input type="checkbox" /> 16G
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 8G
            </label>
          </li>
        </Ul>
        <hr />
        <h4 className="filter_ul_1">
          <span>重量</span>
        </h4>
        <Ul className="filter_ul_2">
          <li>
            <label>
              <input type="checkbox" /> 1.1-1.29kg
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 1.3-1.39kg
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 1.4-1.5kg
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 1.7-1.79kg
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 1kg以下
            </label>
          </li>
        </Ul>
        <hr />
        <h4 className="filter_ul_1">
          <span>電池容量</span>
        </h4>
        <Ul className="filter_ul_2">
          <li>
            <label>
              <input type="checkbox" /> 25-30wh
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 40-49wh
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 50-59wh
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 60-69wh
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> 70-79wh
            </label>
          </li>
        </Ul>
        <hr /> */}
        <h4 className="clear_filter_condition">
          清除篩選條件 <span>X</span>{' '}
        </h4>
      </section>
    </>
  );
};

export default ProductListFilterWay;
