import axios from "axios";
import {KEY} from "../../cred";
import {BASE_URL} from "../../const";

export const PEOPLE_BEGIN = "PEOPLE_BEGIN";
export const PEOPLE_SUCCESS = "PEOPLE_SUCCESS";
export const PEOPLE_FAIL = "PEOPLE_FAIL";

export const peopleBegin = () => ({
    type: PEOPLE_BEGIN
});

export const peopleSuccess = payload => ({
    type: PEOPLE_SUCCESS,
    payload
});

export const peopleFail = err => ({
    type: PEOPLE_FAIL,
    err
});

export const getPeople = () => {
    return dispatch => {
        dispatch(peopleBegin());
        axios.get(`${BASE_URL}/person/popular?api_key=${KEY}&language=en-US&page=1`)
            .then(res => {
                dispatch(peopleSuccess(res.data.results));
                console.log("People", res.data.results)
            })
            .catch(err => dispatch(peopleFail()));
    };
};