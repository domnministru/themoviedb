import uuid from "uuid"
import React from "react";
import Proptypes from "prop-types";
import {IMG_URL, ORIGINAL} from "../const";
import NO_IMG from "../img/no-img.png";


const PeopleListEl = props => {
    const {name, path, known_for} = props;
    const PIC_URL = IMG_URL + ORIGINAL + path;

    return (
        <div className="col s4 m3 l3 xl3">
            <div className="card">
                <div className="card-image">
                    {path ? (<img src={PIC_URL} alt="Movie Poster"/>)
                        : (<img src={NO_IMG} alt="Not Available"/>)
                    }
                </div>
                <div className="card-content">
                    <div className="card-title">
                        {name}
                    </div>
                    {known_for.map(starred =>
                        <i key={uuid()}>{starred.title || starred.name};&nbsp;</i>)
                    }
                </div>
            </div>
        </div>
    )
};

PeopleListEl.propTypes = {
    name: Proptypes.string,
    path: Proptypes.string,
    known_for: Proptypes.array,
};

export default PeopleListEl;