export type NamedAPIResource = {
  name: string;
  url: string;
};

export type APIResource = {
  url: string;
};

export interface APIResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
