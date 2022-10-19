import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'components/pages/Home';
import AddMeetup from 'components/pages/AddMeetup';
import Authorization from './components/pages/authorization';

import { PageLayout } from 'components/layouts';
import { ADD_MEETUP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './constants';
import RegistrationForm from './components/pages/authorization/RegistrationForm';

const App = () => {
  return (
    <PageLayout>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={ADD_MEETUP_ROUTE} element={<AddMeetup />} />
        <Route path={LOGIN_ROUTE} element={<Authorization />} />
        <Route path={REGISTRATION_ROUTE} element={<RegistrationForm />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
