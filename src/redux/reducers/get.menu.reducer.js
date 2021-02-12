const menuReducer = ( state = [], action ) => {
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_MENU':
            return action.payload;    
        default:
            return state;
    }
}

export default menuReducer;