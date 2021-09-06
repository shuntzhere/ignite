const initialState = {
    popular : [],
    upcoming : [], 
    newGames : [],
    searched: [],
}

export const gamesReducer = (state=initialState,action) => {
    // always returns the state and takes in two args
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            }
    
        default:
            return {...state};
    }
}