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

/**
 * Component that sets up the main body of the page.
 */

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
            </Text>

            {/* The show tag makes sure the text mentioning Ronald is not rendered when he is not. We would not want the mobile users to
                  to know that they are missing out on that good, good boy... */}
            <Show breakpoint="(min-width: 700px)">
              <Text fontFamily={"monospace"}>
                (Ronald might like the new facts or he might react in a
                different way...)
              </Text>
            </Show>

            <FactGrid />
          </VStack>
        </CardBody>
      </Card>
    </>
  );
}
