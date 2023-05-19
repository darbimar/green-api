import React, { createContext, useState } from 'react';

import './scss/app.scss';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Sign from './pages/Sign';

export const UserContext = createContext({});


function App() {
  const [contacts, setContacts] = useState([]);
  const [activeContact, setActiveContact] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');


  return (
    <UserContext.Provider value={{ idInstance, apiTokenInstance, showForm, contacts, activeContact, setIdInstance, setApiTokenInstance, setShowForm, setContacts, setActiveContact }}>
      <Routes>
        <Route path='' element={<Sign />}> </Route>
        <Route path='chat' element={<Main />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;