import { useEffect, useState } from "react";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
function useCheckWindowResize() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const { width, height } = screenSize;
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return { width, height, setScreenSize };
}
export default useCheckWindowResize;
