import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { GoGist } from "react-icons/go";
import { ABOUT, ABOUT_TITLE } from "../../../constants/about";
import { technologies } from "../../../constants/technologies";
import IconHeader from "../../IconHeader";
import IconListGrid from "../../IconListGrid";

function AboutText() {
  return (
    <Flex direction="column" p={useBreakpointValue({ base: "4", md: "6" })}>
      <IconHeader icon={<GoGist />} text={ABOUT_TITLE} />
      <Flex fontSize={useBreakpointValue({ base: "md", md: "lg" })}>
        {ABOUT}
      </Flex>
      <IconListGrid
        gridItems={technologies}
        templateColumns={"repeat(2, minmax(140px, 200px))"}
      />
    </Flex>
  );
}

export default AboutText;
