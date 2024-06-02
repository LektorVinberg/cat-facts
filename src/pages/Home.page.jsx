import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";

/**
 * Component that sets up the layout of the page and renders the respective component in each area
 */
export default function Home() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows="auto"
        gridTemplateColumns={"auto"}
        h="fit-content"
        gap="2"
        color="blackAlpha.700"
        fontWeight="bold"
        margin={"1%"}
      >
        <GridItem pl="2" area={"header"}>
          <Header />
        </GridItem>
        <Show breakpoint="(min-width: 700px)">
          <GridItem pl="2" area={"nav"}>
            <Nav />
          </GridItem>
        </Show>
        <GridItem pl="2" area={"main"}>
          <Main />
        </GridItem>
      </Grid>
    </>
  );
}
