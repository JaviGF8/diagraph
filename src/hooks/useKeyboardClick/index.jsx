import { createContext, useEffect } from 'react';

export const AppContext = createContext({});

const useKeyboardClick = (ref, events) => {
  useEffect(() => {
    const el = ref?.current;
    const listener = (event) => {
      if (el && el.contains(event.target)) {
        switch (event.key) {
          case 'ArrowRight':
            if (events.onClickRight) {
              events.onClickRight(event);
            }
            break;
          case 'ArrowLeft':
            if (events.onClickLeft) {
              events.onClickLeft(event);
            }
            break;
          case 'ArrowUp':
            if (events.onClickUp) {
              events.onClickUp(event);
            }
            break;
          case 'ArrowDown':
            if (events.onClickDown) {
              events.onClickDown(event);
            }
            break;
          case 'Enter':
            if (events.onClickEnter) {
              events.onClickEnter(event);
            }
            break;
          case 'Escape':
            if (events.onClickEscape) {
              events.onClickEscape(event);
            }
            break;
          default:
            break;
        }
      }
    };
    if (el) {
      el.addEventListener('keydown', listener);
    }

    return () => {
      if (el) {
        el.removeEventListener('keydown', listener);
      }
    };
  }, [ref, events]);
};

export default useKeyboardClick;
