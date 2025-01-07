import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";

export const Cards = () => {
  const [cards, setCards] = useState("");
  useEffect(() => {
    fetchedCards();
  }, []);

  const fetchedCards = async () => {
    const { data, error } = await supabase.from("Projects").select("*");
    if (error) {
      console.log("Error fetching:", error);
    } else {
      setCards(data);
      console.log(data);
    }
  };

  return (
    <div>
      {/* {cards.map((data) => (
            <p>
                {data}
        </p>
    ))} */}
    </div>
  );
};
