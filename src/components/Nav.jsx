import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import { Cat } from "react-kawaii";
import { useMood } from "../hooks/MoodContext";

/**
 * Component that sets up the left-side bar containing a very polite cat
 */

export default function Nav() {
  const { mood } = useMood();
  return (
    <>
      <Card bgColor={"gray.200"}>
        <CardHeader>
          <Text alignSelf={"center"} fontFamily={"monospace"}>
            This is Ronald Läskeblasksson III
          </Text>
        </CardHeader>
        <CardBody>
          <Cat color="#ffab40" mood={mood} size={320} />
        </CardBody>
      </Card>
    </>
  );
}
