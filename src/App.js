import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home.page";
import { MoodProvider } from "./hooks/MoodContext";

function App() {
  return (
    <ChakraProvider>
      <MoodProvider>
        <Home />
      </MoodProvider>
    </ChakraProvider>
  );
}

export default App;
