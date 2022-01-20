import createDataContext from "./createDataContext";

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart':
            return [
                ...state,
                {
                    id: action.payload.id,
                    count: action.payload.count,
                }
            ]
        case 'deleteFromCart':
            return state.filter((cake) => cake.id !== action.payload);
        case 'editInCart':
            return state.map((cake) => {
                return cake.id === action.payload.id ? action.payload : cake;
            });
        default:
            return state;
    }
}

const addToCart = (dispatch) => {
    return (id, count) => {
        dispatch({type: 'addToCart', payload: {id, count}});
    };
}

const deleteFromCart = (dispatch) => {
    return (id) => {
        dispatch({type: 'deleteFromCart', payload: {id}});
    };
}

const editInCart = (dispatch) => {
    return (id, count) => {
        dispatch({
            type: 'editInCart',
            payload: {id, count},
        });
    };
}

export const {Context, Provider} = createDataContext(
    cartReducer,
    {addToCart, deleteFromCart, editInCart},
    [{}]
);