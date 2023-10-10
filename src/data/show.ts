export interface Show {
  id: number; // 204
  premiered: string; // "1997-07-27"
  ended: string; // "2008-07-29"
  genres: string[]; // ["Action", "Adventure", "Science-Fiction"]
  image: string | null;
  language: string; // "English"
  name: string; // "Stargate SG-1"
  averageRating: number | null; // 8.9
  imdbUrl: string | null;
  tvMazeUrl: string; // "https://www.tvmaze.com/shows/204/stargate-sg-1"
}
