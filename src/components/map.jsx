import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1400
      }}
    >
       {/* Render geographical features on the map */}
      <Geographies
        geography="/features.json"
        fill="#dbdbf4"
        stroke="#fa3737"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-9.142685, 38.736946]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 0.8,
          strokeLinecap: "round"
        }}
      >
         {/* Add text to the annotation */}
        <text x="40" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"I live here"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
