import React from 'react';

import { StyledToggle } from './styled';
import { ToggleProps } from './types';

const Toggle: React.FC<ToggleProps> = ({ isToggle, setIsToggle }) => {
  const buttonClickHandler = () => setIsToggle(!isToggle);

  return <StyledToggle onClick={buttonClickHandler}>{isToggle ? '▲' : '▼'}</StyledToggle>;
};

export default Toggle;
