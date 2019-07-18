import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import TvShows from "./components/Tv/TvShows";
import Movies from "./components/Movies/Movies";
import Person from "./components/People/Person";
import People from "./components/People/People";
import Discover from "./components/Discover/Discover";
import Movie from "./components/Movies/Movie";
import TvShow from "./components/Tv/TvShow";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className="main">
                <Route path="/" exact component={Home}/>
                <Route path="discover" exact component={Discover}/>
                <Route path="/movie" exact component={Movies}/>
                <Route path="/movie/:id"  component={Movie}/>
                <Route path="/tv" exact component={TvShows}/>
                <Route path="/tv/:id"  component={TvShow}/>
                <Route path="/person" exact component={People}/>
                <Route path="/person/:id"  component={Person}/>
            </main>
            <Footer/>
        </BrowserRouter>
    )
};

export default App;
