import type { Movie } from '../types'

const poster = (path: string) => `https://image.tmdb.org/t/p/w342${path}`

// Verified real TMDB poster paths (HTTP-checked to resolve as actual images).
const REAL_POSTERS: Record<string, string> = {
  arrival: poster('/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg'),
  'grand-budapest': poster('/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg'),
  'get-out': poster('/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg'),
  'before-sunrise': poster('/kf1Jb1c2JAOqjuzA3H4oDM263uB.jpg'),
  'mad-max-fury-road': poster('/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg'),
  parasite: poster('/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'),
  'paddington-2': poster('/1OJ9vkD5xPt3skC6KguyXAgagRZ.jpg'),
  'blade-runner-2049': poster('/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg'),
  'knives-out': poster('/pThyQovXQrw2m0s9x82twj48Jq4.jpg'),
  her: poster('/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg'),
  'the-big-lebowski': poster('/3bv6WAp6BSxxYvB5ozKFUYuRA8C.jpg'),
  'a-quiet-place': poster('/nAU74GmpUk7t5iklEp3bufwDq4n.jpg'),
  moonlight: poster('/qLnfEmPrDjJfPyyddLJPkXmshkp.jpg'),
  'spider-verse': poster('/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg'),
  'princess-bride': poster('/2FC9L9MrjBoGHYjYZjdWQdopVYb.jpg'),
}

