import React from 'react';
import { useUser } from './UserContext';

export const MainComponent = () => {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <p>Welcome {user.username}!</p>
      ) : (
        <div>
          <p>Please Login</p>
        </div>
      )}
    </div>
  );
};


