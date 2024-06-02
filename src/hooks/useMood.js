import { useState, useEffect } from "react";

export const useMood = () => {
  const moods = [
    "sad",
    "shocked",
    "happy",
    "blissful",
    "lovestruck",
    "excited",
    "ko",
  ];
  const [mood, setMood] = useState("happy");
  const changeMood = () => {
    console.log("hallåååå?");
    const index = Math.floor(Math.random() * moods.length);
    setMood(moods[index]);
  };
  useEffect(() => {
    console.log("mood is now ", mood);
  }, [mood]);
  return {
    mood,
    changeMood,
  };
};
