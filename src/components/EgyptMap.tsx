import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const EgyptMap: React.FC = () => {
  const egyptBounds: [[number, number], [number, number]] = [
    [22.0, 24.7],
    [31.7, 36.9],
  ];
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full sm:w-3/4 lg:w-1/2 h-[250px] sm:h-[400px] lg:h-[500px] z-0 mb-10">
        <h1 className="font-bold font-dancing text-primary text-center my-5 text-5xl">
          Discover Egypt
        </h1>
        <MapContainer
          center={[26.8206, 30.8025]}
          zoom={isMobile ? 5 : 6}
          scrollWheelZoom={false}
          className="w-full h-full"
          maxBounds={egyptBounds}
          minZoom={isMobile ? 5 : 6}
          dragging={isMobile ? false : true}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=""
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default EgyptMap;
