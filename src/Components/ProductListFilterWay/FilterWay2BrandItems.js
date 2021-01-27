import React, { useState } from 'react';
import styled from '@emotion/styled';
import { brandItems } from './AsideItems/brandItems';

//-----------------------style---------------------------//

//-----------------------component---------------------------//
const ProductListFWSearchInput = (props) => {
  //---------------------state & props-----------------------//
  const { setFilterBrand } = props;
  return (
    <>
      {brandItems.little_headers.map((item, index) => (
        <li key={index} onClick={() => setFilterBrand(item[1])}>
          {item[0]}
        </li>
      ))}
    </>
  );
};
export default ProductListFWSearchInput;
