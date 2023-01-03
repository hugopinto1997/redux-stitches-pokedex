import {
  useQueryParams,
  StringParam,
  NumberParam,
  withDefault,
} from 'use-query-params';

export const useSearchFilters = () => {
  const OffsetParam = withDefault(NumberParam, 0);
  const LimitParam = withDefault(NumberParam, 20);
  return useQueryParams({
    search: StringParam,
    offset: OffsetParam,
    limit: LimitParam,
  });
};
