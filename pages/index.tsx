import "@fontsource/dosis";
import {
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import Layout from "../src/components/Layout";
import HomePageHero from "../src/components/Hero/HomePageHero";

export default function Home() {
  return (
    <Layout>
      <VStack
        w={"full"}
        h={"full"}
        justify={"center"}
        alignItems="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <HomePageHero />
      </VStack>
    </Layout>
  );
}
