import React from 'react';
import Wines from '../tracks/Wines';
import Search from '../tracks/Search';

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Wines />
    </React.Fragment>
  );
};

export default Index;
