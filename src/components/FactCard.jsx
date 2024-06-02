import { Card, CardBody, Text } from "@chakra-ui/react";

export default function FactCard({ fact }) {
  return (
    <Card bgColor={"gray.200"}>
      <CardBody>
        <Text fontFamily={"monospace"}>{fact}</Text>
      </CardBody>
    </Card>
  );
}
