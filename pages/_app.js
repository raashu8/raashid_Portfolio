import "../styles/globals.css";
import { useEffect, useLayoutEffect, useState } from "react";
import Loader from "Components/loader";
import { ThemeProvider, useTheme } from "utils/themeContext";

export default function App({ Component, pageProps }) {
  const [mouse, setMouse] = useState({ x: 300, y: 300 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();


  useLayoutEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const speed = 0.1;

  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const updatePosition = () => {
      setPos((prevPos) => ({
        x: prevPos.x + (mouse.x - prevPos.x) * speed,
        y: prevPos.y + (mouse.y - prevPos.y) * speed,
      }));
      cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };

    const updateCoordinates = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCoordinates);

    function loop() {
      updatePosition();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
    };
  }, [pos.x, pos.y, mouse.x, mouse.y]);

  const Moder =
    typeof window !== "undefined" ? sessionStorage.getItem("Mode") : "Light";

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <div id="cursor">
        <div className="cursor--inner"></div>
      </div>
      <ThemeProvider>
        <div className={isDarkMode ? "dark" : "light"}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      {/* <Component {...pageProps} /> */}
      {/* <style jsx global>{`
        body {
          background: ${Moder === "Dark" ? "darkslategray" : "antiquewhite"};
        }
      `}</style> */}
    </>
  );
}
