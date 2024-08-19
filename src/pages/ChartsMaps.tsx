import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import LineChart from "../components/LineChart";
import {
  COVID_COUNTRY_DATA_URL,
  COVID_COUNTRY_HISTORICAL_URL,
} from "../utils/const";

import {
  LOADING_TEXT,
  ERROR_FETCHING_DATA_TEXT,
  LOADING_CHART_TEXT,
  ERROR_FETCHING_CHART_TEXT,
} from "../utils/en";

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const fetchCountryData = async () => {
  const res = await fetch(COVID_COUNTRY_DATA_URL);
  return res.json();
};

const fetchCountryHistoricalData = async (countryCode: any) => {
  const res = await fetch(COVID_COUNTRY_HISTORICAL_URL(countryCode));
  return res.json();
};

const ChartsMaps: React.FC = () => {
  const { data, isLoading, error } = useQuery("countryData", fetchCountryData);

  if (isLoading)
    return (
      <p className="h-full flex justify-center items-center text-2xl">
        {LOADING_TEXT}
      </p>
    );
  if (error) return <p>{ERROR_FETCHING_DATA_TEXT}</p>;

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[20, 0]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {data.map((country: any) => (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon}
          >
            <Popup className="">
              <div className="h-[240px]">
                <strong>{country.country}</strong>
                <br />
                <span>Active: {country.active}</span>
                <br />
                <span>Recovered: {country.recovered}</span>
                <br />
                <span>Deaths: {country.deaths}</span>
                <br />
                <div className="pt-4 w-[240px] sm:w-[300px]">
                  <CountryChart countryCode={country.countryInfo.iso3} />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

const CountryChart: React.FC<{ countryCode: string }> = ({ countryCode }) => {
  const { data, isLoading, error } = useQuery(
    ["countryHistoricalData", countryCode],
    () => fetchCountryHistoricalData(countryCode)
  );

  if (isLoading) return <p>{LOADING_CHART_TEXT}</p>;
  if (error) return <p>{ERROR_FETCHING_CHART_TEXT}</p>;

  const cases = data?.timeline?.cases || {};
  const labels = Object.keys(cases);

  return <LineChart labels={labels} cases={Object.values(cases)} />;
};

export default ChartsMaps;
