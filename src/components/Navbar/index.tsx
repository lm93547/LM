import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Image,
  Code,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GITHUB_URL, INITIALS, LINKEDIN_URL, NAME } from "../../constants/userInfo";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl"
import NavMenu from "../NavMenu";
import { navLinks } from "../../constants/navLinks";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <Box w="100%" h={16} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Flex>
                <Code colorScheme='red'>
                    {INITIALS}
                </Code>
            </Flex>
          <Flex alignItems={"center"}>
            <Flex alignItems={"center"} mr={4}>
                <Stack direction={"row"} spacing={4}>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                    <Button variant='ghost'>
                        <SlSocialLinkedin />
                    </Button>
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                    <Button variant='ghost'>
                        <VscGithubAlt />
                    </Button>
                </a>
                <HStack
                    as={"nav"}
                    spacing={4}
                    display={{ base: "none", md: "flex" }}
                >
                    {navLinks.map((link) => (
                    <NavLink key={link.title}>{link.title}</NavLink>
                    ))}
                </HStack>
                </Stack>
            </Flex>
            <Box alignItems="center" display={{ md: "none" }}>
                <NavMenu />
            </Box>
          </Flex>
        </Flex>
      </Box>
  );
}
