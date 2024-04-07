// MyContextProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [value, setValue] = useState({
totalprice:0,
totalqt:0

  });

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
