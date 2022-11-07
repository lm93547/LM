import React from "react";
import { Menu, MenuButton, Button, Avatar, MenuList, Center, MenuDivider, MenuItem } from "@chakra-ui/react";
import { navLinks } from "../../constants/navLinks";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
        data-testid="nav-menu"
      >
        <HamburgerIcon />
      </MenuButton>
      <MenuList alignItems={"center"}>
        {navLinks.map((link)=>{
            return <MenuItem key={link.title}>{link.title}</MenuItem>
        })}
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
