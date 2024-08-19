import React from "react";
import { useLocation, useNavigate } from "react-router";
import { HEADINGS } from "../utils/en";

const Sidebar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  let activeRoute: string;

  location?.pathname === "/charts_maps"
    ? (activeRoute = HEADINGS.MAPS_CHARTS)
    : (activeRoute = HEADINGS.CONTACTS);

  return (
    <div className="h-dvh w-60 bg-blue-500">
      <div className="w-10/12 m-auto mt-10 flex flex-col gap-6 text-xl text-white font-semibold">
        <div
          className={`shadow-md p-2 cursor-pointer rounded-md bg-blue-500 border border-blue-400 transition-all ease-in-out duration-200 ${
            activeRoute === HEADINGS.CONTACTS ? "bg-blue-600" : ""
          }`}
          onClick={() => navigate("/")}
        >
          {HEADINGS.CONTACTS}
        </div>
        <div
          className={`shadow-md p-2 cursor-pointer rounded-md bg-blue-500 border border-blue-400 transition-all ease-in-out duration-200 ${
            activeRoute === HEADINGS.MAPS_CHARTS ? "bg-blue-600" : ""
          }`}
          onClick={() => navigate("/charts_maps")}
        >
          {HEADINGS.MAPS_CHARTS}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

/* ${
            activeRoute === "Contacts" ? "bg-blue-500 border " : ""
          } */
