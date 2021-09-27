import { useEffect, useState } from 'react';

const useDelayUnmount = (visible, delay) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let time: any = null;
    if (visible && !shouldRender) {
      setShouldRender(true);
    }

    if (!visible && shouldRender) {
      time = setTimeout(() => {
        setShouldRender(false);
      }, delay);
    }

    return () => {
      clearTimeout(time);
    };
  }, [visible]);

  return shouldRender;
};

export default useDelayUnmount;
