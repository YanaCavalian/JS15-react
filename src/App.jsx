import React from 'react';
import { UserProvider } from './components/UserContext';
import {MainComponent} from './components/MainComponent';
import { Header } from './components/header';


function App() {
  return (
    <UserProvider>
      <Header />
      <MainComponent />
    </UserProvider>
  );
}

export default App;

