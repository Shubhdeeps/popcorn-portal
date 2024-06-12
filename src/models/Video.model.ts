export interface VideoModel {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: "YouTube" | string;
  size: number;
  type: "Featurette" | "Trailer" | "Clip";
  official: boolean;
  published_at: string;
  id: string;
}
