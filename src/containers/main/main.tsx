import { Button, ButtonGroup } from "@chakra-ui/button";
import { Text, VStack } from "@chakra-ui/layout";
import { CustomBox } from "components/custom-box";
import { ProductItem, ProductSkeleton } from "components/product-item";
import { Pagination } from "containers/sub/pagination";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductSelector } from "store/selectors/product";
import { fetchProduct, setProductType } from "store/slices/product";
import { ItemType } from "store/types/product";

type itemTypeOptionType = {
  type: ItemType;
};

const ItemTypeOption: Array<itemTypeOptionType> = [
  { type: "mug" },
  { type: "shirt" },
];

export const Main = () => {
  const dispatch = useDispatch();
  const { data, isLoading, pagination, filtering } = useSelector(
    ProductSelector.State
  );

  useEffect(() => {
    dispatch({ type: fetchProduct.type, payload: pagination });
  }, [pagination, dispatch, filtering]);

  return (
    <VStack alignItems="flex-start" spacing="4" width="100%">
      <Text fontSize="20px">Products</Text>
      <ButtonGroup>
        {ItemTypeOption.map((data, index) => {
          return (
            <Button
              key={index}
              isActive={filtering.product_type === data.type}
              _active={{
                backgroundColor: "cyan.500",
                color: "white",
              }}
              onClick={() => dispatch(setProductType(data.type))}
            >
              {data.type}
            </Button>
          );
        })}
      </ButtonGroup>
      <CustomBox
        padding="5"
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridGap="6"
      >
        {data &&
          !isLoading &&
          data.map((product, index) => {
            return <ProductItem key={index} {...product} />;
          })}
        {isLoading &&
          Array.from(Array(8).keys()).map((index) => {
            return <ProductSkeleton key={index} />;
          })}
      </CustomBox>
      <Pagination />
    </VStack>
  );
};
