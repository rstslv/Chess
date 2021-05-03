import React from "react";
import backDropStyle from "./backdrop.module.css";

export default function Backdrop({ show ,click }) {
  return show && <div className={backDropStyle.backDrop} onClick={click}></div>;
}
