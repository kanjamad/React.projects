import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  // set rgb to sring
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  // change the color text,check index to know start the base color

  // show text clipboard for 3 seccond
  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(time);
  }, [alert]);

  return (
    <article
      className={`color ${index > 8 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      {/*<p className="color-value">{hex}</p> */}
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
