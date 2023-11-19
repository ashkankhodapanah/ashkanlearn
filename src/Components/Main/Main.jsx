import React from "react";
import BoxDeteils from "../../Components/BoxDeteils/BoxDeteils";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";

export default function Main() {
  return (
    <>
      <div className="isolate overflow-hidden">
        <HeaderMain />
        <BoxDeteils />
      </div>
    </>
  );
}
