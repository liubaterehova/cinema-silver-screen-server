import mongoose from 'mongoose';

export const VALUE_ALL = 'ALL';

export const CITY_CODE = {
  MSK: 'MSK',
  VTB: 'VTB',
};

export const CINEMA_CODE = {
  GALILEO: 'GALILEO',
  VOKA: 'VOKA',
};

export const DATE_CODE = {
  TOMORROW: 'TOMORROW',
  DAY_AFTER_TOMORROW: 'DAYAFTERTOMORROW',
};
export const FILMS = [
  {
    _id: mongoose.Types.ObjectId(),
    id: 1,
    name: 'Forrest Gump',
    type: 'Drama',
    description: `Forrest Gump is a 1994 American magical realism drama film directed by Robert Zemeckis and written
    by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom, and stars Tom Hanks, Robin Wright, Gary Sinise,
    Mykelti Williamson, and Sally Field. The story depicts several decades in the life of Forrest Gump (Hanks), a slow-witted but
    kind-hearted man from Alabama who witnesses and unwittingly influences several defining historical events in the 20th century
    United States. The film differs substantially from the novel.
    Principal photography took place in late 1993, mainly in Georgia, North Carolina, and South Carolina. Extensive visual effects
     were used to incorporate Hanks into archived footage and to develop other scenes. The soundtrack features songs reflecting
      the different periods seen in the film.`,
    duration: 3,
    poster: 'https://upload.wikimedia.org/wikipedia/ru/d/de/%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg',
  },
  {
    _id: mongoose.Types.ObjectId(),
    id: 2,
    name: 'Harley Quinn',
    type: 'Comedy',
    duration: 2,
    description: `The multiverse would be a much less lively place without the hijinks and shenanigans of the former Dr. Harleen
    Quinzel, the one and only Clown Princess of Crime.
    Sometimes love can make people do crazy things. Other times? It drives them completely insane. Such is the case with
    Harley Quinn, formerly Dr. Harleen Quinzel. A promising psychologist and intern at Arkham Asylum in Gotham City, Harleen
    was given the chance to get up close and personal with the Joker, an experience that wound up ending…badly. Harleen became
    obsessed with her subject, and after falling madly in love with the Clown Prince of Crime, she helped him escape the asylum.`,
    poster: 'https://upload.wikimedia.org/wikipedia/ru/f/f5/HarleyQuinnCvr26.jpg',
  },
  {
    _id: mongoose.Types.ObjectId(),
    id: 3,
    name: 'Officer and Spy',
    type: 'Drama',
    duration: 2,
    description: `An Officer and a Spy (French: J'accuse) is a 2019 French-Italian historical drama film directed
    by Roman Polanski about the Dreyfus affair, with a screenplay by Polanski and Robert Harris based on Harris's
    2013 novel of the same name.
    It had its premiere at the 76th Venice International Film Festival on 30 August 2019, winning the Grand Jury
    Prize. It received 12 nominations for the 45th César Awards, the most nominations of any eligible film, and
    eventually won the awards for Best Adaptation, Best Costume Design, and Best Director.
    An Officer and a Spy is Polanski's first film to be shot after he was expelled from the AMPAS under the new
    "ethical standards" of the post-Me Too era. The director's perceived impunity in Europe in that regard made
    the release of the film and the accolades it won in Italy and France controversial.`,
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/1b/An_Officer_and_A_Spy_poster.jpg',
  },
  {
    _id: mongoose.Types.ObjectId(),
    id: 4,
    name: 'Parasites',
    type: 'Drama',
    duration: 3,
    description: `Parasite (Korean: 기생충; RR: Gisaengchung) is a 2019 South Korean black comedy thriller film directed by
    Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won. It stars Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong,
    Choi Woo-shik, Park So-dam, Jang Hye-jin, and Lee Jung-eun and follows the members of a poor family who scheme to
    become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.

    Parasite premiered at the 2019 Cannes Film Festival on 21 May 2019, where it became the first South Korean film to
    win the Palme d'Or and the first film to win with a unanimous vote since Blue Is the Warmest Colour at the 2013 Festival.
    It was then released in South Korea by CJ Entertainment on 30 May 2019.

    The film received widespread critical acclaim, with praise directed towards its screenplay, Bong's direction, acting,
    social commentary, cinematography, editing and production values, and has featured in multiple listings of the best
    films of the 2010s. It has grossed over $269.4 million worldwide on a production budget of about $11 million, becoming
    the highest-grossing South Korean film.`,
    poster: 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png',
  },
];

export const CINEMAS = [
  {
    _id: mongoose.Types.ObjectId(),
    id: 1,
    label: 'Galileo',
    cinemaName: 'Silver Screen cinemas in "Galileo',
    address: 'city Minsk, str. Bobryiskay, 6',
    cinemaCode: CINEMA_CODE.GALILEO,
  },
  {
    _id: mongoose.Types.ObjectId(),
    id: 2,
    label: 'VOKA CINEMA',
    cinemaName: 'VOKA CINEMA by SilverScreen in Dana Mall',
    address: 'сity Vitebsk, str. Mstislavca, 11',
    cinemaCode: CINEMA_CODE.VOKA,
  },
];

export const SESSIONS = [
  {
    id: 1,
    filmId: FILMS[0]._id,
    city: 'Minsk',
    cityCode: CITY_CODE.MSK,
    date: 'tomorrow',
    dateCode: DATE_CODE.TOMORROW,
    cinemaId: CINEMAS[0]._id,
    time: '19:00',
    hour: 19,
    emptySeats: 10,
  },
  {
    id: 2,
    filmId: FILMS[1]._id,
    src: 'https://upload.wikimedia.org/wikipedia/ru/f/f5/HarleyQuinnCvr26.jpg',
    name: 'Harley Quinn',
    type: 'Comedy',
    city: 'Minsk',
    cityCode: CITY_CODE.MSK,
    date: 'tomorrow',
    dateCode: DATE_CODE.TOMORROW,
    cinemaId: CINEMAS[1]._id,
    time: '12:00',
    hour: 12,
    emptySeats: 10,

  },
  {
    id: 3,
    filmId: FILMS[2]._id,
    src: 'https://upload.wikimedia.org/wikipedia/en/1/1b/An_Officer_and_A_Spy_poster.jpg',
    name: 'Officer and Spy',
    type: 'Drama',
    city: 'Minsk',
    cityCode: CITY_CODE.MSK,
    date: 'day after tomorrow',
    dateCode: DATE_CODE.DAY_AFTER_TOMORROW,
    cinemaId: CINEMAS[0]._id,
    time: '17:00',
    hour: 17,
    emptySeats: 2,

  },
  {
    id: 4,
    filmId: FILMS[3]._id,
    src: 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png',
    name: 'Parasites',
    type: 'Drama',
    city: 'Vitebsk',
    cityCode: CITY_CODE.VTB,
    date: 'tomorrow',
    dateCode: DATE_CODE.TOMORROW,
    cinemaId: CINEMAS[1]._id,
    time: '15:00',
    hour: 15,
    emptySeats: 1,
  },
];
