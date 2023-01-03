import { ReactNode, memo } from 'react';

import { useThrottledCallback } from 'use-debounce';

import PaginationItem from './components/PaginationItem';
import { BreakLabel, PaginationContainer } from './Pagination.styles';

type PaginationProps = {
  currentPage: number;
  breakLabel?: string | ReactNode;
  nextLabel?: string | ReactNode;
  previousLabel?: string | ReactNode;
  pageCount: number;
  onPageChange: (page: number) => void;
} & typeof defaultProps;

const defaultProps = {
  breakLabel: <>...</>,
  nextLabel: <>&gt;</>,
  previousLabel: <>&lt;</>,
};

const Pagination = ({
  currentPage,
  pageCount,
  breakLabel,
  // defaultPage,
  nextLabel,
  onPageChange,
  previousLabel,
}: PaginationProps) => {
  const throttledOnChangePage = useThrottledCallback((page) => {
    onPageChange(page);
  }, 1000);

  return (
    <PaginationContainer>
      {currentPage !== 1 && (
        <PaginationItem
          value={previousLabel}
          pageValue={currentPage - 1}
          setPage={throttledOnChangePage}
        />
      )}

      <PaginationItem
        active={currentPage === 1}
        value="1"
        pageValue={1}
        setPage={throttledOnChangePage}
      />

      {currentPage > 3 && <BreakLabel>{breakLabel}</BreakLabel>}

      {currentPage === pageCount && pageCount > 3 && (
        <PaginationItem
          value={currentPage - 2}
          pageValue={currentPage - 2}
          setPage={throttledOnChangePage}
        />
      )}

      {currentPage > 2 && (
        <PaginationItem
          value={currentPage - 1}
          pageValue={currentPage - 1}
          setPage={throttledOnChangePage}
        />
      )}

      {currentPage !== 1 && currentPage !== pageCount && (
        <PaginationItem
          active
          value={currentPage}
          pageValue={currentPage}
          setPage={throttledOnChangePage}
        />
      )}

      {currentPage < pageCount - 1 && (
        <PaginationItem
          value={currentPage + 1}
          pageValue={currentPage + 1}
          setPage={throttledOnChangePage}
        />
      )}

      {currentPage === 1 && pageCount > 3 && (
        <PaginationItem
          value={currentPage + 2}
          pageValue={currentPage + 2}
          setPage={throttledOnChangePage}
        />
      )}

      {currentPage < pageCount - 2 && <BreakLabel>{breakLabel}</BreakLabel>}

      {pageCount > 1 && (
        <PaginationItem
          active={currentPage === pageCount}
          value={pageCount}
          pageValue={pageCount}
          setPage={throttledOnChangePage}
        />
      )}

      {currentPage !== pageCount && pageCount > 1 && (
        <PaginationItem
          value={nextLabel}
          pageValue={currentPage + 1}
          setPage={throttledOnChangePage}
        />
      )}
    </PaginationContainer>
  );
};

Pagination.defaultProps = defaultProps;
export default memo(Pagination);
