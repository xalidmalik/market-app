import { VStack } from "@chakra-ui/layout";
import { Brands } from "containers/sub/brands";
import { Sorting } from "containers/sub/sorting";
import { Tags } from "containers/sub/tags";
import React, { memo } from "react";

export const Filter = memo(() => {
  return (
    <VStack spacing="6">
      <Sorting />
      <Brands />
      <Tags />
    </VStack>
  );
});
