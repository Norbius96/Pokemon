import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';
import Search from './components/Search';

function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/:regionName" component={PokemonList} />
                    <Route exact path="/:regionName/:name" component={PokemonDetail} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
