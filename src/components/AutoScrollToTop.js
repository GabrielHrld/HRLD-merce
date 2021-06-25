import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoScrollToTop = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return null;
};

export default AutoScrollToTop;
