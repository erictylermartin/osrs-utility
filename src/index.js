import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import StatsTable from './components/stats';
import Construction from './components/construction';
import Fletching from './components/fletching';
import General_Graardor from './components/general_graardor';


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/">OSRS Utility</NavLink>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                {/* <li class="nav-item">
                                <a class="nav-link" href="">Link</a>
                            </li> */}
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Skill Calculators</a>
                                    <div class="dropdown-menu">
                                        <NavLink className="dropdown-item" to="/construction">Construction</NavLink>
                                        <NavLink className="dropdown-item" to="/fletching">Fletching</NavLink>
                                        <a class="dropdown-item" href="/skills/herblore">Herblore</a>
                                        <a class="dropdown-item" href="/skills/woodcutting">Woodcutting</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Boss Info</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Barrows</a>
                                        <a class="dropdown-item" href="#">Corporeal Beast</a>
                                        <a class="dropdown-item" href="#">Dagannoth Kings</a>
                                        <a class="dropdown-item" href="#">Giant Mole</a>
                                        <a class="dropdown-item" href="#">Kalphite Queen</a>
                                        <a class="dropdown-item" href="#">King Black Dragon</a>
                                        <a class="dropdown-item" href="#">Vorkath</a>
                                        <a class="dropdown-item" href="#">Zulrah</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Commander Zilyana</a>
                                        <NavLink className="dropdown-item" to="/general_graardor">General Graardor</NavLink>
                                        <a class="dropdown-item" href="#">Kree'arra</a>
                                        <a class="dropdown-item" href="#">K'ril Tsutsaroth</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Abyssal Sire</a>
                                        <a class="dropdown-item" href="#">Cerberus</a>
                                        <a class="dropdown-item" href="#">Grotesque Guardians</a>
                                        <a class="dropdown-item" href="#">Kraken</a>
                                        <a class="dropdown-item" href="#">Thermonuclear Smoke Devil</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Callisto</a>
                                        <a class="dropdown-item" href="#">Chaos Elemental</a>
                                        <a class="dropdown-item" href="#">Chaos Fanatic</a>
                                        <a class="dropdown-item" href="#">Crazy Archaeologist</a>
                                        <a class="dropdown-item" href="#">Scorpio</a>
                                        <a class="dropdown-item" href="#">Vet'ion</a>
                                        <a class="dropdown-item" href="#">Venenatis</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input id="searchPlayer" class="form-control mr-sm-2" type="search" placeholder="Enter Player Name" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" onclick="searchPlayer()">Search</button>
                            </form>
                        </div>
                    </nav>


                    <main role="main" class="container">
                        <Route exact path="/" component={StatsTable} />
                        <Route path="/construction" component={Construction} />
                        <Route path="/fletching" component={Fletching} />
                        <Route path="/general_graardor" component={General_Graardor} />
                    </main>

                </div>
            </HashRouter>
        );
    }
}

class App2 extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">OSRS Utility</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home
                        <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="">Link</a>
                            </li> */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Skill Calculators</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/skills/construction">Construction</a>
                                    <a class="dropdown-item" href="/skills/fletching">Fletching</a>
                                    <a class="dropdown-item" href="/skills/herblore">Herblore</a>
                                    <a class="dropdown-item" href="/skills/woodcutting">Woodcutting</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Boss Info</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Barrows</a>
                                    <a class="dropdown-item" href="#">Corporeal Beast</a>
                                    <a class="dropdown-item" href="#">Dagannoth Kings</a>
                                    <a class="dropdown-item" href="#">Giant Mole</a>
                                    <a class="dropdown-item" href="#">Kalphite Queen</a>
                                    <a class="dropdown-item" href="#">King Black Dragon</a>
                                    <a class="dropdown-item" href="#">Vorkath</a>
                                    <a class="dropdown-item" href="#">Zulrah</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Kree'arra</a>
                                    <a class="dropdown-item" href="#">Commander Zilyana</a>
                                    <a class="dropdown-item" href="#">General Graardor</a>
                                    <a class="dropdown-item" href="#">Kree'arra</a>
                                    <a class="dropdown-item" href="#">K'ril Tsutsaroth</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Abyssal Sire</a>
                                    <a class="dropdown-item" href="#">Cerberus</a>
                                    <a class="dropdown-item" href="#">Grotesque Guardians</a>
                                    <a class="dropdown-item" href="#">Kraken</a>
                                    <a class="dropdown-item" href="#">Thermonuclear Smoke Devil</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Callisto</a>
                                    <a class="dropdown-item" href="#">Chaos Elemental</a>
                                    <a class="dropdown-item" href="#">Chaos Fanatic</a>
                                    <a class="dropdown-item" href="#">Crazy Archaeologist</a>
                                    <a class="dropdown-item" href="#">Scorpio</a>
                                    <a class="dropdown-item" href="#">Vet'ion</a>
                                    <a class="dropdown-item" href="#">Venenatis</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input id="searchPlayer" class="form-control mr-sm-2" type="search" placeholder="Enter Player Name" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" onclick="searchPlayer()">Search</button>
                        </form>
                    </div>
                </nav>


                <main role="main" class="container">
                    <div id="root2" />
                </main>

                <div id="root" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('frame')
);

