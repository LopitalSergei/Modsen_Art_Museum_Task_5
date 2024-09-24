export interface ArtInfo {
  id: number;
  image_id: string;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
}

export interface ArtMoreInfo extends ArtInfo {
  date_start: number;
  date_end: number;
  credit_line: string;
  place_of_origin: string;
  dimensions: string;
}

export interface ArtsListI {
  arts: ArtInfo[];
}

export interface TextProps {
  text: string;
}

export interface PaginationInfo {
  total_pages: number;
  total: number;
  limit: number;
  current_page: number;
}
