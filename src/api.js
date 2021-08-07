// Base URL
const key = "" // set here your key
const base_url = 'https://api.rawg.io/api'

// Ottenimento Data
const GetCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    
        if (month < 10) return `0${month}`;
        else return month;

}

const GetCurrentDay = () => {
    const day = new Date().getDate();
    
        if (day < 10) return `0${day}`;
        else return day;
        
}


// Current day/month/year

const CurrentYear = new Date().getFullYear();
const CurrentMonth = GetCurrentMonth();
const CurrentDay = GetCurrentDay();
const currentdate = `${CurrentYear}-${CurrentMonth}-${CurrentDay}`
const lastYear = `${CurrentYear - 1}-${CurrentMonth}-${CurrentDay}`
const nextYear = `${CurrentYear + 1}-${CurrentMonth}-${CurrentDay}`

// Popular Games

const Popular_Games = `/games?key=${key}&dates=${lastYear},${currentdate}&ordering=-rating&page_size=10`
const Upcoming_Games = `/games?key=${key}&dates=${currentdate},${nextYear}&ordering=-added&page_size=10`
const New_Games = `/games?key=${key}&dates=${lastYear},${currentdate}&ordering=-released&page_size=10`


export const Popular_GameURL = () => `${base_url}${Popular_Games}`
export const UpcomingGameURL = () => `${base_url}${Upcoming_Games}`
export const NewGameURL = () => `${base_url}${New_Games}`

// Game Details 

export const GameDetailsURL = (gameid) => `${base_url}/games/${gameid}?key=${key}`

// Game Screen

export const GameScreenshotURL = (gameid) => `${base_url}/games/${gameid}/screenshots?key=${key}`

export const SearchGameurl= (game_name) => `${base_url}/games?search=${game_name}&key=${key}&page_size=9`
