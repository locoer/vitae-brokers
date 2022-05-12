import { useState, useEffect } from "react"

export const useOnScreen = (ref, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  
  return isIntersecting;
}

export const useWindowDimensions = () => {
  
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const useClickAfuera = (ref, func=()=>{console.log("cli afuera")}) => {
  
  //Función que revisa si se hizo click afuera del elemento enviado y corre el callback si se hizo click afuera
  const handleClickOutside = (event) => {
    if (ref?.current && !ref.current.contains(event.target)) {
      func()
    }
  }

  useEffect(() => {
    //Quita la función del click si el elemento ref es null y sino Bindea la función al event listener
    ref === null ? document.removeEventListener("mousedown", handleClickOutside) : document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return null
}