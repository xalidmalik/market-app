import { ProductType } from "store/types/product";

export function ExtrackTags(product: Array<ProductType>) {
  const FlattedArray: Array<string> = product.flatMap((item: ProductType) => {
    return item.tags;
  });

  const UniqueArray: Array<string> = FlattedArray.filter((item, index) => {
    return FlattedArray.indexOf(item) === index;
  });

  // const UniqueArray: Array<string> = FlattedArray.filter((b) => b);

  return UniqueArray.map((field) => {
    const finded = product.filter((data) =>
      data.tags.find((each) => each === field)
    );
    return { name: field, quantity: finded.length };
  });
}
