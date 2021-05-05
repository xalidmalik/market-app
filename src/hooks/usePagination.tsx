import { Button } from "@chakra-ui/button";
import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductSelector } from "store/selectors/product";
import { setPagination } from "store/slices/product";

export const usePagination = () => {
  const { info, pagination, data, isLoading } = useSelector(
    ProductSelector.State
  );
  const dispatch = useDispatch();

  const [elementArray, setElementArray] = useState<Array<ReactNode>>([]);

  useEffect(() => {
    if (data.length !== 0 && !isLoading && info.total_page) {
      let catcher = undefined;
      let spreadButtonIncludes = false;
      const preparedArray: number[] = [];

      const preparedElementArray: ReactNode[] = [];

      Array.from({ length: info.total_page }, (_, i) => i + 1).map(
        (page, index) => {
          if (
            (page <= pagination._page + 2 && page > pagination._page - 2) ||
            page > info.total_page - 3
          ) {
            return preparedArray.push(page), console.log("page", page);
          } else if (info.total_page === 0) {
            console.log("else", page);
          }
        }
      );
      for (let page of preparedArray) {
        if (catcher && page - catcher !== 1) {
          preparedElementArray.push(
            <Button key={spreadButtonIncludes ? -1 : 0}>...</Button>
          );
          spreadButtonIncludes = true;
        }
        preparedElementArray.push(
          <Button
            key={page}
            isActive={page === pagination._page}
            color="cyan.500"
            _active={{
              backgroundColor: "cyan.500",
              color: "white",
            }}
            onClick={() =>
              dispatch(setPagination({ ...pagination, _page: page }))
            }
          >
            {page}
          </Button>
        );
        catcher = page;
      }
      setElementArray(preparedElementArray);
    }
  }, [data.length, dispatch, info.total_page, isLoading, pagination]);
  return elementArray;
};
