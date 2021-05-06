import { VStack } from "@chakra-ui/layout";
import { useRadioGroup } from "@chakra-ui/radio";
import { BoxContainer } from "components/box-container";
import { Radio } from "components/radio";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductSelector } from "store/selectors/product";
import { setPagination } from "store/slices/product";
import { OrderType, SortType } from "store/types/product";

type SortOptionType = {
  name: string;
  sort_order: string;
};
const options: Array<SortOptionType> = [
  { name: "Price low to high", sort_order: "price-asc" },
  { name: "Price high to low", sort_order: "price-desc" },
  { name: "New to old", sort_order: "date-asc" },
  { name: "Old to new", sort_order: "date-desc" },
];

export const Sorting = memo(() => {
  const dispatch = useDispatch();
  const Pagination = useSelector(ProductSelector.Pagination);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "sorting",
    defaultValue: "price-asc",
    onChange: (sort_order) => HandleChange(sort_order),
  });

  function HandleChange(sort_order: string) {
    const SortValue = (sort_order.split("-")[0] as unknown) as SortType;
    const OrderValue = (sort_order.split("-")[1] as unknown) as OrderType;

    dispatch(
      setPagination({ ...Pagination, _sort: SortValue, _order: OrderValue })
    );
  }

  const group = getRootProps();

  const RenderRadio = options.map((value, index) => {
    const radio = getRadioProps({ value: value.sort_order });
    return (
      <Radio key={index} {...radio}>
        {value.name}
      </Radio>
    );
  });

  return (
    <BoxContainer title="Sorting">
      <VStack {...group} align="flex-start" spacing="4">
        {RenderRadio}
      </VStack>
    </BoxContainer>
  );
});
