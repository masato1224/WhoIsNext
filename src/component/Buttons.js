import React, { Fragment } from "react";

export default function Buttons(props) {
  return (
    <Fragment>
      <button
        id="startButton"
        className="btn btn-outline-primary btn-lg mt-5 mr-2"
        onClick={() => {
          props.startOnClick();
          window.dataLayer = window.dataLayer || [];
          /*global dataLayer*/
          dataLayer.push({ event: "click", label: "spin the wheel" });
        }}
      >
        Spin the wheel
      </button>
    </Fragment>
  );
}
