import { ReactNode } from 'react';

import { PaginationButton } from './PaginationItem.styles';

type PaginationItemProps = {
  active?: boolean;
  value: string | number | ReactNode;
  pageValue: number;
  setPage: (page: number) => void;
} & typeof defaultProps;

const defaultProps = { active: false };

const PaginationItem = ({
  active,
  pageValue,
  setPage,
  value,
}: PaginationItemProps) => {
  return (
    <PaginationButton
      mode={`${active ? 'active' : 'inactive'}`}
      type="button"
      onClick={() => setPage(pageValue)}
    >
      {value}
    </PaginationButton>
  );
};

PaginationItem.defaultProps = defaultProps;
export default PaginationItem;
