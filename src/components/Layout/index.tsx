import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { motion } from 'framer-motion'

type Props = {
  children: any;
};

const variants = {
  hidden: { opacity: 0, y: 0, scale: 0.9 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, scale: 0.9 },
};

const Layout = ({ children }: Props) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
    >
      <Flex
        w={"full"}
        // h={"100vh"}
        position="fixed"
        top="0"
        bottom="0"
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
    </motion.main>
  );
};

export default Layout;
