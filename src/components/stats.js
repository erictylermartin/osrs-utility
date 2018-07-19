import React from 'react';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}



const images = importAll(require.context('../skill_images', false, /\.(png|jpe?g|svg)$/));

let SkillsEnum = Object.freeze({
    properties: {
        "overall": 0, "attack": 1, "defence": 2, "strength": 3, "hitpoints": 4, "ranged": 5, "prayer": 6,
        "magic": 7, "cooking": 8, "woodcutting": 9, "fletching": 10, "fishing": 11, "firemaking": 12,
        "crafting": 13, "smithing": 14, "mining": 15, "herblore": 16, "agility": 17, "thieving": 18,
        "slayer": 19, "farming": 20, "runecrafting": 21, "hunter": 22, "construction": 23
    }
});

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
                    {this.props.playerSkills[SkillsEnum.properties[this.props.skill1]]}
                </td>
                <td>
                    <img src={images[image2]} />
                </td>
                <td>
                    {this.props.playerSkills[SkillsEnum.properties[this.props.skill2]]}
                </td>
                <td>
                    <img src={images[image3]} />
                </td>
                <td>
                    {this.props.playerSkills[SkillsEnum.properties[this.props.skill3]]}
                </td>
            </tr>
        );
    }
}

class LastRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let image1 = this.props.skill1 + ".png"
        let image2 = this.props.skill2 + ".png"
        return (
            <tr className='statsRow'>
                <td>
                    <img src={images[image1]} />
                </td>
                <td>
                    {this.props.playerSkills[SkillsEnum.properties[this.props.skill1]]}
                </td>
                <td>
                    <img src={images[image2]} />
                </td>
                <td>
                    {this.props.playerSkills[SkillsEnum.properties[this.props.skill2]]}
                </td>
                <td>
                    Total:
                </td>
                <td>
                    {this.props.playerSkills[SkillsEnum.properties[this.props.skill3]]}
                </td>
            </tr>
        );
    }
}

class StatsTable extends React.Component {
    constructor(props) {
        super(props)

        this.playerSkills = [];
    }
    getPlayerLevels = (skills) => {
        let skillArray = [];
        for (let key in skills) {
            let skill = skills[key]
            skillArray.push(skill.level)
        }
        this.playerSkills = skillArray;
    }

    renderSkill(a, b, c) {
        return (
            <Skill skill1={a} skill2={b} skill3={c} playerSkills={this.playerSkills}/>
        );
    }

    renderLastRow(a, b, c) {
        return (
            <LastRow skill1={a} skill2={b} skill3={c} playerSkills={this.playerSkills}/>
        );
    }

    render() {

        this.getPlayerLevels(this.props.playerStats)
        return (
            <div id="stats" >
                <h3>Stats for Erimar</h3>
                <table id="statsTable" >
                    <tbody className="statsTable" >
                        {this.renderSkill("attack", "hitpoints", "mining")}
                        {this.renderSkill("strength", "agility", "smithing")}
                        {this.renderSkill("defence", "herblore", "fishing")}
                        {this.renderSkill("ranged", "thieving", "cooking")}
                        {this.renderSkill("prayer", "crafting", "firemaking")}
                        {this.renderSkill("magic", "fletching", "woodcutting")}
                        {this.renderSkill("runecrafting", "slayer", "farming")}
                        {this.renderLastRow("construction", "hunter", "overall")}
                    </tbody >
                </table >
            </div >
        )
    }
}

export default StatsTable;