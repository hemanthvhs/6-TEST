import React, { useState } from "react";

function Mood() {
  const [mood, setMood] = useState(true);
  const toggleMood = () => setMood(!mood);
  return <h2 onClick={toggleMood}>{mood ? ":)" : ":("}</h2>;
}

export default Mood;
