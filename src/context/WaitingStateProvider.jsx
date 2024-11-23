import React, { createContext, useState } from 'react';

const WaitingStateContext = createContext();

const WaitingStateProvider = ({ children }) => {
  const [waitingState, setWaitingState] = useState(false);

  const value = {
    waitingState,
    setWaitingState,
  };

  return (
    <WaitingStateContext.Provider value={value}>
      {children}
    </WaitingStateContext.Provider>
  );
};

export { WaitingStateProvider, WaitingStateContext };
