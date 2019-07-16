import axios from "axios";
import {KEY} from "../../cred";
import {BASE_URL} from "../../const";

export const CONTENT_BEGIN = "CONTENT_BEGIN";
export const CONTENT_SUCCESS = "CONTENT_SUCCESS";
export const CONTENT_FAIL = "CONTENT_FAIL";

export const contentBegin = () => ({
    type: CONTENT_BEGIN
});

export const contentSuccess = payload => ({
    type: CONTENT_SUCCESS,
    payload
});

export const contentFail = err => ({
    type: CONTENT_FAIL,
    err
});

export const getContent = (content_type = "tv", category = "popular") => {
    return dispatch => {
        dispatch(contentBegin());
        axios.get(`${BASE_URL}/${content_type}/${category}?api_key=${KEY}&language=en-US&page=1`)
            .then(res => {
                dispatch(contentSuccess(res.data.results));
                console.log("Content: ", res.data.results)
            })
            .catch(err => dispatch(contentFail()));
    };
};