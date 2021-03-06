import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
// for local test
// const geoUrl = "/dashboard-json/counties.json";
// for production
const geoUrl = "https://storageaccountazure88f7.blob.core.windows.net/dashboard-json/counties.json";

const MapChart = ({ setTooltipContent, data }) => {
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
                  const student = data.find(obj => obj.city === name.slice(0,2))?.student.toLocaleString('en');
                  const teacher = data.find(obj => obj.city === name.slice(0,2))?.teacher.toLocaleString('en');
                  const parent = data.find(obj => obj.city === name.slice(0,2))?.parent.toLocaleString('en');
                  const others = data.find(obj => obj.city === name.slice(0,2))?.others.toLocaleString('en');
                  const total = data.find((obj) => obj.city === name.slice(0,2))?.total.toLocaleString('en');
                  setTooltipContent(`${name.slice(0,2)}: 學生 ${student}, 老師 ${teacher}, 家長 ${parent}, 其他 ${others}, 全部 ${total}`);
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
