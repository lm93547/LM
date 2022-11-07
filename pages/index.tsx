import "@fontsource/dosis";
import {
  Button,
  Flex,
  Stack,
  useBreakpointValue,
  VStack,
  Text,
  Heading,
  ButtonGroup,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";
import Layout from "../src/components/Layout";
import { BIO, NAME, STRUCT, TAGLINE } from "../src/constants/userInfo";

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
        <Stack maxW={"5xl"} align={"flex-start"} spacing={6}>
          <Heading
            color={"white"}
            fontWeight={200}
            lineHeight={1.0}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            {NAME} - {TAGLINE}
          </Heading>
          <Heading
            color={"white"}
            fontWeight={200}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
            maxW="3xl"
          >
            {BIO}
          </Heading>
          <Stack direction={"row"}>
            <ButtonGroup isAttached>
              <Button rounded={"full"} variant="outline" color={"white"}>
                Currently working on:
              </Button>
              <Button
                variant="outline"
                color={"white"}
                bgGradient="linear-gradient(179.67deg, #FF61FF 0.28%, #CD2FCD 50.29%)"
                bgBlendMode="color-burn"
                rounded={"full"}
                rightIcon={<HiExternalLink />}
                onClick={()=>{
                    window.open("https://github.com/struct-defi", "_blank")
                }}
              >
                {STRUCT}
              </Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </VStack>
    </Layout>
  );
}
