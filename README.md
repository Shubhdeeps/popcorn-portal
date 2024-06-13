# POPCORN PORTAL

This funky film portal dishes details, ratings, and reviews for your movie obsession.

### Webapp URL

[popcorn-portal-db.web.app](https://popcorn-portal-db.web.app/)

### Tech stack

- React 18
- Typescript
- Sass
- React router 6
- React redux toolkit
- Axios
- Firebase hosting

### To run in development mode

- clone git repo [https://github.com/Shubhdeeps/popcorn-portal](https://github.com/Shubhdeeps/popcorn-portal.git)
  `git clone https://github.com/Shubhdeeps/popcorn-portal`

- add .env file to the root of the project with two variables API key `VITE_TMDB_API_KEY` and API Read access token `VITE_API_READ_ACCESS_TOKEN` found at [https://developer.themoviedb.org/](https://developer.themoviedb.org/)

- open the terminal and cd into root directory and install dependencies
  `cd popcorn-portal` -> `npm install` or `yarn`

- run dev server
  `npm run dev` or `yarn dev`

### Project structure

Popcorn-portal
├───public
├───src
| App.tsx
| main.tsx
| vite-env.d.ts
|  
 +---assets
| BackIcon.tsx
| CloseIcon.tsx
| CopyIcon.tsx
| invalid.png
| Play.svg.tsx
| SearchIcon.svg.tsx
| ShareIcon.tsx
| Star.svg.tsx
| TabIcons.tsx
|  
 +---components
| +---Button
| | button.tsx
| | favorite-button.tsx
| |  
 | +---Card
| | base-card.tsx
| |  
 | +---Carousel
| | index.tsx
| |  
 | +---Dropdown
| | dropdown.tsx
| |  
 | +---Error
| | ErrorCard.tsx
| |  
 | +---Helmet
| | DocumentHelmet.tsx
| |  
 | +---Layout
| | AppLogo.tsx
| | footer.tsx
| | index.tsx
| | navbar.tsx
| |
| +---Modal
| | modal-window.tsx
| |
| +---TextField
| | input-text-field.tsx
| |
| +---Typography
| | headline-typography.tsx
| |
| \---Video
| video-player.tsx
|
+---features
| +---Favorites
| | FavoriteGrid.tsx
| |
| +---Movie
| | +---Cards
| | | NowPlayingMovieCard.tsx
| | | PopularMovieCard.tsx
| | | UpcomingMovieCard.tsx
| | | UpcomingMovieMiniCard.tsx
| | |
| | \---Grid
| | GeneralMoviesGrid.tsx
| | TopRatedMoviesGrid.tsx
| | UpcomingMoviesGrid.tsx
| |
| +---Overview
| | ActionBar.tsx
| | AdditionalData.tsx
| | OverviewCard.tsx
| |
| +---People
| | +---Cards
| | | PersonCard.tsx
| | |
| | \---Grid
| | PopularPersonGrid.tsx
| |
| +---Search
| | ProxySearchButton.tsx
| | SearchContent.tsx
| | SearchOptionTab.tsx
| | SearchResultCard.tsx
| |
| \---TV
| +---Cards
| | TvCard.tsx
| | TvSeasonCard.tsx
| |
| \---Grid
| GeneralTvGrid.tsx
| TVPopularGrid.tsx
|
+---hooks
| useCarouselScroll.ts
| useDebounce.ts
| useFetch.ts
| useFetch1.ts
| useIntersectionOberver.ts
| useMediaSearch.ts
| useScrollTrigger.ts
|
+---models
| EndPoints.model.ts
| Movie.model.ts
| Person.model.ts
| Search.model.ts
| SearchTabs.model.ts
| TV.model.ts
| Video.model.ts
|
+---pages
| Error404.page.tsx
| Home.page.tsx
| index.tsx
| MovieOverview.page.tsx
| PersonOverview.page.tsx
| TvOverview.page.tsx
|
+---sass
| | main.scss
| |
| +---components
| | \_base-button.scss
| | \_base-card.scss
| | \_carousel.scss
| | \_drop-down.scss
| | \_error.scss
| | \_headline-typography.scss
| | \_modal-window.scss
| | \_navbar.scss
| | \_text-field.scss
| | \_video-player.scss
| |
| +---features
| | \_general-card-grid.scss
| | \_now-playing-card.scss
| | \_overview-action-bar.scss
| | \_overview-card.scss
| | \_person-card.scss
| | \_popular-movie-card.scss
| | \_search.scss
| | \_tv-card.scss
| | \_upcoming-card.scss
| | \_upcoming-mini-card.scss
| | \_upcoming-movie-grid.scss
| |
| +---pages
| | \_home-page.scss
| | \_media-overview-page.scss
| |
| +---root
| | \_body.scss
| | \_breakpoints.scss
| | \_grid.scss
| |
| +---utils
| | \_base.scss
| | \_utilities.scss
| |
| \---variables
| \_colors.scss
| \_sizing.scss
|
+---store
| | index.ts
| |
| +---media
| | media.slice.ts
| |
| +---overview
| | mediaOverview.slice.ts
| |
| +---search
| | search.slice.ts
| |
| \---watchLater
| watchLater.slice.ts
|
\---utils
axiosFetch.ts
endpoints.ts
skeletonGenerator.ts
timeFormatter.ts
