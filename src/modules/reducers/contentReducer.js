import {
    CONTENT_BEGIN,
    CONTENT_SUCCESS,
    CONTENT_FAIL
} from "../actions/contentActions";

const init = {
    payload: [],
    loading: false,
    err: null
};

const contentReducer = (state = init, action) => {
    switch(action.type) {
        case CONTENT_BEGIN:
            return {
                ...state,
                loading: true,
                err: null
            };
        case CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload
            };
        case CONTENT_FAIL:
            return {
                ...state,
                loading: false,
                err: action.err
            };
        default:
            return state;
    }
};

export default contentReducer;