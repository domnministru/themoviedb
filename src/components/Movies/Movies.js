import uuid from "uuid";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import React, {Component} from "react";
import ContentListElement from "../ContentListElement";
import {getContent} from "../../modules/actions/contentActions";

class Movies extends Component {
    componentDidMount() {
        this.props.getContent("movie");
    }

    render() {
        const {err, loading, movies} = this.props;
        const content_type = "movie";
        if (err) console.log(err);
        if (loading) console.log("loading");

        return (
            <div className="movies-page">
                <div className="container">
                    <div className="movies-list row">
                        {movies.map(movie => {
                            return (
                                <ContentListElement
                                    key={uuid()}
                                    id={movie.id}
                                    path={movie.poster_path}
                                    score={movie.vote_average}
                                    title={movie.title}
                                    release={movie.release_date}
                                    description={movie.overview}
                                    content_type={content_type}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

Movies.propTypes = {
    id: Proptypes.number,
    poster_path: Proptypes.string,
    vote_average: Proptypes.number,
    title: Proptypes.string,
    release_date: Proptypes.string,
    overview: Proptypes.string
};

const mapStateToProps = state => ({
    movies: state.content.payload,
    loading: state.content.loading,
    err: state.content.err
});

const mapDispatchToProps = {
    getContent
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);