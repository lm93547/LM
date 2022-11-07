import { Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

type Props = {
    children: any
}

const Layout = ({children}: Props) => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"/assets/backgrounds/mcr-black.png"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Flex
        w={"full"}
        h={"100vh"}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        direction="column"
      >
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </Flex>
  )
}

export default Layout