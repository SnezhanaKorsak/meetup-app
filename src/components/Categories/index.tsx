import React from 'react';

import Filter from '../Filter';
import Sorting from '../Sorting';

import { CategoriesContainer } from './styled';

const Categories = () => {
  return (
    <CategoriesContainer>
      <Filter />
      <Sorting />
    </CategoriesContainer>
  );
};

export default Categories;
