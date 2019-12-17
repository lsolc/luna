import React from "react";
import Popup from "reactjs-popup";

export function PopupRightCenter() {
    return (
        <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    )
}