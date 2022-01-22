import { useContext, createContext } from 'react';

export const AppContext = createContext({});

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must exist to call useAppContext');
  }
  return context;
};

export default useAppContext;
