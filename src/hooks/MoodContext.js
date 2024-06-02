import { createContext, useContext, useState } from "react";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
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

  return (
    <MoodContext.Provider value={{ mood, changeMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  return useContext(MoodContext);
};
