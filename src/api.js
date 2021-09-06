//base URL
const baseURL = "https://api.rawg.io/api/";

//get date
const getCurrentMonth = () => {
    const month = new Date().getMonth();
    if (month < 10) {
        return `0${month}`
    }else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    }else {
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}`;
const previousYear = `${currentYear - 1}`;

const popular_games = `games?key=345a2e9f121d4d21970e5bf081c5924e&dates=${previousYear},${currentDate}&ordering=-rating&page_size=10`; 

export const popularGamesURL = () => `${baseURL}${popular_games}`;
