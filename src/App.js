import React from "react";

import {BrowserRouter, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import TvShow from "./pages/Tv/TvShow";
import Movie from "./pages/Movies/Movie";
import TvShows from "./pages/Tv/TvShows";
import Movies from "./pages/Movies/Movies";
import Person from "./pages/People/Person";
import People from "./pages/People/People";
import Discover from "./pages/Discover/Discover";

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
