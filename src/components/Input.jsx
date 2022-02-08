import React, { useState } from 'react';

const Input = ({ showDiv }) => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <h2 data-testid='displaysearch'>{search}</h2>
      <input
        type='text'
        data-testid='searchbar'
        placeholder='Search for something'
        onChange={(e) => setSearch(e.target.value)}
      />

      {showDiv && <p data-testid='showdiv'>My Name is Layobright</p>}
    </div>
  );
};

export default Input;
