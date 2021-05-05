import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasketSaga } from "store/slices/basket";
import { BasketType } from "store/types/basket";

export const BasketItem = (item: BasketType) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch({ type: addToBasketSaga.type, payload: item });
  };
  return (
    <HStack
      py="4"
      borderBottom="1px solid"
      borderColor="gray.200"
      justifyContent="space-between"
    >
      <VStack align="flex-start" spacing="1">
        <Text fontSize="14px" noOfLines={1}>
          {item.product.name}
        </Text>
        <Text fontSize="14px" fontWeight="bold" color="cyan.500">
          {`₺ ${item.product.price}`}
        </Text>
      </VStack>
      <HStack spacing="1">
        <Button variant="unstyled" size="sm" color="cyan.500" fontSize="20px">
          -
        </Button>
        <Input
          size="sm"
          w="8"
          px="1"
          textAlign="center"
          backgroundColor="cyan.500"
          color="white"
          fontWeight="bold"
          value={item.quantity}
          readOnly
        />
        <Button
          variant="unstyled"
          size="sm"
          color="cyan.500"
          fontSize="20px"
          onClick={() => handleAddToBasket()}
        >
          +
        </Button>
      </HStack>
    </HStack>
  );
};
