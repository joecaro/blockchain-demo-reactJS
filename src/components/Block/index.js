import React from "react";
import SingeBlock from "./SingeBlock";

export default function index({ type }) {
  return <>{type === "single" && <SingeBlock />}</>;
}
