import { Button } from "@chakra-ui/button";
import { Box, Text, VStack } from "@chakra-ui/layout";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { addToBasketSaga } from "store/slices/basket";
import { ProductType } from "store/types/product";

export const ProductItem = memo((product: ProductType) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch({ type: addToBasketSaga.type, payload: { product, quantity: 1 } });
  };

  return (
    <VStack align="flex-start" spacing="2">
      <Box
        width="124px"
        height="124px"
        padding="4"
        border="1px"
        borderColor="gray.200"
        borderRadius="12px"
      >
        <Box width="100%" height="full" backgroundColor="gray.300" />
      </Box>
      <VStack spacing="0" align="flex-start">
        <Text fontSize="14px" fontWeight="bold" color="cyan.500">
          {`₺ ${product.price}`}
        </Text>
        <Text fontSize="14px" fontWeight="semibold" height="42px" noOfLines={2}>
          {product.name}
        </Text>
      </VStack>
      <Button
        colorScheme="cyan"
        w="full"
        size="sm"
        color="white"
        onClick={() => handleAddToBasket()}
      >
        Add
      </Button>
    </VStack>
  );
});

export const ProductSkeleton = memo(() => {
  return (
    <VStack align="flex-start" spacing="2">
      <Box
        width="124px"
        height="124px"
        padding="4"
        border="1px"
        borderColor="gray.200"
        borderRadius="12px"
      >
        <Skeleton width="100%" height="full" backgroundColor="gray.300" />
      </Box>
      <VStack spacing="2" align="flex-start" width="100%">
        <Skeleton width="30%" height="20px" />
        <SkeletonText height="35px" width="100%" noOfLines={2} />
      </VStack>
      <Skeleton width="100%" height="32px" borderRadius="md" />
    </VStack>
  );
});
