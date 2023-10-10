export interface Episode {
  id: number; // 13436
  url: string; // 'https://www.tvmaze.com/episodes/13436/stargate-sg-1-1x01-children-of-the-gods'
  name: string; // 'Children of the Gods'
  season: number; // 1
  number: number; // 1
  airdate: string; // '1997-07-27'
  runtime: number; // 120
  averageRating: number | null;
  image: string | null;
  summary: { __html: string }; // "<p>The System Lord Apophis launches an attack through the Stargate, tucked away by the military after the events of the movie, and the SGC program is reactivated and given a new objective - seek out and find the alien invaders and defeat them. Jack O'Neill is called out of retirement and sent to locate Daniel Jackson on Abydos.</p>"
}
