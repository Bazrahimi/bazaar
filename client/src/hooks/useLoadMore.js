import { useState } from 'react';

const useLoadMore = (initialCount = 8, totalCount = 0) => {
  const [itemsToShow, setItemsToShow] = useState(initialCount);

  const loadMore = () => {
    if (itemsToShow + initialCount > totalCount) {
      setItemsToShow(totalCount); // Show all items without exceeding the total count
    } else {
      setItemsToShow(itemsToShow + initialCount);
    }
  };

  // Determine if there are more items to load
  const canLoadMore = itemsToShow < totalCount;

  return [itemsToShow, loadMore, canLoadMore];
};

export default useLoadMore;