const MOVIES_DATA: Movie[] = [
  {
    id: 'arrival',
    title: 'Arrival',
    year: 2016,
    runtime: 116,
    rating: 7.9,
    genres: ['Sci-Fi', 'Drama'],
    moods: ['thoughtful', 'slow-burn', 'mystery', 'emotional'],
    synopsis:
      'A linguist is recruited to communicate with extraterrestrial visitors whose ships have appeared around the world.',
    posterPath: poster('/x2FJ7htcl8JP/McchnXSDMH.jpg'),
    trailerUrl: 'https://www.youtube.com/watch?v=tFMo3UJ4B4g',
    streaming: [
      { service: 'netflix', label: 'Netflix', url: 'https://www.netflix.com' },
      { service: 'prime', label: 'Prime Video', url: 'https://www.amazon.com/gp/video' },
    ],
    rationaleTemplates: [
      'Smart sci-fi with emotional weight — contemplative without being cold.',
      'A slow-burn mystery that rewards patience, perfect for a focused evening.',
    ],
  },
  {
    id: 'grand-budapest',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    runtime: 99,
    rating: 8.1,
    genres: ['Comedy', 'Drama'],
    moods: ['comfort', 'whimsical', 'colorful', 'light'],
    synopsis:
      'The adventures of a legendary concierge and his protégé at a famous European hotel between the wars.',
    posterPath: poster('/eWdyYQreja6JGCzqHWXpWHD2OXI.jpg'),
    trailerUrl: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk',
    streaming: [
      { service: 'max', label: 'Max', url: 'https://www.max.com' },
      { service: 'hulu', label: 'Hulu', url: 'https://www.hulu.com' },
    ],
    rationaleTemplates: [
      'Whimsical and visually delightful — under two hours and easy to love.',
      'Comfort viewing with wit and style, great when you want something uplifting.',
    ],
  },
  {
    id: 'get-out',
    title: 'Get Out',
    year: 2017,
    runtime: 104,
    rating: 7.8,
    genres: ['Thriller', 'Horror'],
    moods: ['intense', 'social', 'suspense', 'clever'],
    synopsis:
      'A young African-American visits his white girlfriend\'s family estate, where simmering tension reaches a boiling point.',
    posterPath: poster('/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg'),
    trailerUrl: 'https://www.youtube.com/watch?v=Dzfpy-xm4Bw',
    streaming: [
      { service: 'prime', label: 'Prime Video', url: 'https://www.amazon.com/gp/video' },
    ],
    rationaleTemplates: [
      'Tension without cheap jump scares — smart thriller that keeps you guessing.',
      'Sharp and unsettling, but tightly paced at under two hours.',
    ],
  },
  {
    id: 'before-sunrise',
    title: 'Before Sunrise',
    year: 1995,
    runtime: 101,
    rating: 8.1,
    genres: ['Romance', 'Drama'],
    moods: ['romantic', 'conversational', 'intimate', '90s'],
    synopsis:
      'Two strangers meet on a train and spend one night walking and talking through Vienna.',
    posterPath: poster('/9u5yabqKeJq9dDv9XdPIO8tnvQQ.jpg'),
    streaming: [
      { service: 'max', label: 'Max', url: 'https://www.max.com' },
    ],
    rationaleTemplates: [
      'Pure conversation-driven romance — intimate and unhurried.',
      'A 90s gem that feels timeless, ideal for a cozy night in.',
    ],
  },
  {
    id: 'mad-max-fury-road',
    title: 'Mad Max: Fury Road',
    year: 2015,
    runtime: 120,
    rating: 8.1,
    genres: ['Action', 'Sci-Fi'],
    moods: ['adrenaline', 'visual', 'intense', 'short-feel'],
    synopsis:
      'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a drifter named Max.',
    posterPath: poster('/hA2ple9q4qnwxp3hKVNhroipsir.jpg'),
    trailerUrl: 'https://www.youtube.com/watch?v=hEJnMQG9ev8',
    streaming: [
      { service: 'max', label: 'Max', url: 'https://www.max.com' },
    ],
    rationaleTemplates: [
      'Non-stop visual storytelling — action that never wastes a frame.',
      'High energy without a slow middle act; pure cinematic momentum.',
    ],
  },
  {
    id: 'parasite',
    title: 'Parasite',
    year: 2019,
    runtime: 132,
    rating: 8.5,
    genres: ['Thriller', 'Drama'],
    moods: ['clever', 'dark', 'social', 'twisty'],
    synopsis:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    posterPath: poster('/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'),
    streaming: [
      { service: 'hulu', label: 'Hulu', url: 'https://www.hulu.com' },
      { service: 'max', label: 'Max', url: 'https://www.max.com' },
    ],
    rationaleTemplates: [
      'Genre-bending and razor-sharp — keeps shifting until the final act.',
      'Dark social satire with thriller pacing; best when you want something bold.',
    ],
  },
  {
    id: 'paddington-2',
    title: 'Paddington 2',
    year: 2017,
    runtime: 103,
    rating: 8.0,
    genres: ['Comedy', 'Drama'],
    moods: ['comfort', 'wholesome', 'family', 'feel-good'],
    synopsis:
      'Paddington looks for the perfect present for his aunt\'s 100th birthday, but a thief frames him for theft.',
    posterPath: poster('/mBtUcZTVpx2H3A5Na3s5mGfF3zO.jpg'),
    streaming: [
      { service: 'netflix', label: 'Netflix', url: 'https://www.netflix.com' },
    ],
    rationaleTemplates: [
      'Genuinely heartwarming without being saccharine — perfect comfort pick.',
      'Under two hours of pure joy; hard to finish without smiling.',
    ],
  },
  {
    id: 'blade-runner-2049',
    title: 'Blade Runner 2049',
    year: 2017,
    runtime: 164,
    rating: 8.0,
    genres: ['Sci-Fi', 'Drama'],
    moods: ['slow-burn', 'visual', 'atmospheric', 'mystery'],
    synopsis:
      'A young blade runner discovers a secret that could plunge society into chaos and seeks out former blade runner Rick Deckard.',
    posterPath: poster('/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg'),
    streaming: [
      { service: 'netflix', label: 'Netflix', url: 'https://www.netflix.com' },
    ],
    rationaleTemplates: [
      'Atmospheric sci-fi mystery — patient, gorgeous, and deeply immersive.',
      'If you liked Arrival\'s mood, this delivers a longer, visual slow burn.',
    ],
  },
  {
    id: 'knives-out',
    title: 'Knives Out',
    year: 2019,
    runtime: 130,
    rating: 7.9,
    genres: ['Thriller', 'Comedy'],
    moods: ['clever', 'fun', 'mystery', 'ensemble'],
    synopsis:
      'A detective investigates the death of a patriarch of an eccentric, combative family.',
    posterPath: poster('/pThyQ59XQO0i0u9pRqhPs1dTFG7.jpg'),
    streaming: [
      { service: 'netflix', label: 'Netflix', url: 'https://www.netflix.com' },
      { service: 'prime', label: 'Prime Video', url: 'https://www.amazon.com/gp/video' },
    ],
    rationaleTemplates: [
      'Smart whodunit with humor — engaging without being exhausting.',
      'Mystery that stays playful; great when you want twists without dread.',
    ],
  },
  {
    id: 'her',
    title: 'Her',
    year: 2013,
    runtime: 126,
    rating: 8.0,
    genres: ['Romance', 'Sci-Fi', 'Drama'],
    moods: ['emotional', 'thoughtful', 'intimate', 'near-future'],
    synopsis:
      'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.',
    posterPath: poster('/5Uq2aTVVu2jPENn7bY1b8d9Y7cO.jpg'),
    streaming: [
      { service: 'netflix', label: 'Netflix', url: 'https://www.netflix.com' },
    ],
    rationaleTemplates: [
      'Tender sci-fi romance — emotionally resonant without melodrama.',
      'Quiet and reflective, ideal when you want something human and futuristic.',
    ],
  },
  {
    id: 'the-big-lebowski',
    title: 'The Big Lebowski',
    year: 1998,
    runtime: 117,
    rating: 8.1,
    genres: ['Comedy'],
    moods: ['comfort', 'absurd', '90s', 'light'],
    synopsis:
      'Jeff "The Dude" Lebowski, mistaken for a millionaire, seeks restitution for a ruined rug.',
    posterPath: poster('/aHtwxCHIK677Wc9qY9PScT5tU0a.jpg'),
    streaming: [
      { service: 'prime', label: 'Prime Video', url: 'https://www.amazon.com/gp/video' },
    ],
    rationaleTemplates: [
      'Laid-back cult comedy — perfect low-stakes comfort viewing.',
      '90s classic with endless quotable moments and zero urgency.',
    ],
  },
  {
    id: 'a-quiet-place',
    title: 'A Quiet Place',
    year: 2018,
    runtime: 90,
    rating: 7.5,
    genres: ['Horror', 'Thriller'],
    moods: ['tension', 'short', 'intense', 'family'],
    synopsis:
      'A family must live in silence to avoid mysterious creatures that hunt by sound.',
    posterPath: poster('/nAU74GmpUk7t5iklEp3bfwP6n9X.jpg'),
    streaming: [
      { service: 'prime', label: 'Prime Video', url: 'https://www.amazon.com/gp/video' },
      { service: 'hulu', label: 'Hulu', url: 'https://www.hulu.com' },
    ],
    rationaleTemplates: [
      'Tight 90-minute thriller — suspense without jump-scare overload.',
      'Short runtime, high tension; great when you want intensity in one sitting.',
    ],
  },
  {
    id: 'moonlight',
    title: 'Moonlight',
    year: 2016,
    runtime: 111,
    rating: 7.4,
    genres: ['Drama'],
    moods: ['emotional', 'intimate', 'artful', 'slow-burn'],
    synopsis:
      'A young man struggles to find himself while growing up in Miami, through three defining chapters of his life.',
    posterPath: poster('/49wjr0QsWYca8o9p7kIUSd5HzGU.jpg'),
    streaming: [
      { service: 'netflix', label: 'Netflix', url: 'https://www.netflix.com' },
    ],
    rationaleTemplates: [
      'Quiet, powerful character study — emotionally rich without being heavy-handed.',
      'Artful drama that lingers; best when you want something meaningful.',
    ],
  },
  {
    id: 'spider-verse',
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    runtime: 117,
    rating: 8.4,
    genres: ['Action', 'Sci-Fi'],
    moods: ['fun', 'visual', 'energetic', 'feel-good'],
    synopsis:
      'Teen Miles Morales becomes Spider-Man and teams up with counterparts from other dimensions.',
    posterPath: poster('/iiZZdoQBEYBvIDidjMie6Fp0HkH.jpg'),
    streaming: [
      { service: 'netflix', label: 'Netflix', url: 'https://www.netflix.com' },
    ],
    rationaleTemplates: [
      'Visually stunning and genuinely fun — energizing without being shallow.',
      'Animated action with heart; great when you want something vibrant.',
    ],
  },
  {
    id: 'princess-bride',
    title: 'The Princess Bride',
    year: 1987,
    runtime: 98,
    rating: 8.0,
    genres: ['Comedy', 'Romance', 'Action'],
    moods: ['comfort', 'adventure', 'classic', 'light'],
    synopsis:
      'A bedridden boy\'s grandfather reads him the story of a farmboy-turned-pirate who encounters obstacles in his quest to be reunited with his true love.',
    posterPath: poster('/dEKqQ4mGr2a8nUn0Hf1Xq0ApjY.jpg'),
    streaming: [
      { service: 'disney', label: 'Disney+', url: 'https://www.disneyplus.com' },
    ],
    rationaleTemplates: [
      'Timeless adventure-comedy — under two hours of pure comfort.',
      'Classic that never feels dated; perfect feel-good pick.',
    ],
  },
]

export const MOVIES: Movie[] = MOVIES_DATA.map((movie) => ({
  ...movie,
  posterPath: REAL_POSTERS[movie.id] ?? movie.posterPath,
}))

export function getMovieById(id: string): Movie | undefined {
  return MOVIES.find((m) => m.id === id)
}
