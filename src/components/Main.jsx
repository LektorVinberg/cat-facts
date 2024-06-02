import {
  Card,
  CardBody,
  Divider,
  Heading,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import FactGrid from "./FactGrid";

export default function Main() {
  return (
    <>
      <Card>
        <CardBody>
          <VStack alignItems={"start"}>
            <Heading fontFamily={"monospace"} size={"md"}>
              Welcome to the wonderful world of random facts about cats!
            </Heading>

            <Divider colorScheme="blackAlpha" />

            <Text fontFamily={"monospace"}>
              Click the button below to get a new batch of facts
              {
                <Show breakpoint="(min-width: 700px)">
                  <Text fontFamily={"monospace"}>
                    (Ronald might like the new facts or he might react in a
                    different way...)
                  </Text>
                </Show>
              }
            </Text>

            <FactGrid />
          </VStack>
        </CardBody>
      </Card>
    </>
  );
}
