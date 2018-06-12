import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import agility from './skills/agility.png';
import attack from './skills/attack.png';
import construction from './skills/construction.png';
import cooking from './skills/cooking.png';
import crafting from './skills/crafting.png';
import defence from './skills/defence.png';
import farming from './skills/farming.png';
import firemaking from './skills/firemaking.png';
import fishing from './skills/fishing.png';
import fletching from './skills/fletching.png';
import herblore from './skills/herblore.png';
import hitpoints from './skills/hitpoints.png';
import hunter from './skills/hunter.png';
import magic from './skills/magic.png';
import mining from './skills/mining.png';
import prayer from './skills/prayer.png';
import ranged from './skills/ranged.png';
import runecrafting from './skills/runecrafting.png';
import slayer from './skills/slayer.png';
import smithing from './skills/smithing.png';
import strength from './skills/strength.png';
import thieving from './skills/thieving.png';
import woodcutting from './skills/woodcutting.png';



// class App extends React.Component {
//     render() {
//         return (
            
//         )
//     }
// }
class StatsImage extends React.Component {
    render() {
        return (
            <img src={attack} alt="Attack" />
        )
    }
}

ReactDOM.render(
    <StatsImage />,
    document.getElementById('root')
);