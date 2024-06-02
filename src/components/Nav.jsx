import { Button, Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import { Cat } from "react-kawaii";
import { useMood } from "../hooks/MoodContext";
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
          <Cat color="#ffab40" mood={mood} />
        </CardBody>
      </Card>
    </>
  );
}
