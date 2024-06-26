import { Button, VStack, SimpleGrid, Show } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useMood } from "../hooks/MoodContext";
import FactCard from "./FactCard";
import axios from "axios";

/**
 * Component that renders the grid of fact cards in the main portion of the page.
 */

export default function FactGrid() {
  const [facts, setFacts] = useState([]);
  const { changeMood } = useMood();

  //Runs at render to fetch the first set of cat facts
  useEffect(() => {
    fetchFacts();
  }, []);

  const fetchFacts = async () => {
    try {
      const response = await axios.get(
        "https://meowfacts.herokuapp.com/?count=6"
      );
      if (response.status === 200) {
        setFacts(response.data.data);
      }
    } catch (error) {
      console.error("Something went wrong when fetching cat facts");
    }
  };

  return (
    <>
      <VStack w={"90%"}>
        <Button
          alignSelf={"start"}
          onClick={() => {
            changeMood();
            fetchFacts();
          }}
        >
          New facts
        </Button>
        {/* The Show tag ensure rendering changes according to screen size */}
        <Show breakpoint="(min-width: 1000px)">
          <SimpleGrid columns={3} spacing={5}>
            {facts.map((fact, index) => (
              <FactCard fact={fact} key={index} />
            ))}
          </SimpleGrid>
        </Show>
        <Show breakpoint="(max-width: 1000px)">
          <SimpleGrid columns={1} spacing={5}>
            {facts.map((fact, index) => (
              <FactCard fact={fact} key={index} />
            ))}
          </SimpleGrid>
        </Show>
      </VStack>
    </>
  );
}
