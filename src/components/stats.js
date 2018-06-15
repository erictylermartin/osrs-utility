import React from 'react'
// import agility from './skills/agility.png';
// import attack from './skills/attack.png';
// import construction from './skills/construction.png';
// import cooking from './skills/cooking.png';
// import crafting from './skills/crafting.png';
// import defence from './skills/defence.png';
// import farming from './skills/farming.png';
// import firemaking from './skills/firemaking.png';
// import fishing from './skills/fishing.png';
// import fletching from './skills/fletching.png';
// import herblore from './skills/herblore.png';
// import hitpoints from './skills/hitpoints.png';
// import hunter from './skills/hunter.png';
// import magic from './skills/magic.png';
// import mining from './skills/mining.png';
// import prayer from './skills/prayer.png';
// import ranged from './skills/ranged.png';
// import runecrafting from './skills/runecrafting.png';
// import slayer from './skills/slayer.png';
// import smithing from './skills/smithing.png';
// import strength from './skills/strength.png';
// import thieving from './skills/thieving.png';
// import woodcutting from './skills/woodcutting.png';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../skills', false, /\.(png|jpe?g|svg)$/));

let SkillsEnum = Object.freeze({
    properties: {
        "overall": 0, "attack": 1, "defence": 2, "strength": 3, "hitpoints": 4, "ranged": 5, "prayer": 6,
        "magic": 7, "cooking": 8, "woodcutting": 9, "fletching": 10, "fishing": 11, "firemaking": 12,
        "crafting": 13, "smithing": 14, "mining": 15, "herblore": 16, "agility": 17, "thieving": 18,
        "slayer": 19, "farming": 20, "runecrafting": 21, "hunter": 22, "construction": 23
    }
});

let playerSkills = [2277, 1, 2, 4, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 3, 16, 17, 18, 19, 20, 21, 22, 23]

class Skill extends React.Component {

    render() {
        let image1 = this.props.skill1 + ".png"
        let image2 = this.props.skill2 + ".png"
        let image3 = this.props.skill3 + ".png"

        return (
            <tr className='statsRow'>
                <td>
                    <img src={images[image1]} />
                </td>
                <td>
                    {playerSkills[SkillsEnum.properties[this.props.skill1]]}
                </td>
                <td>
                    <img src={images[image2]} />
                </td>
                <td>
                    {playerSkills[SkillsEnum.properties[this.props.skill2]]}
                </td>
                <td>
                    <img src={images[image3]} />
                </td>
                <td>
                    {playerSkills[SkillsEnum.properties[this.props.skill3]]}
                </td>
            </tr>
        );
    }
}

class LastRow extends React.Component {

    render() {
        let image1 = this.props.skill1 + ".png"
        let image2 = this.props.skill2 + ".png"

        return (
            <tr className='statsRow'>
                <td>
                    <img src={images[image1]} />
                </td>
                <td>
                    {playerSkills[SkillsEnum.properties[this.props.skill1]]}
                </td>
                <td>
                    <img src={images[image2]} />
                </td>
                <td>
                    {playerSkills[SkillsEnum.properties[this.props.skill2]]}
                </td>
                <td>
                    Total:
                </td>
                <td>
                    {playerSkills[SkillsEnum.properties[this.props.skill3]]}
                </td>
            </tr>
        );
    }
}

class StatsTable extends React.Component {
    renderSkill(a, b, c) {
        return (
            <Skill skill1={a} skill2={b} skill3={c} />
        );
    }

    renderLastRow(a, b, c) {
        return (
            <LastRow skill1={a} skill2={b} skill3={c}/>
        );
    }

    render() {
        return (
            <div id="stats" >
                <h3>Stats for Erimar</h3>
                <table id="statsTable" >
                    <tbody class="statsTable" >
                        {this.renderSkill("attack", "hitpoints", "mining")}
                        {this.renderSkill("strength", "agility", "smithing")}
                        {this.renderSkill("defence", "herblore", "fishing")}
                        {this.renderSkill("ranged", "thieving", "cooking")}
                        {this.renderSkill("prayer", "crafting", "firemaking")}
                        {this.renderSkill("magic", "fletching", "woodcutting")}
                        {this.renderSkill("runecrafting", "slayer", "farming")}
                        {this.renderLastRow("construction", "hunter", "overall")}
                        {/* <tr class="statsRow">
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

                        </tr> */}

                    </tbody >
                </table >
            </div >
        )
    }
}

export default StatsTable;