import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from '../../images/search_icon.svg';
// import $ from 'jquery';

//-----------------------style---------------------------//
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
//-----------------------component---------------------------//

const ProductListFWSearchInput = (props) => {
  const { handleSetSearch } = props;
  const [searchText, setSearchText] = useState('');
  // const searchSubmit = (e) => {
  //   let searchText = e.target.closest('.css-1exdyj0').querySelector('input');
  //   setSearch(searchText.value);
  // };

  return (
    <>
      <SearchBar>
        <input
          type="text"
          placeholder="輸入品牌或型號"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          type="button"
          onClick={() => handleSetSearch(searchText)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && searchText) handleSetSearch(searchText);
          }}
        >
          <SearchIcon />
        </button>
      </SearchBar>
    </>
  );
};
export default ProductListFWSearchInput;
