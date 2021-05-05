import { HStack, Stack, Text } from "@chakra-ui/layout";
import { BasketItem } from "components/basket-item";
import { CustomBox } from "components/custom-box";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketSelector } from "store/selectors/basket";
import { setTotal } from "store/slices/basket";
import { BasketType } from "store/types/basket";

export const Basket = () => {
  const { data, total } = useSelector(BasketSelector.State);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      let total: number = 0;
      data.map((item) => (total = total + item.product.price * item.quantity));
      dispatch(setTotal(parseFloat(total.toFixed(2))));
    }
  }, [data, dispatch]);
  return (
    <Stack>
      <CustomBox border="8px" borderColor="cyan.500" justifyContent="center">
        {data.length !== 0 &&
          data.map((item: BasketType, index) => {
            return <BasketItem key={index} {...item} />;
          })}
        {data.length === 0 && <Text textAlign="center">Basket is Empty</Text>}
        {data.length !== 0 && (
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
        )}
      </CustomBox>
    </Stack>
  );
};
