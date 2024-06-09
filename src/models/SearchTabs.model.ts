export const searchTabs = ["All", "Movie", "TV", "People"] as const;
export type SearchTabs = (typeof searchTabs)[number];
