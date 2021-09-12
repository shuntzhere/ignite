import axios from "axios";
import { gameDetailsURL, gameScreenShotsURL } from "../../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const gameDetails = await axios.get(gameDetailsURL(id));
  const screenShots = await axios.get(gameScreenShotsURL(id));
  // const gameTrailer = await axios.get(gameTrailerURL(id));
  // const suggestedGames = await axios.get(suggestedGamesURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      gameData: gameDetails.data,
      screenshots: screenShots.data,
      // trailer: gameTrailer.data,
      // suggested: suggestedGames.data,
    },
  });
};
