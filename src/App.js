import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from 'react-router-dom'
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import StatsTable from './components/stats';
import Navigation from './components/navigation/nav'
import Construction from './components/skills/construction';
import Fletching from './components/skills/fletching';
import General_Graardor from './components/boss/general_graardor';

const BASE_HISCORE_URL = "http://localhost:8080/hiscore"

const BASE_HISCORE_URL2 = "http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player="

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerStats: {skills : [
                {rank: 1, exp: 1, level: 1},{rank: 2, exp: 2, level: 2}
            ]},
            currentPlayer: '',
        }

        this.searchPlayer = this.searchPlayer.bind(this);
    }

    searchPlayer(value) {
        console.log("Searching player: "+value);
        this.setState( {currentPlayer: {value}})
        axios.get(BASE_HISCORE_URL + "?username="+value)
            .then(response => {
                console.log(response.data);
                this.setState(
                    { playerStats: response.data.skills }
                )
            })
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation searchPlayer={this.searchPlayer}/>
                    <main role="main" className="container">
                        <Route exact path="/" render={() => (
                            <StatsTable playerStats={this.state.playerStats} />
                        )} />
                        {/* TODO: move the / route to <Home> and have it conditionally render a name form or stats table */}
                        <Route path="/construction" component={Construction} />
                        <Route path="/fletching" component={Fletching} />
                        <Route path="/general_graardor" component={General_Graardor} />
                    </main>

                </div>
            </HashRouter>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('frame')
);


export default App;