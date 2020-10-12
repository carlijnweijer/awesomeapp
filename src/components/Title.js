import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";

export default function Title(props) {
  return <h1>{props.content}</h1>;
}
