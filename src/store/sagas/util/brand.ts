import { BrandType } from "store/types/brand";
import { ProductType } from "store/types/product";

export function ExtrackBrands(
  brand: Array<BrandType>,
  product: Array<ProductType>
) {
  const FlattedArray: Array<string> = brand.flatMap((item: BrandType) => {
    return item.slug;
  });

  return FlattedArray.map((field) => {
    const finded = product.filter((data) => data.manufacturer === field);
    return { name: field, quantity: finded.length };
  });
}
