import { createContext, useEffect } from 'react';

export const AppContext = createContext({});

const useOnBlur = (ref, handler) => {
  useEffect(() => {
    const el = ref?.current;
    const listener = (event) => {
      // Do nothing if blur ref's element or descendent elements
      if (!el || el.contains(event.target)) {
        return;
      }
      handler(event);
    };

    if (el) {
      document.addEventListener('focusin', listener);
    }

    return () => {
      if (el) {
        document.removeEventListener('focusin', listener);
      }
    };
  }, [ref, handler]);
};

export default useOnBlur;
