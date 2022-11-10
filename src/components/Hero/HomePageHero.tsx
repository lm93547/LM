import {
  Stack,
  Heading,
  useBreakpointValue,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { HiExternalLink } from "react-icons/hi";
import {
  NAME,
  TAGLINE,
  BIO,
  STRUCT,
  STRUCT_URL,
} from "../../constants/userInfo";

const HomePageHero = () => {
  return (
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
            data-testid="home-page-hero-link"
            rightIcon={<HiExternalLink />}
            onClick={() => {
              window.open(STRUCT_URL, "_blank");
            }}
          >
            {STRUCT}
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default HomePageHero;
