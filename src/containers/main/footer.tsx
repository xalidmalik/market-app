import { HStack, Text } from "@chakra-ui/layout";
import React from "react";

export const Footer = () => {
  return (
    <HStack
      justify="center"
      align="center"
      paddingBottom="10"
      paddingTop="36"
      display="flex"
    >
      <Text>I am Footer</Text>
    </HStack>
  );
};
