import { Button, VStack, SimpleGrid, Show } from "@chakra-ui/react";
import FactCard from "./FactCard";

export default function FactGrid() {
  return (
    <>
      <VStack w={"60%"}>
        <Button alignSelf={"start"}>New facts</Button>
        <Show breakpoint="(min-width: 1100px)">
          <SimpleGrid columns={3} spacing={5}>
            <FactCard />
            <FactCard />
            <FactCard />
            <FactCard />
            <FactCard />
            <FactCard />
          </SimpleGrid>
        </Show>
      </VStack>
    </>
  );
}
