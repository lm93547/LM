import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

type Props = {
  children: any;
};

const variants = {
  in: {
    opacity: 1,
    scale: 1
  },
  out: {
    opacity: 0,
    scale: 0.9
  },
};

const Layout = ({ children }: Props) => {
  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={variants}
      transition={{ type: "tween" }}
      layout="position"
    >
      <Flex
        w={"full"}
        h={"100vh"}
        minH="-webkit-fill-available"
        maxH={"100%"}
        backgroundImage={"/assets/backgrounds/mcr-black.png"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Flex
          w={"full"}
          h={"full"}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          direction="column"
        >
          <Navbar />
          {children}
          <Footer />
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Layout;
