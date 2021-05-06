import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Input } from "@chakra-ui/input";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { BoxContainer } from "components/box-container";
import { useScroll } from "hooks/useScroll";
import { useSearch } from "hooks/useSearch";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductSelector } from "store/selectors/product";
import { TagSelector } from "store/selectors/tag";
import { setTag } from "store/slices/product";

export const Tags = memo(() => {
  const { data, isLoading } = useSelector(TagSelector.State);
  const { filtering } = useSelector(ProductSelector.State);
  const { handleScroll, showTag } = useScroll();
  const { result, setSearch } = useSearch(data);
  const [value, setValue] = useState<string>("All");
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
  const List = result.slice(0, showTag).map((value) => {
    return (
      <Checkbox
        size="lg"
        colorScheme="cyan"
        key={value.name}
        value={value.name}
      >
        <HStack spacing="1">
          <Text>{value.name}</Text>
          <Text color="gray.300">{`(${value.quantity})`}</Text>
        </HStack>
      </Checkbox>
    );
  });

  return (
    <BoxContainer
      title="Tags"
      minHeight="244px"
      maxHeight="244px"
      loading={isLoading}
    >
      <VStack spacing="4" align="flex-start">
        <Input
          placeholder="Search Tag"
          colorScheme="cyan"
          size="lg"
          fontSize="14px"
          onChange={(val) => setSearch(val.target.value)}
          _focus={{ borderColor: "cyan.500" }}
        />
        <CheckboxGroup
          colorScheme="green"
          defaultValue={["All"]}
          value={value ? [value] : filtering.tags}
          onChange={(change: Array<string>) => {
            if (change.length > 1 && change[0] === "All") {
              setValue("");
              change.shift();
              dispatch(setTag(change));
            } else if (change.length === 0 || change.includes("All")) {
              setValue("All");
            }
            dispatch(setTag(change));
          }}
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
