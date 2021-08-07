import axios from "axios";
import {Popular_GameURL , UpcomingGameURL , NewGameURL,SearchGameurl} from '../api'


export const loadGames = () => async (dispatch) => {


    // Fetch Axios

    const popularData = await axios.get(Popular_GameURL());
    const NewGamesData = await axios.get(NewGameURL());
    const upcomingData = await axios.get(UpcomingGameURL());
    

    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: NewGamesData.data.results,
        }
    })

}


export const FetchSearch = (game_name) => async (dispatch) => {

    const searchGame = await axios.get(SearchGameurl(game_name));

        dispatch({
            type: "FETCH_SEARCHED",
            payload:{
                searched: searchGame.data.results,
            }
        })
}