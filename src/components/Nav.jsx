import { Card, CardBody } from "@chakra-ui/react";
import { Cat } from "react-kawaii";

export default function Nav() {
  return (
    <>
      <Card bgColor={"gray.200"}>
        <CardBody>
          <Cat color="#cea18b" mood="blissful" />
        </CardBody>
      </Card>
    </>
  );
}
