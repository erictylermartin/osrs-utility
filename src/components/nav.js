import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom'


class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/">OSRS Utility</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                <a className="nav-link" href="">Link</a>
                            </li> */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Skill Calculators</a>
                                    <div className="dropdown-menu">
                                        <NavLink className="dropdown-item" to="/construction">Construction</NavLink>
                                        <NavLink className="dropdown-item" to="/fletching">Fletching</NavLink>
                                        <a className="dropdown-item" href="/skills/herblore">Herblore</a>
                                        <a className="dropdown-item" href="/skills/woodcutting">Woodcutting</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Boss Info</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Barrows</a>
                                        <a className="dropdown-item" href="#">Corporeal Beast</a>
                                        <a className="dropdown-item" href="#">Dagannoth Kings</a>
                                        <a className="dropdown-item" href="#">Giant Mole</a>
                                        <a className="dropdown-item" href="#">Kalphite Queen</a>
                                        <a className="dropdown-item" href="#">King Black Dragon</a>
                                        <a className="dropdown-item" href="#">Vorkath</a>
                                        <a className="dropdown-item" href="#">Zulrah</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Commander Zilyana</a>
                                        <NavLink className="dropdown-item" to="/general_graardor">General Graardor</NavLink>
                                        <a className="dropdown-item" href="#">Kree'arra</a>
                                        <a className="dropdown-item" href="#">K'ril Tsutsaroth</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Abyssal Sire</a>
                                        <a className="dropdown-item" href="#">Cerberus</a>
                                        <a className="dropdown-item" href="#">Grotesque Guardians</a>
                                        <a className="dropdown-item" href="#">Kraken</a>
                                        <a className="dropdown-item" href="#">Thermonuclear Smoke Devil</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Callisto</a>
                                        <a className="dropdown-item" href="#">Chaos Elemental</a>
                                        <a className="dropdown-item" href="#">Chaos Fanatic</a>
                                        <a className="dropdown-item" href="#">Crazy Archaeologist</a>
                                        <a className="dropdown-item" href="#">Scorpio</a>
                                        <a className="dropdown-item" href="#">Vet'ion</a>
                                        <a className="dropdown-item" href="#">Venenatis</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input id="searchPlayer" className="form-control mr-sm-2" type="search" placeholder="Enter Player Name" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.searchPlayer}>Search</button>
                            </form>
                        </div>
                    </nav>
        )
    }
}

export default Navigation;