//base URL
const baseURL = "https://api.rawg.io/api/";

//get date
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}`;
const previousYear = `${currentYear - 1}`;

const popular_games = `games?key=345a2e9f121d4d21970e5bf081c5924e&dates=${previousYear},${currentDate}&ordering=-rating&page_size=6`;
const upcoming_games = `games?key=345a2e9f121d4d21970e5bf081c5924e&dates=${currentDate},${nextYear}&ordering=-added&page_size=6`;
const new_games = `games?key=345a2e9f121d4d21970e5bf081c5924e&dates=${previousYear},${currentDate}&ordering=-released&page_size=6`;

export const popularGamesURL = () => `${baseURL}${popular_games}`;
export const upcomingGamesURL = () => `${baseURL}${upcoming_games}`;
export const newGamesURL = () => `${baseURL}${new_games}`;

export const gameDetailsURL = (game_id) =>
  `${baseURL}games/${game_id}?key=${process.env.REACT_APP_GAME_API}`;

export const gameScreenShotsURL = (game_id) =>
  `${baseURL}games/${game_id}/screenshots?key=${process.env.REACT_APP_GAME_API}`;

// export const gameTrailerURL = (game_id) => `${baseURL}games/${game_id}/movies?key=345a2e9f121d4d21970e5bf081c5924e&`;

// export const suggestedGamesURL = (game_id) => `${baseURL}games/${game_id}/suggested?key=345a2e9f121d4d21970e5bf081c5924e&`;

export const searchGameURL = (game_name) =>
  `${baseURL}games?search=${game_name}&page_size=9&key=${process.env.REACT_APP_GAME_API}`;
