import React from 'react';
import styled from '@emotion/styled';
import { otherItems } from './ProductListFilterWay/AsideItems/otherItems';
//-----------------------匯入子元件---------------------------//
import SearchInput from './ProductListFilterWay/FilterWay1SearchInput';
import BrandItems from './ProductListFilterWay/FilterWay2BrandItems';
import PriceSlider from './ProductListFilterWay/FilterWay3PriceSlider';
import CheckBoxes from './ProductListFilterWay/FilterWay4CheckBoxes';
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
        {otherItems.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="filter_ul_1">
                <FWSmallHeader>{item.big_header[0]}</FWSmallHeader>
              </h4>
              <Ul className="filter_ul_2">
                <CheckBoxes
                  itemA={item}
                  big_header={item.big_header[1]}
                  {...props}
                />
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
