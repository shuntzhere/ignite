const initialState = {
    gameData: {},
    screenshots: {},
    // trailer: {},
    // suggested: {},
};

 export const detailReducer = (state=initialState,action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                gameData: action.payload.gameData,
                screenshots: action.payload.screenshots,
                // trailer: action.payload.trailer,
                // suggested: action.payload.suggested,
            };
        default:
            return {...state};
    }
}