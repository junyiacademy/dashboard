import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
// const regUserByCity = fetch('https://raw.githubusercontent.com/junyiacademy/dashboard/master/JSON/reg_user_by_city.json').then(response => response.json());
import regUserByCity from './JSON/reg_user_by_city.json';

const geoUrl = "https://raw.githubusercontent.com/junyiacademy/dashboard/master/src/JSON/counties.json";


const MapChart = ({ setTooltipContent }: any) => {
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
                  const student = regUserByCity.find((city) => city.index === name.slice(0,2))?.student.toLocaleString('en');
                  const teacher = regUserByCity.find((city) => city.index === name.slice(0,2))?.teacher.toLocaleString('en');
                  const parent = regUserByCity.find((city) => city.index === name.slice(0,2))?.parent.toLocaleString('en');
                  const others = regUserByCity.find((city) => city.index === name.slice(0,2))?.others.toLocaleString('en');
                  setTooltipContent(`${name.slice(0,2)}: 學生 ${student}, 老師 ${teacher}, 家長 ${parent}, 其他 ${others}`);
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
