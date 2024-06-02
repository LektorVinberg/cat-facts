import { createContext, useContext, useState } from "react";

const MoodContext = createContext();
/**
 * This context provider sets up hooks for changing the state variable that governs the mood of Ronald Läskeblasksson III.
 * Wrapping the main component with this provider ensures that the state can be shared with multiple components.
 */
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
