import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not Hero");
  }
  return (
    <div>
      <div>{heroName}</div>
    </div>
  );
}
export default Hero;
