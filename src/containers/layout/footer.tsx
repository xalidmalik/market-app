import { HStack, Text } from "@chakra-ui/layout";
import React, { memo } from "react";

export const Footer = memo(() => {
  return (
    <HStack
      justify="center"
      align="center"
      paddingBottom="10"
      paddingTop="36"
      display="flex"
      spacing="6"
      color="cyan.500"
    >
      <Text>©2019 Market</Text>
      <Text>•</Text>
      <Text>Privacy Policy</Text>
    </HStack>
  );
});
