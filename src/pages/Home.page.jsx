import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/Header";
import Main from "../components/Main";
export default function Home() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        /* gridTemplateRows={"50px 1fr 30px"} */
        gridTemplateRows="auto"
        gridTemplateColumns={"150px 1fr"}
        h="fit-content"
        gap="2"
        color="blackAlpha.700"
        fontWeight="bold"
        margin={"1%"}
      >
        <GridItem pl="2" /* bg="orange.300" */ area={"header"}>
          <Header />
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          <Main />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}
