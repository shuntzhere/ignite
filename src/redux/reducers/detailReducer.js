const initialState = {
    gameData: { platforms: [] },
    screenshots: { results: [] },
    isLoading: true,
    // so that you don't encounter propert map of undefined
    // trailer: {},
    // suggested: {},
};

 export const detailReducer = (state = initialState,action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                gameData: action.payload.gameData,
                screenshots: action.payload.screenshots,
                isLoading: false,
                // trailer: action.payload.trailer,
                // suggested: action.payload.suggested,
            };
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state};
    }
}