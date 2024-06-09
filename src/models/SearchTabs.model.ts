export const searchTabs = ["all", "movie", "tv", "person"] as const;
export type SearchTabs = (typeof searchTabs)[number];
