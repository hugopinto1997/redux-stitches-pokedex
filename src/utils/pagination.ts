import type { GetPageFunction } from '../types/pagination';

export const getPage: GetPageFunction = ({ count = 1, limit, offset }) => {
  if (count === 0 || count === 1) {
    return 1;
  }
  const calculatedPage = Math.floor(((offset / limit) % count) + 1);
  if (calculatedPage <= 0) {
    return 1;
  }
  return calculatedPage;
};

export const calcEvenLimit = (num: number) => 3.0 * Math.ceil(num / 3.0);
