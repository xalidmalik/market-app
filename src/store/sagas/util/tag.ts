import { ItemType, ProductType } from "store/types/product";

export function ExtrackTags(product: Array<ProductType>, item_type: ItemType) {
  const cleanArray = product.filter((data) => data.itemType === item_type);
  console.log("CLEAN ARRAY", cleanArray);

  const FlattedArray: Array<string> = cleanArray.flatMap(
    (item: ProductType) => {
      return item.tags;
    }
  );

  const UniqueArray: Array<string> = FlattedArray.filter((item, index) => {
    return FlattedArray.indexOf(item) === index;
  });

  return UniqueArray.map((field) => {
    const finded = product.filter((data) =>
      data.tags.find((each) => each === field)
    );
    return { name: field, quantity: finded.length };
  });
}
