import React from 'react';

import Filter from 'components/Filter';
import Sorting from 'components/Sorting';
import ResetButton from 'common/ResetButton';

import { CategoriesContainer } from './styled';
import { CategoriesProps } from './types';

const Categories: React.FC<CategoriesProps> = ({
  sortType,
  filterType,
  setSortType,
  setFilterType,
}) => {
  return (
    <CategoriesContainer>
      <Filter filterType={filterType} setFilterType={setFilterType} />
      <Sorting sortType={sortType} setSortType={setSortType} />

      <ResetButton />
    </CategoriesContainer>
  );
};

export default Categories;
