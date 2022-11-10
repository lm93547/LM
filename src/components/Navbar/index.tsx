import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  HStack,
} from "@chakra-ui/react";
import {
  GITHUB_URL,
  LINKEDIN_URL,
} from "../../constants/userInfo";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import NavMenu from "../NavMenu";
import { navLinks } from "../../constants/navLinks";
import { NextRouter, useRouter } from "next/router";
import { GoGist } from "react-icons/go";

const NavLink = ({
  children,
  href,
  router,
}: {
  children: ReactNode;
  href: string;
  router: NextRouter;
}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    onClick={() => {
      router.push(href);
    }}
    data-testid="nav-link"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const router = useRouter();

  return (
    <Box w="100%" h={16} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex
          data-testid="route-home"
          color="red.500"
          cursor="pointer"
          onClick={() => {
            router.push("/");
          }}
          fontSize="2xl"
        >
          <GoGist />
        </Flex>
        <Flex alignItems={"center"}>
          <Flex alignItems={"center"} mr={4}>
            <Stack direction={"row"} spacing={4}>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <Button variant="ghost">
                  <SlSocialLinkedin />
                </Button>
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Button variant="ghost">
                  <VscGithubAlt />
                </Button>
              </a>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {navLinks.map((link) => (
                  <NavLink router={router} href={link.url} key={link.title}>
                    {link.title}
                  </NavLink>
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
