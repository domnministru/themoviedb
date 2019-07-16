import "./App.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import * as serviceWorker from "./serviceWorker";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import peopleReducer from "./modules/reducers/peopleReducer";
import contentReducer from "./modules/reducers/contentReducer";
import specificContentReducer from "./modules/reducers/specificContentReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        content: contentReducer,
        specificContent: specificContentReducer,
        people: peopleReducer,
    }),
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root")
);

serviceWorker.unregister();
