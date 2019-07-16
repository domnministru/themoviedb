import axios from "axios";
import {KEY} from "../../cred";
import {BASE_URL} from "../../const";

export const SPECIFIC_CONTENT_BEGIN = "SPECIFIC_CONTENT_BEGIN";
export const SPECIFIC_CONTENT_SUCCESS = "SPECIFIC_CONTENT_SUCCESS";
export const SPECIFIC_CONTENT_FAIL = "SPECIFIC_CONTENT_FAIL";

export const specificContentBegin = () => ({
    type: SPECIFIC_CONTENT_BEGIN
});

export const specificContentSuccess = payload => ({
    type: SPECIFIC_CONTENT_SUCCESS,
    payload
});

export const specificContentFail = err => ({
    type: SPECIFIC_CONTENT_FAIL,
    err
});

export const content = (content_type = null, id = null) => {
    return dispatch => {
        dispatch(specificContentBegin());
        axios.get(`${BASE_URL}/${content_type}/${id}?api_key=${KEY}&language=en-US`)
            .then(res => {
                dispatch(specificContentSuccess(res.data.results));
                console.log("This Content: ", res.data.results)
            })
            .catch(err => dispatch(specificContentFail()));
    };
};