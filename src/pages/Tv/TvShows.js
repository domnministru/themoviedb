import uuid from "uuid";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import React, {Component} from "react";
import ContentListEl from "../../components/ContentListEl";
import {getContent} from "../../modules/actions/contentActions";

class TvShows extends Component {
    componentDidMount() {
        this.props.getContent("tv");
    }

    render() {
        const {err, loading, tvs} = this.props;
        if (err) console.log(err);
        if (loading) console.log("loading");

        return(
            <div className="tvs-page">
                <div className="container">
                    <div className="tvs-list row">
                        {tvs.map(tv => {
                            return(
                                <ContentListEl key = {uuid()}
                                    id = {tv.id}
                                    path = {tv.poster_path}
                                    score = {tv.vote_average}
                                    title = {tv.name}
                                    release = {tv.first_air_date}
                                    description = {tv.overview}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

TvShows.propTypes = {
    id: Proptypes.number,
    poster_path: Proptypes.string,
    vote_average: Proptypes.number,
    name: Proptypes.string,
    first_air_date: Proptypes.string,
    overview: Proptypes.string
};

const mapStateToProps = state => ({
    tvs: state.content.payload,
    loading: state.content.loading,
    err: state.content.err
});

const mapDispatchToProps = {
    getContent
};

export default connect(mapStateToProps,mapDispatchToProps)(TvShows);