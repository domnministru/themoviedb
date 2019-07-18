import {connect} from "react-redux";
import React, {Component} from "react";
import {getPeople} from "../../modules/actions/peopleActions";
import {getContent} from "../../modules/actions/contentActions";
import FeaturedListElement from "../FeaturedListElement";

class Home extends Component {
    componentDidMount() {
        this.props.getContent();
        this.props.getPeople();
    }

    render() {
        return (
            <div className="home-page">
                <div className="container">
                    <div className="row home-page_captions">
                        <div className="col s6"><h5>On Tv</h5></div>
                        <div className="col s6"><h5>In Theaters</h5></div>
                    </div>
                    <div className="grid">
                        <div className="grid1"></div>
                        <div className="grid2"></div>
                        <div className="grid3"></div>
                        <div className="grid4"></div>
                        <div className="grid5"></div>
                        <div className="grid6"></div>
                    </div>
                    <div className="flexbox">
                        <div className="row">
                            <div className="col s3"><FeaturedListElement/></div>
                            <div className="col s3"><FeaturedListElement/></div>
                            <div className="col s3"><FeaturedListElement/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.content.payload,
    content_loading: state.content.loading,
    content_err: state.content.err,

    people: state.people.payload,
    people_loading: state.people.loading,
    people_err: state.people.err
});

const mapDispatchToProps = {
    getContent,
    getPeople
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);