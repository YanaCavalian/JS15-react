import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';

export const Header = () => {
  const userContext = useUser();
  const [loggedIn, setLoggedIn] = useState(Boolean(userContext.user));

  useEffect(() => {
    setLoggedIn(Boolean(userContext.user));
  }, [userContext.user]);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'kminchelle',
          password: '0lelplR',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        userContext.loginUser({ token: data.token, user: data });
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <header>
      <button
        onClick={handleLogin}
        style={{
          width: '70px',
          height: '20px',
          backgroundColor: 'green',
          color: 'white',
          cursor: 'pointer',
          display: loggedIn ? 'none' : 'block',
        }}
      >
        Login
      </button>
    </header>
  );
};
