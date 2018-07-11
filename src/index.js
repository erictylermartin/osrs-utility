import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from 'react-router-dom'
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import StatsTable from './components/stats';
import Navigation from './components/nav'
import Construction from './components/construction';
import Fletching from './components/fletching';
import General_Graardor from './components/general_graardor';

const BASE_HISCORE_URL = "http://localhost:8080/hiscore"

const BASE_HISCORE_URL2 = "http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player="

// class RetrieveStats extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             blob: ''
//         }

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick () {
//         axios.get(BASE_HISCORE_URL+"?username=erimar")
//           .then(response => 
//             this.props.playerStats = 
//             console.log(response.data))
//       }

//     render() {
//         return (
//             <div id="statsJson">
//                 <button onClick={this.handleClick}>Get Stats Here</button>
//                 <p>{this.state.blob}</p>
//             </div>
//         );
//     }
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerStats: {skills : [
                {rank: 1, exp: 1, level: 1},{rank: 2, exp: 2, level: 2}
            ]},
        }
    }



    // getStats() {
    //     return (
    //         <RetrieveStats playerStats={this.state.playerStats}/>
    //     );
    // }

    getPlayerStats = () => {
        axios.get(BASE_HISCORE_URL + "?username=erimar")
            .then(response => {
                console.log(response.data);
                this.setState(
                    { playerStats: response.data.skills }
                )
            })


    }

    searchPlayer() {
        return (
            <div></div>
        )
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation />
                    <button onClick={this.getPlayerStats}>Click Me For Stats</button>
                    <main role="main" className="container">
                        <Route exact path="/" render={() => (
                            <StatsTable playerStats={this.state.playerStats} />
                        )} />
                        <Route path="/construction" component={Construction} />
                        <Route path="/fletching" component={Fletching} />
                        <Route path="/general_graardor" component={General_Graardor} />
                    </main>

                </div>
            </HashRouter>
        );
    }
}

// class App2 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <a className="navbar-brand" href="/">OSRS Utility</a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                         aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="/">Home
//                         <span className="sr-only">(current)</span>
//                                 </a>
//                             </li>
//                             {/* <li className="nav-item">
//                                 <a className="nav-link" href="">Link</a>
//                             </li> */}
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Skill Calculators</a>
//                                 <div className="dropdown-menu">
//                                     <a className="dropdown-item" href="/skills/construction">Construction</a>
//                                     <a className="dropdown-item" href="/skills/fletching">Fletching</a>
//                                     <a className="dropdown-item" href="/skills/herblore">Herblore</a>
//                                     <a className="dropdown-item" href="/skills/woodcutting">Woodcutting</a>
//                                 </div>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Boss Info</a>
//                                 <div className="dropdown-menu">
//                                     <a className="dropdown-item" href="#">Barrows</a>
//                                     <a className="dropdown-item" href="#">Corporeal Beast</a>
//                                     <a className="dropdown-item" href="#">Dagannoth Kings</a>
//                                     <a className="dropdown-item" href="#">Giant Mole</a>
//                                     <a className="dropdown-item" href="#">Kalphite Queen</a>
//                                     <a className="dropdown-item" href="#">King Black Dragon</a>
//                                     <a className="dropdown-item" href="#">Vorkath</a>
//                                     <a className="dropdown-item" href="#">Zulrah</a>
//                                     <div className="dropdown-divider"></div>
//                                     <a className="dropdown-item" href="#">Kree'arra</a>
//                                     <a className="dropdown-item" href="#">Commander Zilyana</a>
//                                     <a className="dropdown-item" href="#">General Graardor</a>
//                                     <a className="dropdown-item" href="#">Kree'arra</a>
//                                     <a className="dropdown-item" href="#">K'ril Tsutsaroth</a>
//                                     <div className="dropdown-divider"></div>
//                                     <a className="dropdown-item" href="#">Abyssal Sire</a>
//                                     <a className="dropdown-item" href="#">Cerberus</a>
//                                     <a className="dropdown-item" href="#">Grotesque Guardians</a>
//                                     <a className="dropdown-item" href="#">Kraken</a>
//                                     <a className="dropdown-item" href="#">Thermonuclear Smoke Devil</a>
//                                     <div className="dropdown-divider"></div>
//                                     <a className="dropdown-item" href="#">Callisto</a>
//                                     <a className="dropdown-item" href="#">Chaos Elemental</a>
//                                     <a className="dropdown-item" href="#">Chaos Fanatic</a>
//                                     <a className="dropdown-item" href="#">Crazy Archaeologist</a>
//                                     <a className="dropdown-item" href="#">Scorpio</a>
//                                     <a className="dropdown-item" href="#">Vet'ion</a>
//                                     <a className="dropdown-item" href="#">Venenatis</a>
//                                 </div>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="#">Disabled</a>
//                             </li>
//                         </ul>
//                         <form className="form-inline my-2 my-lg-0">
//                             <input id="searchPlayer" className="form-control mr-sm-2" type="search" placeholder="Enter Player Name" aria-label="Search" />
//                             <button className="btn btn-outline-success my-2 my-sm-0" onclick="searchPlayer()">Search</button>
//                         </form>
//                     </div>
//                 </nav>


//                 <main role="main" className="container">
//                     <div id="root2" />
//                 </main>

//                 <div id="root" />
//             </div>
//         );
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('frame')
);

