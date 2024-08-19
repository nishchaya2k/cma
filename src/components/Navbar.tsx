import React from "react";
import { useLocation, useNavigate } from "react-router";
import { HEADINGS } from "../utils/en";

interface Props {
  isMobile: boolean;
}

const Navbar = ({ isMobile }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  let heading: string;

  location?.pathname === "/charts_maps"
    ? (heading = HEADINGS.MAPS_CHARTS)
    : (heading = HEADINGS.CONTACTS);

  return (
    <>
      {!isMobile ? (
        <div className="h-20 w-full bg-blue-500">
          <div className="w-11/12 h-full m-auto flex justify-center items-center text-3xl text-white font-semibold">
            {heading}
          </div>
        </div>
      ) : (
        <div className="h-20 w-full bg-blue-500">
          <div className="w-11/12 h-full m-auto flex justify-start items-center gap-4 text-lg text-white font-semibold">
            <button
              className={`shadow-md p-2 cursor-pointer rounded-md bg-blue-500 border border-blue-400 ${
                heading === HEADINGS.CONTACTS ? "bg-blue-600" : ""
              }`}
              onClick={() => navigate("/")}
            >
              {HEADINGS.CONTACTS}
            </button>
            <button
              className={`shadow-md p-2 cursor-pointer rounded-md bg-blue-500 border border-blue-400 ${
                heading === HEADINGS.MAPS_CHARTS ? "bg-blue-600" : ""
              }`}
              onClick={() => navigate("/charts_maps")}
            >
              {HEADINGS.MAPS_CHARTS}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
