import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/jason2506/Taiwan.TopoJSON/master/topojson/counties.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projection="geoAzimuthalEqualArea" projectionConfig={{ rotate: [239, -23.5, 0], scale: 8000 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { name } = geo.properties;
                  setTooltipContent(`${name}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#3399FF",
                    outline: "#none"
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
