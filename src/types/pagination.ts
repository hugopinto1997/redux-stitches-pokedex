export type PaginationArgs = {
  limit: number;
  offset: number;
  count: number;
};

export type GetPageFunction = (paginationArgs: PaginationArgs) => number;
