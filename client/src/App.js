// src/App.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: "http://localhost:3000/" })}>
          Log out
        </button>
      </div>
    );
  } else {
    return (
    <div>
      You're logged out. Please log in
      <button onClick={loginWithRedirect}>Log in</button>
    </div>
    );
  }
}

export default App;