import { useState } from "react";

export const useScroll = () => {
  const [showTag, setShowTag] = useState<number>(10);
  const itemNumber = 6;
  const itemHeight = 38;
  const handleScroll = (val: any) => {
    if (val.target.scrollTop > (showTag - itemNumber) * itemHeight) {
      setShowTag((state) => state + 10);
    }
  };

  return { handleScroll, showTag };
};
