import React, { useEffect } from "react"; // Ensure React is imported
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router";

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });

  return (
    <>
      {/* Desktop View */}
      {windowWidth > 640 && (
        <div className="h-dvh w-screen flex flex-col">
          <Navbar isMobile={false} />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 p-4">
              <Outlet />
            </main>
          </div>
        </div>
      )}

      {/* Mobile View */}
      {windowWidth <= 640 && (
        <div className="h-dvh w-screen flex flex-col overflow-hidden">
          <Navbar isMobile={true} />
          <main className="w-11/12 m-auto flex-1 overflow-hidden py-4">
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
