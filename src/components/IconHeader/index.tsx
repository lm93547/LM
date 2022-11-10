import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

type Props = {
    icon: JSX.Element;
    text: string;
};

const IconHeader = ({icon, text}: Props) => {
  return (
    <Flex justifyContent="flex-start" alignItems="center" mb="2">
      <Heading
        color="red.500"
        fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
        fontWeight={200}
        lineHeight={1.0}
        data-testid="icon"
      >
        {icon}
      </Heading>
      <Heading
        fontWeight={200}
        lineHeight={1.0}
        fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
        color="white"
      >
        {text}
      </Heading>
    </Flex>
  );
};

export default IconHeader;
