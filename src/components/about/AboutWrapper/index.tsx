import { Flex, Avatar, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

type Props = {
    children: JSX.Element
    avatar: `/assets/${string}`
    aboutHeader: `/assets/${string}`
};

const AboutWrapper = ({children, avatar, aboutHeader}: Props) => {
  return (
    <Flex h="full" w="full" alignItems="center" justifyContent="center">
      <Flex
        maxW="2xl"
        bgColor="gray.700"
        rounded="2xl"
        direction="column"
        m={useBreakpointValue({ base: "6", md: "2" })}
      >
        <Image
          h={"150px"}
          w={"full"}
          src={aboutHeader}
          objectFit={"cover"}
          alt="about-header"
          roundedTop="xl"
        />
        <Flex justify={"center"} mt={-14}>
          <Avatar
            size={"2xl"}
            src={avatar}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default AboutWrapper;
