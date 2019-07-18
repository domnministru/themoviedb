import React from "react"

const ContentDetailsHeader = props => {
    return(
        <div className="content-details-header">
            <div className="container">
                <img src="" alt=""/>
                <div className="details">
                    <h1>Name(year)</h1>
                    <div className="interactions">
                        buttons and shit
                    </div>
                    <div className="overview">
                        <h5>overview</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eius eos exercitationem maiores nihil officiis pariatur.
                            Ad at corporis, doloribus dolorum error ipsum libero nam nobis optio,
                            quibusdam rem rerum voluptate?</p>
                    </div>
                    <div className="crew">
                        <h5>crew</h5>
                        <span className="crew-member">
                            <p className="b">name</p>
                            <p>job</p>
                        </span>
                        <span className="crew-member">
                            <p className="b">name</p>
                            <p>job</p>
                        </span>
                        <span className="crew-member">
                            <p className="b">name</p>
                            <p>job</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContentDetailsHeader;