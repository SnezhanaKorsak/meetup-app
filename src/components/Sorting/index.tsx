import React, { ChangeEvent, useState } from 'react';

import Toggle from 'common/Toggle';

import { SortButton, Select, SelectedSort } from './styled';
import { SortingProps } from './types';

const Sorting: React.FC<SortingProps> = ({ sortType, setSortType }) => {
  const [isToggle, setIsToggle] = useState(false);

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.currentTarget.value);
    setIsToggle(false);
  };

  return (
    <SelectedSort>
      <SortButton>
        {sortType}
        <Toggle isToggle={isToggle} setIsToggle={setIsToggle} />
      </SortButton>
      {isToggle && (
        <Select onChange={selectChangeHandler}>
          <option>Please Select...</option>
          <option>Title (ASC)</option>
          <option>Title (DESC)</option>
          <option>Time (ASC)</option>
          <option>Time (DESC)</option>
        </Select>
      )}
    </SelectedSort>
  );
};

export default Sorting;
