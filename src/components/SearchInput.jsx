import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { topAlbumsAction, topAlbumsSelector } from '../features/topAlbums/slice';

function SearchInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleOnChange = e => {
    setValue(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (value.length <= 2) return;

    const { searchAlbum } = topAlbumsAction;

    dispatch(searchAlbum(value));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type='text' placeholder='Search' value={value} onChange={handleOnChange}/>
      <button onClick={handleOnSubmit}>Find</button>
    </form>
  );
}

export default SearchInput;

