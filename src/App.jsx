import React from 'react';
import { UserProvider } from './components/UserContext';
import {MainComponent} from './components/MainComponent';
import { Header } from './components/Header';
import { Posts } from './components/posts';



function App() {
  return (
    <UserProvider>
      <Header />
      <MainComponent />
      <Posts />  
    </UserProvider>
  );
}

export default App;

