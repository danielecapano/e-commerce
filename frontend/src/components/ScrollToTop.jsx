import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolla in cima alla pagina
  }, [location]); // Effettua lo scroll ogni volta che cambia la rotta

  return null;
};

export default ScrollToTop;
