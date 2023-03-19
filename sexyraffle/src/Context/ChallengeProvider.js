import React, { useState } from 'react';
import ChallengeContext from './ChallengeContext';

function ChallengeProvider({ children }) {
  const [users, setUsers] = useState([]);
  const saveUsers = (usuario) => {
    setUsers([prevState => ...prevState, usuario]);
  }

  return (
    <ChallengeContext.Provider value={ { users, saveUsers } }>
      {children}
    </ChallengeContext.Provider>
  );
}

export default ChallengeProvider;
