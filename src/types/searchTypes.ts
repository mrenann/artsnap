export interface User {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
}

export interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Image {
  id: string;
  description: string;
  user: User;
  urls: ImageUrls;
}

export interface SearchResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
