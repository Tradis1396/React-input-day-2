import React from "react";
import { Header } from "./Header";
import { Body } from "./body";
import { Harley } from "./Harley";
export function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div
          className="col-lg-6 "
          style={{
            position: "absolute",
            top: 30,
            left: 50,
            right: 0,
            bottom: 0,
            justifyContent: "middle",
            alignItems: "center",
            opacity: "0.5"
          }}
        >
          <Body />
        </div>
        <div
          className="col-lg-6 offset-lg-4 "
          style={{
            position: "absolute",
            top: 30,
            left: 50,
            right: 0,
            bottom: 0,
            justifyContent: "middle",
            alignItems: "center",
            opacity: "0.5"
          }}
        >
          <Harley />
        </div>
        <div
          className="col-lg-6 offset-lg-8 "
          style={{
            position: "absolute",
            top: 30,
            left: 50,
            right: 0,
            bottom: 0,
            justifyContent: "middle",
            alignItems: "center",
            opacity: "0.5"
          }}
        >
          <Body />
        </div>
      </div>
    </div>
  );
}
