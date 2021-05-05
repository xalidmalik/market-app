import { HStack, Stack, Text } from "@chakra-ui/layout";
import { BasketItem } from "components/basket-item";
import { CustomBox } from "components/custom-box";
import React from "react";
import { useSelector } from "react-redux";
import { BasketSelector } from "store/selectors/basket";
import { BasketType } from "store/types/basket";

export const Basket = () => {
  const { data } = useSelector(BasketSelector.State);
  return (
    <Stack>
      <CustomBox border="8px" borderColor="cyan.500" justifyContent="center">
        {data.length !== 0 &&
          data.map((item: BasketType, index) => {
            return <BasketItem key={index} {...item} />;
          })}
        {data.length === 0 && <Text textAlign="center">Basket is Empty</Text>}
        <HStack justifyContent="flex-end" mt="4">
          <Text
            py="4"
            px="6"
            border="2px"
            borderColor="cyan.500"
            fontSize="14px"
        
          >
            ₺39,97
          </Text>
        </HStack>
      </CustomBox>
    </Stack>
  );
};
