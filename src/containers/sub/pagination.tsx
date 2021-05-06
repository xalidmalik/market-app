import { Button, ButtonGroup } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { Svg } from "assets/svgs";
import { usePagination } from "hooks/usePagination";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductSelector } from "store/selectors/product";
import { setPagination } from "store/slices/product";

export const Pagination = memo(() => {
  const { pagination, info } = useSelector(ProductSelector.State);
  const dispatch = useDispatch();
  const ElementArrays = usePagination();

  return (
    <VStack justify="center" align="center" width="100%" maxWidth="608px">
      <ButtonGroup variant="ghost" color="gray.500" isAttached>
        <Button
          leftIcon={<Svg.LeftArrow />}
          disabled={pagination._page === 1}
          onClick={() => {
            if (pagination._page !== 1) {
              dispatch(
                setPagination({ ...pagination, _page: pagination._page - 1 })
              );
            }
          }}
        >
          Prev
        </Button>
        {ElementArrays.map((Elements) => Elements)}
        <Button
          rightIcon={<Svg.RightArrow />}
          disabled={pagination._page === info.total_page}
          onClick={() => {
            if (pagination._page !== info.total_page) {
              dispatch(
                setPagination({ ...pagination, _page: pagination._page + 1 })
              );
            }
          }}
        >
          Next
        </Button>
      </ButtonGroup>
    </VStack>
  );
});
