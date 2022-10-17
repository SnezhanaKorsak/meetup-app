import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'components/pages/Home';
import AddMeetup from 'components/pages/AddMeetup';

import { PageLayout } from 'components/layouts';
import { ADD_MEETUP_ROUTE, LOGIN_ROUTE } from './constants';

const App = () => {
  return (
    <PageLayout>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={ADD_MEETUP_ROUTE} element={<AddMeetup />} />
        {/* <Route path={LOGIN_ROUTE} element={<SettingsFC/>}/>*/}
      </Routes>
    </PageLayout>
  );
};

export default App;
