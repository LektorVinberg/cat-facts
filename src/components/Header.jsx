import { Card, CardBody, Center, Text } from "@chakra-ui/react";
export default function Header() {
  return (
    <>
      <Card bgColor={"gray.200"} border={"2px solid gray.800"}>
        <CardBody>
          <Center h={"100%"}>
            <Text fontSize={"4xl"} fontFamily={"monospace"}>
              Fat Cat's cat facts!
            </Text>
          </Center>
        </CardBody>
      </Card>
    </>
  );
}
