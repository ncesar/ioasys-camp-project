import { createContext, useState } from 'react';

const initialState = 'Nada pesquisado';

export const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [word, setWord] = useState(initialState);
  return (
    <Context.Provider value={[word, setWord]}>{children}</Context.Provider>
  );
};
