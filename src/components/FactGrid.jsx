import { Button, VStack, SimpleGrid } from "@chakra-ui/react";
import FactCard from "./FactCard";

export default function FactGrid() {
  return (
    <>
      <VStack w={"60%"}>
        <Button alignSelf={"start"}>New facts</Button>
        <SimpleGrid columns={3} spacing={5}>
          <FactCard />
          <FactCard />
          <FactCard />
          <FactCard />
          <FactCard />
          <FactCard />
        </SimpleGrid>
      </VStack>
    </>
  );
}
