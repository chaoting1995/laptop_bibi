import React from 'react';
import { brandItems } from './AsideItems/brandItems';

//-----------------------style---------------------------//

//-----------------------component---------------------------//
const FilterWay2BrandItems = (props) => {
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
export default FilterWay2BrandItems;
