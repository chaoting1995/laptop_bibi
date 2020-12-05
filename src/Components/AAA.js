import React, { useState } from 'react';

const AAA = () => {
  const [text, setText] = useState('');
  const [gender, setGender] = useState('male');
  const [like, setLike] = useState({
    male: 'false',
    female: 'false',
  });

  const onChangeText = (e) => setText(e.target.value);
  const onChangeGender = (e) => setGender(e.target.value);
  const onChangeLike = (e) => {
    const key = e.target.value;
    setLike({
      ...like,
      [key]: !like[key],
    });
  };

  // const { text, gender, like } = this.state;

  return (
    <>
      <input type="text" value={text} onChange={onChangeText} />
      <h3>{text}</h3>

      <br />
      <h3>Gender:</h3>
      <label>Male</label>
      <input
        type="radio"
        value="male"
        onChange={onChangeGender}
        checked={gender === 'male'}
      />
      <label>Female</label>
      <input
        type="radio"
        value="female"
        onChange={onChangeGender}
        checked={gender === 'female'}
      />
      <br />

      <h3>Like:</h3>
      <label>Male</label>
      <input
        type="checkbox"
        value="male"
        onChange={onChangeLike}
        checked={like.male}
      />
      <label>Female</label>
      <input
        type="checkbox"
        value="female"
        onChange={onChangeLike}
        checked={like.female}
      />
      {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      <pre>{JSON.stringify(like)}</pre>
    </>
  );
};

export default AAA;
