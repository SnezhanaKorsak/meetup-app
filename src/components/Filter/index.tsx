import React, { ChangeEvent, useState } from 'react';

import Toggle from 'common/Toggle';

import { FilterButton, Select, SelectedFilter } from './styled';
import { FilterProps } from './types';

const Filter: React.FC<FilterProps> = ({ filterType, setFilterType }) => {
  const [isToggle, setIsToggle] = useState(false);

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterType(event.currentTarget.value);
    setIsToggle(false);
  };

  return (
    <SelectedFilter>
      <FilterButton>
        {filterType}
        <Toggle isToggle={isToggle} setIsToggle={setIsToggle} />
      </FilterButton>
      {isToggle && (
        <Select onChange={selectChangeHandler}>
          <option>Please Select...</option>
          <option>Any type</option>
          <option>Online</option>
        </Select>
      )}
    </SelectedFilter>
  );
};

export default Filter;
