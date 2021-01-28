import React from 'react';
// import React, { useState } from 'react';
//-------------------------style-------------------------//

//-----------------------component----------------------//
function FilterWay4CheckBoxes(props) {
  const { itemA, big_header, filterCondition, setFilterCondition } = props;
  // const [currentChecked, setCurrentChecked] = useState('');

  const onChangeFilterCondition = (key) => {
    setFilterCondition({
      ...filterCondition,
      [key[0]]: {
        ...filterCondition[key[0]],
        [key[1]]: !!!filterCondition[key[0]][key[1]],
      },
    });
  };

  return (
    <>
      {itemA.little_headers.map((item, index) => (
        <li key={index}>
          <label
            onClick={() => {
              setFilterCondition({});
              onChangeFilterCondition([big_header, item]);
            }}
          >
            <input
              type="checkbox"
              value={item}
              // defaultChecked={filterCondition[big_header][item]}
              // onChange={(e) => setCurrentChecked(e.target.checked)}
            />
            {item}
          </label>
        </li>
      ))}
    </>
  );
}
export default FilterWay4CheckBoxes;
