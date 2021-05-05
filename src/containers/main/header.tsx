import { Box, Container, Text } from "@chakra-ui/layout";
import { Svg } from "assets/svgs";
import React from "react";
import { useSelector } from "react-redux";
import { BasketSelector } from "store/selectors/basket";

export const Header = () => {
  const { total } = useSelector(BasketSelector.State);

  return (
    <Box backgroundColor="cyan.500" height="20">
      <Container
        position="relative"
        justifyContent="center"
        alignItems="center"
        display="flex"
        height="100%"
      >
        <Box
          position="absolute"
          right="0"
          height="100%"
          background="cyan.700"
          px="6"
          alignItems="center"
          justifyContent="center"
          display="flex"
          minWidth="32"
        >
          <Svg.Basket />
          <Text fontWeight="semibold" fontSize="14px" color="white">
            {`₺ ${total}`}
          </Text>
        </Box>
        <Svg.Logo />
      </Container>
    </Box>
  );
};
