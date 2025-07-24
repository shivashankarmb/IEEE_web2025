import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately when route changes
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediate scroll
    scrollToTop();

    // Backup scroll after a brief delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      scrollToTop();
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
