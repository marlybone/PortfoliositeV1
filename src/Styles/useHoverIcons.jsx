import { useRef, useEffect } from 'react';

const useHoverIcons = selector => {
  const icons = useRef(null);

  useEffect(() => {
    icons.current = document.querySelectorAll(selector);

    icons.current.forEach(icon => {
      icon.addEventListener('mouseover', () => {
        icon.style.top = '-3px';
        icon.style.color = 'teal';
      });
      icon.addEventListener('mouseout', () => {
      icon.style.top = '0px';
      icon.style.color = ''
      });
    });
    return () => {
      icons.current.forEach(icon => {
        icon.removeEventListener('mouseover', () => {
          icon.style.top = '-3px';
          icon.style.color = 'teal';
        });
        icon.removeEventListener('mouseout', () => {
          icon.style.top = '0px';
          icon.style.collor = '';
        });
      });
    };
  }, [selector]);
};



export default useHoverIcons;