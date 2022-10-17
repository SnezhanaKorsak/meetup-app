import React, { ChangeEvent, useState } from 'react';

import Toggle from 'common/Toggle';

import { SortButton, Select, SelectedSort } from './styled';

const Sorting = () => {
  const [filterValue, setFilterValue] = useState('No sorting');
  const [isToggle, setIsToggle] = useState(false);

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
    setFilterValue(event.currentTarget.value);
    setIsToggle(false);
  };

  return (
    <SelectedSort>
      <SortButton>
        {filterValue}
        <Toggle isToggle={isToggle} setIsToggle={setIsToggle} />
      </SortButton>
      {isToggle && (
        <Select onChange={selectChangeHandler}>
          <option>Please Select...</option>
          <option>Title (ASC)</option>
          <option>Title (DESC)</option>
          <option>Date (ASC)</option>
          <option>Date (DESC)</option>
        </Select>
      )}
    </SelectedSort>
  );
};

export default Sorting;
