import { Box } from "@chakra-ui/layout";
import { Svg } from "assets/svgs";
import React from "react";

export const Header = () => {
  return (
    <Box backgroundColor="cyan.500" height="20">
      <Svg.Logo />
    </Box>
  );
};
