import React from 'react';
import ContentLoader from 'react-content-loader';

import { Container } from './styled';

const MeetupSkeleton = () => {
  return (
    <Container>
      <ContentLoader
        speed={2}
        width={470}
        height={150}
        viewBox='0 0 470 150'
        backgroundColor='#d7d6d6'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='0' rx='10' ry='10' width='150' height='150' />
        <rect x='170' y='0' rx='0' ry='0' width='300' height='20' />
        <rect x='170' y='40' rx='0' ry='0' width='300' height='20' />
        <rect x='170' y='85' rx='0' ry='0' width='300' height='20' />
        <rect x='170' y='130' rx='0' ry='0' width='300' height='20' />
      </ContentLoader>
    </Container>
  );
};

export default MeetupSkeleton;
