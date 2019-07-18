import React from "react";
import "../styles/components/_FeaturedListEl.scss"

const FeaturedListElement = (props) => {
    return (
        <div className="featured-list-el">
            <div className="featured-list-el_img">{}</div>
            <div className="featured-list-el_content">
                <div className="featured-list-el_caption">The Name of The List</div>
                <div className="featured-list-el_text">here will be text about lists</div>
            </div>
        </div>
    )
};

export default FeaturedListElement;