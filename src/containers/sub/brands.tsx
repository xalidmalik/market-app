import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Input } from "@chakra-ui/input";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { BoxContainer } from "components/box-container";
import { useScroll } from "hooks/useScroll";
import { useSearch } from "hooks/useSearch";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrandSelector } from "store/selectors/brand";
import { setBrand } from "store/slices/product";

export const Brands = memo(() => {
  const { data, isLoading } = useSelector(BrandSelector.State);
  const { handleScroll, showTag } = useScroll();
  const { result, setSearch } = useSearch(data);
  const dispatch = useDispatch();

  const Loader = isLoading && (
    <Box
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
  const List = result.slice(0, showTag).map((value, index) => {
    return (
      <Checkbox
        size="lg"
        colorScheme="cyan"
        key={value.name}
        value={value.name}
      >
        <HStack spacing="1">
          <Text noOfLines={1}>{String(value.name).replaceAll("-", " ")}</Text>
          <Text color="gray.300">{`(${value.quantity})`}</Text>
        </HStack>
      </Checkbox>
    );
  });

  return (
    <BoxContainer title="Brands" minHeight="244px" loading>
      <VStack spacing="4" align="flex-start" width="100%">
        <Input
          placeholder="Search Brand"
          colorScheme="cyan"
          size="lg"
          fontSize="14px"
          onChange={(val) => setSearch(val.target.value)}
          _focus={{ borderColor: "cyan.500" }}
        />
        <CheckboxGroup
          colorScheme="green"
          defaultValue={[]}
          onChange={(change: Array<string>) => dispatch(setBrand(change))}
        >
          <VStack
            alignItems="flex-start"
            width="100%"
            height="132px"
            overflow="scroll"
            spacing="4"
            onScroll={(val) => handleScroll(val)}
          >
            {List}
            {Loader}
          </VStack>
        </CheckboxGroup>
      </VStack>
    </BoxContainer>
  );
});
