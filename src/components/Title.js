import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "../style/styles.css";

export default function Title(props) {
  return <h1 className="h1">{props.content}</h1>;
}
