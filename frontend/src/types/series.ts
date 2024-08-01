export interface TvShow {
  id: number;
  name: string;
  permalink: string;
  start_date: string;
}

export interface TopSeriesResponse {
  total: string;
  page: number;
  pages: number;
  tv_shows: TvShow[];
}
