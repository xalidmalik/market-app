import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductSelector } from "store/selectors/product";
import { BrandManipulatedStateType } from "store/types/brand";
import { TagType } from "store/types/tags";

export const useSearch = (data: Array<TagType | BrandManipulatedStateType>) => {
  const { total_data } = useSelector(ProductSelector.Info);
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<
    Array<TagType | BrandManipulatedStateType>
  >([]);

  let searchInArray = (
    searchQuery: string,
    array: Array<TagType | BrandManipulatedStateType>
  ) => {
    let findedItem: Array<TagType> = [];
    let searchWords = searchQuery
      .split(" ")
      .map((b) => b && b.toLowerCase().trim())
      .join("");
    array.filter((d) => {
      let data = d.name;
      let dataWords = data
        .split(" ")
        .map((b) => b && b.toLowerCase().trim())
        .join("");
      if (dataWords.includes(searchWords)) {
        findedItem.push(d);
      }
      return {};
    });
    return findedItem;
  };

  useEffect(() => {
    if (data.length !== 0) {
      const Searched = searchInArray(search, data);
      setResult(Searched);
    }
  }, [data, search]);

  useEffect(() => {
    if (result.length !== 0) {
      let total = 0;
      result && result.map((item) => (total += item.quantity));
      if (result[0].name !== "All") {
        const newResult = [{ name: "All", quantity: total }, ...result];
        setResult(newResult);
      }
    }
  }, [result, total_data]);

  return { result, setSearch };
};
