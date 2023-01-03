import { useEffect, useState, useMemo, useCallback } from 'react';

type PaginationControllerProps = {
  count: number;
  defaultPage?: number;
  limit?: number;
  offset?: number;
  onPageChange: (newOffset: number) => void;
};

export const usePaginationController = ({
  count,
  defaultPage = 1,
  onPageChange,
  limit = 20,
}: PaginationControllerProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const memoizedOnChange = useCallback(onPageChange, []);

  useEffect(() => {
    if (defaultPage !== currentPage) {
      setCurrentPage(defaultPage);
    }
  }, [defaultPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      const formattedValue = page - 1;
      const newOffset = (formattedValue * limit) % count;
      setCurrentPage(page);
      memoizedOnChange(newOffset);
    },
    [count, limit, memoizedOnChange],
  );

  const pageCount = useMemo(() => Math.ceil(count / limit), [count, limit]);

  return { currentPage, handlePageChange, pageCount };
};
