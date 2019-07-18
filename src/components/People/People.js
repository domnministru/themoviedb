import uuid from "uuid";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import React, {Component} from "react";
import {getPeople} from "../../modules/actions/peopleActions";
import PeopleListElement from "../PeopleListElement";
import ContentListElement from "../ContentListElement";

class People extends Component {
    componentDidMount() {
        this.props.getPeople();
    }

    render() {
        const {err, loading, people} = this.props;
        const content_type = "person";
        if (err) console.log(err);
        if (loading) console.log("loading");

        return (
            <div className="people-page">
                <div className="container">
                    <div className="people-list row">
                        {people.map(person => {
                            return (
                                <PeopleListElement
                                    key={person.id + uuid()}
                                    id={person.id}
                                    path={person.profile_path}
                                    name={person.name}
                                    known_for={person.known_for}
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

People.propTypes = {
    id: Proptypes.number,
    profile_path: Proptypes.string,
    name: Proptypes.string,
    known_for: Proptypes.string
};

const mapStateToProps = state => ({
    people: state.people.payload,
    loading: state.people.loading,
    err: state.people.err
});

const mapDispatchToProps = {
    getPeople
};

export default connect(mapStateToProps, mapDispatchToProps)(People);