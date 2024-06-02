import { Card, CardBody, Text } from "@chakra-ui/react";
/**
 * Component that renders a card with a cat fact. The input object contains a string with a single fact.
 */
export default function FactCard({ fact }) {
  return (
    <Card bgColor={"gray.200"}>
      <CardBody>
        <Text fontFamily={"monospace"}>{fact}</Text>
      </CardBody>
    </Card>
  );
}
