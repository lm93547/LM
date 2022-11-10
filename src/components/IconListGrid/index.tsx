import { Flex, Grid, List, ListItem, ListIcon } from "@chakra-ui/react";
import React from "react";

type Props = {
    gridItems: {name: string, icon: JSX.Element | any}[]
    templateColumns: `repeat(${string}, minmax(${string}, ${string}))`
};

function IconListGrid({gridItems, templateColumns}: Props) {
  return (
    <Flex mt="2">
      <Grid templateColumns={templateColumns}>
        {gridItems.map(({ name, icon }) => {
          return (
            <List data-testid="list-item" key={name}>
              <ListItem>
                <ListIcon as={icon} color="red.500" />
                {name}
              </ListItem>
            </List>
          );
        })}
      </Grid>
    </Flex>
  );
}

export default IconListGrid;
