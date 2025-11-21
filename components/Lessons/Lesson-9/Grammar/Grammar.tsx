import React from "react";

import { Examples } from "./Examples";
import { Exercises } from "./Exercises";
import { Aorist } from "./Aorist";

export const Grammar = () => {
  return (
    <>
      <Aorist />
      <Examples />
      <Exercises />
    </>
  );
};
