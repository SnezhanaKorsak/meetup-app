import React, { ChangeEvent, useState } from 'react';

import Toggle from 'common/Toggle';

import { FilterButton, Select, SelectedFilter } from './styled';

const Filter = () => {
  const [filterValue, setFilterValue] = useState('Any type');
  const [isToggle, setIsToggle] = useState(false);

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.currentTarget.value);
    setIsToggle(false);
  };

  return (
    <SelectedFilter>
      <FilterButton>
        {filterValue}
        <Toggle isToggle={isToggle} setIsToggle={setIsToggle} />
      </FilterButton>
      {isToggle && (
        <Select onChange={selectChangeHandler}>
          <option>Please Select...</option>
          <option>Any type</option>
          <option>Online</option>
          <option>Personally</option>
        </Select>
      )}
    </SelectedFilter>
  );
};

export default Filter;
