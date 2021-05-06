import { Text, VStack } from "@chakra-ui/layout";
import React, { FC, memo } from "react";
import { CustomBox } from "./custom-box";

type BoxContainerTypes = {
  title: string;
  minHeight?: string;
  maxHeight?: string;
  loading?: boolean;
};

export const BoxContainer: FC<BoxContainerTypes> = memo(
  ({ children, title, minHeight, maxHeight }) => {
    return (
      <VStack spacing="3" alignItems="flex-start" width="100%">
        <Text fontSize="13px" color="gray.500">
          {title}
        </Text>
        <CustomBox minHeight={minHeight} maxHeight={maxHeight}>
          {children}
        </CustomBox>
      </VStack>
    );
  }
);
