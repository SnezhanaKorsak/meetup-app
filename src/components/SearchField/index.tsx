import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { searchMeetup } from 'state/reducers/meetupReducer';
import { useAppDispatch } from 'hooks/index';

import { Container, SearchButton, SearchInput } from './styled';
import searchIcon from 'assets/images/search.svg';

const SearchField = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.currentTarget.value);

  const onClickHandler = () => {
    dispatch(searchMeetup(searchValue));
    setSearchValue('');
  };

  const onPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClickHandler();
    }
  };

  return (
    <Container>
      <SearchInput value={searchValue} onChange={onChangeHandler} onKeyDown={onPressHandler} />
      <SearchButton onClick={onClickHandler}>
        <img src={searchIcon} alt='search' />
      </SearchButton>
    </Container>
  );
};

export default SearchField;
