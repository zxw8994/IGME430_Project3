let characterRenderer;   // Domo Renderer component
let characterForm;       // Domo Add Form Render Component
let CharacterFormClass;  // Domo Form React UI class
let CharacterListClass;  // Domo List React UI class

const handleCharacter = (e) => {
    e.preventDefault();
    
    //$("#domoMessage").animate({width:'hide'},350);
    
    // NEWLY ADDED || $("#domoJob").val() == ''
    
    
    sendAjax('POST', $("#characterForm").attr("action"), $("#characterForm").serialize(), function() {
       characterRenderer.loadCharactersFromServer(); 
    });
    
    return false;
};

const renderCharacter = function() {
  return (
    <form id="characterForm"
        onSubmit={this.handleSubmit}
        name="characterForm"
        action="/maker"
        method="POST"
        className="characterForm"
    >
        <label htmlFor="name">Name: </label>
        <input id="characterName" type="text" name="name" placeholder="Character Name"/>
        <label htmlFor="job">Class: </label>    
        <select id="characterJob" name="job">
            <option value="Barbarian">Barbarian</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Druid">Druid</option>
            <option value="Fighter">Fighter</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Warlock">Warlock</option>
            <option value="Wizard">Wizard</option>
        </select>
        <input type="hidden" name="_csrf" value={this.props.csrf} />
        <input className="makeCharacterSubmit" type="submit" value="Make Character" />
      </form>
  );
};


