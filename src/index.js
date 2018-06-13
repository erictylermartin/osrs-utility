import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import StatsTable from './stats';


// class PlayerSearch extends React.Component{
    
//         )
//     }
// }

class App extends React.Component {

    //if the player name state has been set
    playerName = "harry";
    if(playerName) {

    }

    render() {
        return ( 
            <h1>outer</h1>
        )
    };
    
};
// class App extends React.Component {
//     render() {
//         return (
            
//         )
//     }
// }


ReactDOM.render(
    <StatsTable />,
    document.getElementById('root')
);

ReactDOM.render(
    <h1>hi there</h1>, document.getElementById('root2')
);
