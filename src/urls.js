import { API_KEY } from "./constants/constants";
export const trendingURL = `trending/all/day?api_key=${API_KEY}`;
export const discoverURL = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const genAction = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`;
export const genComedy = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`;
