import React from 'react';
import styled from '@emotion/styled';
import { itemsState } from './AsideItems/otherItems';

//-----------------------style---------------------------//
const QueryResetWrap = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    color: gray;
  }
  span {
    font-size: 14px;
    font-weight: 650;
  }
`;
//-----------------------component---------------------------//
const FilterWay5QueryReset = (props) => {
  //---------------------state & props-----------------------//
  const {
    setSearch,
    setFilterBrand,
    setPriceRange,
    setFilterCondition,
  } = props;

  const handleQueryReset = () => {
    setSearch('');
    setFilterBrand(-1);
    setPriceRange([10000, 80000]);
    setFilterCondition(itemsState);
  };
  return (
    <QueryResetWrap onClick={handleQueryReset}>
      清除篩選條件 <span>X</span>
    </QueryResetWrap>
  );
};
export default FilterWay5QueryReset;