const renderCharacterList = function() {
    if(this.state.data.length === 0) {
        return (
            <div className="characterList">
                <h3 className="emptyCharacter">No Characters yet</h3>
            </div>
        );
    }
    //onSubmit={() => {this.handleSubmit(character._id);}
    const characterNodes = this.state.data.map(function(character) {
        return (
            <div key={character._id}
            
            className="character" name="character" 
            method="POST" action="/editor"
            >
            <input id="updateCharacter" type="submit" value="Save(Not Working)" />    
            <h3 className="characterName"> Name: {character.name} </h3>
            <h3 className="characterJob"> Class {character.job} </h3>
            <h3 className="characterLevel"> Level: {character.level} </h3>
                <div id="attributeDiv">
                    <label className="attribute" htmlFor="str">Strength: </label>
                    <input className="attribute" id="characterStr" type="text" name="str" value={character.str} placeholder="10"/>
                    <label className="attribute" htmlFor="dex">Dextarity: </label>
                    <input className="attribute" id="characterDex" type="text" name="dex" value={character.dex} placeholder="10"/>
                    <label className="attribute" htmlFor="con">Constitution: </label>
                    <input className="attribute" id="characterCon" type="text" name="con" value={character.con} placeholder="10"/>
                    <label className="attribute" htmlFor="inte">Intelligence: </label>
                    <input className="attribute" id="characterInte" type="text" name="inte" value={character.inte} placeholder="10"/>
                    <label className="attribute" htmlFor="wis">Wisdom: </label>
                    <input className="attribute" id="characterWis" type="text" name="wis" value={character.wis} placeholder="10"/>
                    <label className="attribute" htmlFor="cha">Charisma: </label>
                    <input className="attribute" id="characterCha" type="text" name="cha" value={character.cha} placeholder="10"/>
                </div>
                <div id="stuffDiv">
                    <label className="stuff" htmlFor="ac">Armor Class: </label>
                    <input className="stuff" id="characterAC" type="text" name="ac" value={character.ac} placeholder="10"/>
                    <label className="stuff" htmlFor="speed">Speed: </label>
                    <input className="stuff" id="characterSpd" type="text" name="spd" value={character.speed} placeholder="30"/>
                    <label className="stuff" htmlFor="initiative">Initiative: </label>
                    <input className="stuff" id="characterInit" type="text" name="initiative" value={character.initiative} placeholder="0"/>
                    <label className="stuff" htmlFor="proB">Proficiancy Bonus: </label>
                    <input className="stuff" id="characterProB" type="text" name="proB" value={character.proB} placeholder="2"/>
                </div>
                <div id="skillDiv">
                    <label htmlFor="acrobatics">Acrobatics: </label>
                    <input type="checkbox" className="characterSkills" id="acro"  name="acrobatics"/>
                    <label htmlFor="animal">Animal Handling: </label>
                    <input type="checkbox" className="characterSkills" id="animal" name="animal"/>
                    <label htmlFor="arcana">Arcana: </label>
                    <input type="checkbox" className="characterSkills" id="arcana" name="arcana"/>
                    <label htmlFor="athletics">Athletics: </label>
                    <input type="checkbox" className="characterSkills" id="athletics" name="athletics"/>
                    <label htmlFor="deception">Deception: </label>
                    <input type="checkbox" className="characterSkills" id="deception" name="deception"/>
                    <label htmlFor="history">History: </label>
                    <input type="checkbox" className="characterSkills" id="history" name="history"/>
                    <label htmlFor="insight">Insight: </label>
                    <input type="checkbox" className="characterSkills" id="insight" name="insight"/>
                    <label htmlFor="intimidation">Intimidation: </label>
                    <input type="checkbox" className="characterSkills" id="intimidation" name="intimidation"/>
                    <label htmlFor="investigation">Investigation: </label>
                    <input type="checkbox" className="characterSkills" id="investigation" name="investigation"/>
                    <label htmlFor="medicine">Medicine: </label>
                    <input type="checkbox" className="characterSkills" id="medicine" name="medicine"/>
                    <label htmlFor="nature">Nature: </label>
                    <input type="checkbox" className="characterSkills" id="nature" name="nature"/>
                    <label htmlFor="perception">Perception: </label>
                    <input type="checkbox" className="characterSkills" id="perception" name="perception"/>
                    <label htmlFor="performance">Performance: </label>
                    <input type="checkbox" className="characterSkills" id="performance" name="performance"/>
                    <label htmlFor="persuasion">Persuasion: </label>
                    <input type="checkbox" className="characterSkills" id="persuasion" name="persuasion"/>
                    <label htmlFor="religion">Religion: </label>
                    <input type="checkbox" className="characterSkills" id="religion" name="religion"/>
                    <label htmlFor="sleight">Sleight of Hand: </label>
                    <input type="checkbox" className="characterSkills" id="sleight" name="sleight"/>
                    <label htmlFor="stealth">Stealth: </label>
                    <input type="checkbox" className="characterSkills" id="stealth" name="stealth"/>
                    <label htmlFor="survival">Survival: </label>
                    <input type="checkbox" className="characterSkills" id="survival" name="survival"/>
                </div>
                <div id="thingsDiv">
                    <label htmlFor="spell">Spells: </label>
                    <textarea className="characterSpells" name="spell" rows="10" cols="15">  </textarea>
                    <label htmlFor="feat">Features: </label>
                    <textarea className="characterFeats" name="feat" rows="10" cols="15"> </textarea>
                </div>
            <input type="hidden" name="_id" value={character._id} />
            <input id="sendCharacter" type="text" placeholder="Enter Another Username"/>
            <input className="sendCharacter" type="submit" value="Copy Character(Not Working)" />
            </div>        
        );                  
    });
    
    return (
        <div className="characterList">
            {characterNodes}
        </div>
    );
};


const setup = function(csrf) {
    CharacterFormClass = React.createClass({
       handleSubmit: handleCharacter,
       render: renderCharacter,
    });
    
    CharacterListClass = React.createClass({
       loadCharactersFromServer: function() {
         sendAjax('GET','/getCharacters',null, function(data) {
            this.setState({data:data.characters}); 
         }.bind(this));
       },
       getInitialState: function() {
         return {data: []};  
       },
       componentDidMount: function() {
         this.loadCharactersFromServer();  
       },
        render: renderCharacterList
    });
    
    characterForm = ReactDOM.render(
        <CharacterFormClass csrf={csrf} />, document.querySelector("#makeCharacter")
    );
    
    characterRenderer = ReactDOM.render(
        <CharacterListClass />, document.querySelector("#characters")
    );
};

const getToken = () => {
    sendAjax('GET', '/getToken', null, (result) => {
       setup(result.csrfToken); 
    });
}

$(document).ready(function() {
   getToken(); 
});









