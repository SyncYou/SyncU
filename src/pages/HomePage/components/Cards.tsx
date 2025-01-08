import React, { useEffect, useState } from "react";
import { ProjectCabins } from "../../../types/ProjectCabins";
import { data } from "react-router-dom";

export const Cards = () => {
  const [cards, setCards] = useState("");

  useEffect(() => {
    ProjectCabins().then((data) => console.log(data));
  }, []);

  return <p>Hey Bruv</p>;
};
