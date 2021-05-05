import { Box, BoxProps } from "@chakra-ui/layout";
import React, { FC, memo } from "react";

export const CustomBox: FC<BoxProps> = memo(({ children, ...props }) => {
  return (
    <Box
      padding="6"
      backgroundColor="white"
      borderRadius="2px"
      width="100%"
      boxShadow="md"
      {...props}
    >
      {children}
    </Box>
  );
});
