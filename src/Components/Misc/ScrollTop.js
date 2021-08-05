import React from "react";
import SVG from "react-inlinesvg";
import img from '../../media/svg/Up-2.svg'

export function ScrollTop() {
    return (
        <div id="kt_scrolltop" className="scrolltop">
        <span className="svg-icon">
          <SVG src={img}/>
        </span>{" "}
        </div>
    );
}
