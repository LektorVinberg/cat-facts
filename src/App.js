import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home.page";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
