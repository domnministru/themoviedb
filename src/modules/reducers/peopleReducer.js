import {
    PEOPLE_BEGIN,
    PEOPLE_SUCCESS,
    PEOPLE_FAIL
} from "../actions/peopleActions";

const init = {
    payload: [{
        known_for: []
    }],
    loading: false,
    err: null
};

const peopleReducer = (state = init, action) => {
    switch(action.type) {
        case PEOPLE_BEGIN:
            return {
                ...state,
                loading: true,
                err: null
            };
        case PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload
            };
        case PEOPLE_FAIL:
            return {
                ...state,
                loading: false,
                err: action.err
            };
        default:
            return state;
    }
};

export default peopleReducer;