import React, { useState } from 'react';
import styled from '@emotion/styled';

//-----------------------匯入子元件---------------------------//
import SearchInput from './ProductListFilterWay/FilterWay1SearchInput';
import BrandItems from './ProductListFilterWay/FilterWay2BrandItems';
import PriceSlider from './ProductListFilterWay/FilterWay3PriceSlider';
// import $ from 'jquery';

//折疊面板的引入
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AccordionA from '@material-ui/core/Accordion';
import AccordionDetailsA from '@material-ui/core/AccordionDetails';
import AccordionSummaryA from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//-----------------------style---------------------------//
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
    margin-bottom: 5px;
  }
  li:hover {
    color: gray;
  }
  input[type='checkbox'] {
    margin-right: 5px;
  }
`;

//折疊面板的樣式設定
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '-9px 0',
    padding: '0',
    width: '100%',
  },
  heading: {
    margin: '-10px 0',
    padding: '0',
  },
}));

const Accordion = withStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    // borderBottom: '1px solid rgba(0, 0, 0, .2)',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: '0',
    },
  },
  expanded: {},
})(AccordionA);

const AccordionSummary = withStyles({
  root: {
    padding: '0',
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(AccordionSummaryA);

const AccordionDetails = withStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
    padding: '0 0 10px 0',
  },
}))(AccordionDetailsA);

//-----------------------component--------------------------//
const ProductListFilterWay = (props) => {
  //-----------------------props--------------------------//
  const {
    filterCondition,
    setFilterCondition,
    setFrontPrice,
    setBackPrice,
  } = props;

  const filterWayColumn = [
    // {
    //   big_header: ['價格', 'product_price'],
    //   little_headers: [],
    // },
    {
      big_header: ['硬碟', 'product_storage'],
      little_headers: ['1 TB  SSD', '256 GB  SSD', '512 GB  SSD'],
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

  // // 篩選方式的收闔清單
  // useEffect(() => {
  //   $('.filter_ul_1').on('click', function () {
  //     $(this).next().slideToggle('fast');
  //   });
  // }, []);

  //折疊面板
  const classes = useStyles();

  //------------------------JSX-------------------------//
  return (
    <>
      <section>
        {/* <FWBigHeader>篩選方式</FWBigHeader>
        <hr /> */}
        <SearchInput {...props} />
        <hr />
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                <h4 className="filter_ul_1 d-flex justify-content-between">
                  <FWSmallHeader>品牌</FWSmallHeader>
                </h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Ul>
                  <BrandItems {...props} />
                </Ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <hr />
        {/* <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}> */}
        <h4 className="filter_ul_1 d-flex justify-content-between">
          <FWSmallHeader>價格</FWSmallHeader>
        </h4>
        {/* </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography> */}
        <Ul className="filter_ul_2">
          <PriceSlider {...props} />
        </Ul>
        {/* </Typography>
            </AccordionDetails>
          </Accordion> */}
        {/* </div> */}
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
