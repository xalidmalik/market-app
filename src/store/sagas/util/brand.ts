import { BrandType } from "store/types/brand";
import { FilteringType, ProductType } from "store/types/product";

export function ExtrackBrands(
  brand: Array<BrandType>,
  product: Array<ProductType>,
  filtering: FilteringType
) {
  const FlattedArray: Array<string> = brand.flatMap((item: BrandType) => {
    return item.slug;
  });

  return FlattedArray.map((field) => {
    const finded = product.filter(
      (data) =>
        data.manufacturer === field &&
        data.itemType === filtering.product_type &&
        data.tags.filter((productTag) =>
          filtering.tags?.filter((stateTag) => stateTag === productTag)
        )
    );
    return { name: field, quantity: finded.length };
  });
}
