import {
    SPECIFIC_CONTENT_BEGIN,
    SPECIFIC_CONTENT_SUCCESS,
    SPECIFIC_CONTENT_FAIL
} from "../actions/specificContentActions";

const init = {
    payload: [],
    loading: false,
    err: null
};

const specificContentReducer = (state = init, action) => {
    switch(action.type) {
        case SPECIFIC_CONTENT_BEGIN:
            return {
                ...state,
                loading: true,
                err: null
            };
        case SPECIFIC_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload
            };
        case SPECIFIC_CONTENT_FAIL:
            return {
                ...state,
                loading: false,
                err: action.err
            };
        default:
            return state;
    }
};

export default specificContentReducer;