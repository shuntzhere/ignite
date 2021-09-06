const initialState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched: [],
}

export const gamesReducer = (state=initialState,action) => {
    // always returns the state and takes in two args
    switch (action.type) {
        case "FETCH_GAMES":
            return {...state}
    
        default:
            return {...state};
    }
}