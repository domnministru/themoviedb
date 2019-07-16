import React from "react";
import {IMG_URL, W185} from "../const";
import NO_IMG from "../img/no-img.png";
import "../styles/components/_ContentListEl.scss";

const ContentListEl = props => {
    console.log("getContent props: ", props);
    const {path, score, title, release, description} = props;
    const PIC_URL = IMG_URL + W185 + path;

    return (
        <div className="content-list-el col s12 m6 l6 xl6">
            <div className="card horizontal">
                <div className="card-image">
                    {path ? (<img src={PIC_URL} alt="Movie Poster"/>)
                        :   (<img src={NO_IMG} alt="Not Available"/>)
                    }
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <div className="card-header">
                            <div className="content-list-el_rating-badge">{score}</div>
                            <h5 className="content-title b">{title}</h5>
                            <p className="content-first-release">{release}</p>
                        </div>
                        <p className="card-text">
                            {description}
                        </p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContentListEl;

