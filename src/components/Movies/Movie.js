import proptypes from "prop-types";
import {connect} from "react-redux";
import React, {Component} from "react";
import ContentDetailsHeader from "../ContentDetailsHeader";
import {getSpecificContent} from "../../modules/actions/specificContentActions"

class Movie extends Component {
    componentDidMount() {
        this.props.getSpecificContent("movie", this.props.match.params.id);
    }

    render() {
        return (
            <div className="component-details">
                <ContentDetailsHeader/>
            </div>
        )
    }
}

Movie.propTypes = {};

const mapStateToProps = state => ({
    movie: state.specificContent.payload,
    loading: state.specificContent.loading,
    err: state.specificContent.err
});

const mapDispatchToProps = {
    getSpecificContent
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);