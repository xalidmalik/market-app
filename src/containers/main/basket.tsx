import { Box, HStack, Stack, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { BasketItem } from "components/basket-item";
import { CustomBox } from "components/custom-box";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketSelector } from "store/selectors/basket";
import { setTotal } from "store/slices/basket";
import { BasketType } from "store/types/basket";

export const Basket = memo(() => {
  const { data, total, isLoading } = useSelector(BasketSelector.State);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      let total: number = 0;
      data.map((item) => (total = total + item.product.price * item.quantity));
      dispatch(setTotal(parseFloat(total.toFixed(2))));
    }
  }, [data, dispatch]);

  const Loader = isLoading && (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      background="#ffffff91"
      zIndex="1"
      opacity="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
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

  const List =
    data.length !== 0 &&
    data.map((item: BasketType, index) => {
      return <BasketItem key={index} {...item} />;
    });

  const Empty = data.length === 0 && !isLoading && (
    <Text textAlign="center">Basket is Empty</Text>
  );

  const BasketTotal = data.length !== 0 && (
    <HStack justifyContent="flex-end" mt="4">
      <Text
        py="4"
        px="6"
        border="2px"
        borderColor="cyan.500"
        fontSize="14px"
        fontWeight="semibold"
        color="cyan.500"
        minWidth="32"
        textAlign="center"
      >
        {`₺ ${total}`}
      </Text>
    </HStack>
  );

  return (
    <Stack>
      <CustomBox
        border="8px"
        borderColor="cyan.500"
        justifyContent="center"
        position="relative"
        minHeight="24"
      >
        {Loader}
        {List}
        {Empty}
        {BasketTotal}
      </CustomBox>
    </Stack>
  );
});
