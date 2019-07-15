import React, {Component} from "react";

class SearchField extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">search</i>
                                <textarea id="icon_prefix2" className="materialize-textarea" placeholder="Search..."/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchField;