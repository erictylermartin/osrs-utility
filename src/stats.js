import React from 'react'
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

// class Skill extends React.Component {
//     render() {
//         return (
//             <img src={this.props.sid} /><p>
//         )
//     }
// }

class StatsTable extends React.Component {
    render() {
        return (
            <div id="stats" >
                <h3>Stats for Erimar</h3>
                <table id="statsTable" >
                    <tbody class="statsTable" >
                        <tr class="statsRow" >
                            <td id="attackImg">
                                <img src={attack} />
                            </td>
                            <td id="attackStat">
                                99
                                </td>
                            <td>
                                <img src={hitpoints} />
                            </td>
                            <td id="hitpointsStat">
                                99
                                </td>
                            <td>
                                <img src={mining} />
                            </td>
                            <td id="miningStat">
                                99
                                </td>
                        </tr>
                        <tr class="statsRow">
                            <td>
                                <img src={strength} />
                            </td>
                            <td id="strengthStat">
                                99
                                </td>
                            <td>
                                <img src={agility} />
                            </td>
                            <td id="agilityStat">
                                99
                                </td>
                            <td>
                                <img src={smithing} />
                            </td>
                            <td id="smithingStat">
                                99
                                </td>
                        </tr>
                        <tr class="statsRow">
                            <td>
                                <img src={defence} />
                            </td>
                            <td id="defenceStat">
                                99
                                </td>
                            <td>
                                <img src={herblore} />
                            </td>
                            <td id="herbloreStat">
                                99
                                </td>
                            <td>
                                <img src={fishing} />
                            </td>
                            <td id="fishingStat">
                                99
                                </td>
                        </tr>
                        <tr class="statsRow">
                            <td>
                                <img src={ranged} />
                            </td>
                            <td id="rangedStat">
                                99
                                </td>
                            <td>
                                <img src={thieving} />
                            </td>
                            <td id="thievingStat">
                                99
                                </td>
                            <td>
                                <img src={cooking} />
                            </td>
                            <td id="cookingStat">
                                99
                                </td>
                        </tr>
                        <tr class="statsRow">
                            <td>
                                <img src={prayer} />
                            </td>
                            <td id="prayerStat">
                                99
                                </td>
                            <td>
                                <img src={crafting} />
                            </td>
                            <td id="craftingStat">
                                99
                                </td>
                            <td>
                                <img src={firemaking} />
                            </td>
                            <td id="firemakingStat">
                                99
                                </td>
                        </tr>
                        <tr class="statsRow">
                            <td>
                                <img src={magic} />
                            </td>
                            <td id="magicStat">
                                99
                                </td>
                            <td>
                                <img src={fletching} />
                            </td>
                            <td id="fletchingStat">
                                99
                                </td>
                            <td>
                                <img src={woodcutting} />
                            </td>
                            <td id="woodcuttingStat">
                                99
                                </td>
                        </tr>
                        <tr class="statsRow">
                            <td>
                                <img src={runecrafting} />
                            </td>
                            <td id="runecraftingStat">
                                99
                                </td>
                            <td>
                                <img src={slayer} />
                            </td>
                            <td id="slayerStat">
                                99
                                </td>
                            <td>
                                <img src={farming} />
                            </td>
                            <td id="farmingStat">
                                99
                                </td>
                        </tr>
                        <tr class="statsRow">
                            <td>
                                <img src={construction} />
                            </td>
                            <td id="constructionStat">
                                99
                                </td>
                            <td>
                                <img src={hunter} />
                            </td>
                            <td id="hunterStat">
                                99
                                </td>
                            <td>
                                Total:
                                </td>
                            <td id="totalStat">
                                2277
                                </td>
                        </tr>
                    </tbody >
                </table >
            </div >
        )
    }
}

export default StatsTable;