"use strict";

var characterRenderer = void 0; // Domo Renderer component
var characterForm = void 0; // Domo Add Form Render Component
var CharacterFormClass = void 0; // Domo Form React UI class
var CharacterListClass = void 0; // Domo List React UI class

var handleCharacter = function handleCharacter(e) {
    e.preventDefault();

    //$("#domoMessage").animate({width:'hide'},350);

    // NEWLY ADDED || $("#domoJob").val() == ''


    sendAjax('POST', $("#characterForm").attr("action"), $("#characterForm").serialize(), function () {
        characterRenderer.loadCharactersFromServer();
    });

    return false;
};

var renderCharacter = function renderCharacter() {
    return React.createElement(
        "form",
        { id: "characterForm",
            onSubmit: this.handleSubmit,
            name: "characterForm",
            action: "/maker",
            method: "POST",
            className: "characterForm"
        },
        React.createElement(
            "label",
            { htmlFor: "name" },
            "Name: "
        ),
        React.createElement("input", { id: "characterName", type: "text", name: "name", placeholder: "Character Name" }),
        React.createElement(
            "label",
            { htmlFor: "job" },
            "Class: "
        ),
        React.createElement(
            "select",
            { id: "characterJob", name: "job" },
            React.createElement(
                "option",
                { value: "Barbarian" },
                "Barbarian"
            ),
            React.createElement(
                "option",
                { value: "Bard" },
                "Bard"
            ),
            React.createElement(
                "option",
                { value: "Cleric" },
                "Cleric"
            ),
            React.createElement(
                "option",
                { value: "Druid" },
                "Druid"
            ),
            React.createElement(
                "option",
                { value: "Fighter" },
                "Fighter"
            ),
            React.createElement(
                "option",
                { value: "Monk" },
                "Monk"
            ),
            React.createElement(
                "option",
                { value: "Paladin" },
                "Paladin"
            ),
            React.createElement(
                "option",
                { value: "Ranger" },
                "Ranger"
            ),
            React.createElement(
                "option",
                { value: "Rogue" },
                "Rogue"
            ),
            React.createElement(
                "option",
                { value: "Sorcerer" },
                "Sorcerer"
            ),
            React.createElement(
                "option",
                { value: "Warlock" },
                "Warlock"
            ),
            React.createElement(
                "option",
                { value: "Wizard" },
                "Wizard"
            )
        ),
        React.createElement("input", { type: "hidden", name: "_csrf", value: this.props.csrf }),
        React.createElement("input", { className: "makeCharacterSubmit", type: "submit", value: "Make Character" })
    );
};

var renderCharacterList = function renderCharacterList() {
    if (this.state.data.length === 0) {
        return React.createElement(
            "div",
            { className: "characterList" },
            React.createElement(
                "h3",
                { className: "emptyCharacter" },
                "No Characters yet"
            )
        );
    }
    //onSubmit={() => {this.handleSubmit(character._id);}
    var characterNodes = this.state.data.map(function (character) {
        return React.createElement(
            "div",
            { key: character._id,

                className: "character", name: "character",
                method: "POST", action: "/editor"
            },
            React.createElement("input", { id: "updateCharacter", type: "submit", value: "Save(Not Working)" }),
            React.createElement(
                "h3",
                { className: "characterName" },
                " Name: ",
                character.name,
                " "
            ),
            React.createElement(
                "h3",
                { className: "characterJob" },
                " Class ",
                character.job,
                " "
            ),
            React.createElement(
                "h3",
                { className: "characterLevel" },
                " Level: ",
                character.level,
                " "
            ),
            React.createElement(
                "div",
                { id: "attributeDiv" },
                React.createElement(
                    "label",
                    { className: "attribute", htmlFor: "str" },
                    "Strength: "
                ),
                React.createElement("input", { className: "attribute", id: "characterStr", type: "text", name: "str", value: character.str, placeholder: "10" }),
                React.createElement(
                    "label",
                    { className: "attribute", htmlFor: "dex" },
                    "Dextarity: "
                ),
                React.createElement("input", { className: "attribute", id: "characterDex", type: "text", name: "dex", value: character.dex, placeholder: "10" }),
                React.createElement(
                    "label",
                    { className: "attribute", htmlFor: "con" },
                    "Constitution: "
                ),
                React.createElement("input", { className: "attribute", id: "characterCon", type: "text", name: "con", value: character.con, placeholder: "10" }),
                React.createElement(
                    "label",
                    { className: "attribute", htmlFor: "inte" },
                    "Intelligence: "
                ),
                React.createElement("input", { className: "attribute", id: "characterInte", type: "text", name: "inte", value: character.inte, placeholder: "10" }),
                React.createElement(
                    "label",
                    { className: "attribute", htmlFor: "wis" },
                    "Wisdom: "
                ),
                React.createElement("input", { className: "attribute", id: "characterWis", type: "text", name: "wis", value: character.wis, placeholder: "10" }),
                React.createElement(
                    "label",
                    { className: "attribute", htmlFor: "cha" },
                    "Charisma: "
                ),
                React.createElement("input", { className: "attribute", id: "characterCha", type: "text", name: "cha", value: character.cha, placeholder: "10" })
            ),
            React.createElement(
                "div",
                { id: "stuffDiv" },
                React.createElement(
                    "label",
                    { className: "stuff", htmlFor: "ac" },
                    "Armor Class: "
                ),
                React.createElement("input", { className: "stuff", id: "characterAC", type: "text", name: "ac", value: character.ac, placeholder: "10" }),
                React.createElement(
                    "label",
                    { className: "stuff", htmlFor: "speed" },
                    "Speed: "
                ),
                React.createElement("input", { className: "stuff", id: "characterSpd", type: "text", name: "spd", value: character.speed, placeholder: "30" }),
                React.createElement(
                    "label",
                    { className: "stuff", htmlFor: "initiative" },
                    "Initiative: "
                ),
                React.createElement("input", { className: "stuff", id: "characterInit", type: "text", name: "initiative", value: character.initiative, placeholder: "0" }),
                React.createElement(
                    "label",
                    { className: "stuff", htmlFor: "proB" },
                    "Proficiancy Bonus: "
                ),
                React.createElement("input", { className: "stuff", id: "characterProB", type: "text", name: "proB", value: character.proB, placeholder: "2" })
            ),
            React.createElement(
                "div",
                { id: "skillDiv" },
                React.createElement(
                    "label",
                    { htmlFor: "acrobatics" },
                    "Acrobatics: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "acro", name: "acrobatics" }),
                React.createElement(
                    "label",
                    { htmlFor: "animal" },
                    "Animal Handling: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "animal", name: "animal" }),
                React.createElement(
                    "label",
                    { htmlFor: "arcana" },
                    "Arcana: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "arcana", name: "arcana" }),
                React.createElement(
                    "label",
                    { htmlFor: "athletics" },
                    "Athletics: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "athletics", name: "athletics" }),
                React.createElement(
                    "label",
                    { htmlFor: "deception" },
                    "Deception: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "deception", name: "deception" }),
                React.createElement(
                    "label",
                    { htmlFor: "history" },
                    "History: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "history", name: "history" }),
                React.createElement(
                    "label",
                    { htmlFor: "insight" },
                    "Insight: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "insight", name: "insight" }),
                React.createElement(
                    "label",
                    { htmlFor: "intimidation" },
                    "Intimidation: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "intimidation", name: "intimidation" }),
                React.createElement(
                    "label",
                    { htmlFor: "investigation" },
                    "Investigation: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "investigation", name: "investigation" }),
                React.createElement(
                    "label",
                    { htmlFor: "medicine" },
                    "Medicine: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "medicine", name: "medicine" }),
                React.createElement(
                    "label",
                    { htmlFor: "nature" },
                    "Nature: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "nature", name: "nature" }),
                React.createElement(
                    "label",
                    { htmlFor: "perception" },
                    "Perception: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "perception", name: "perception" }),
                React.createElement(
                    "label",
                    { htmlFor: "performance" },
                    "Performance: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "performance", name: "performance" }),
                React.createElement(
                    "label",
                    { htmlFor: "persuasion" },
                    "Persuasion: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "persuasion", name: "persuasion" }),
                React.createElement(
                    "label",
                    { htmlFor: "religion" },
                    "Religion: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "religion", name: "religion" }),
                React.createElement(
                    "label",
                    { htmlFor: "sleight" },
                    "Sleight of Hand: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "sleight", name: "sleight" }),
                React.createElement(
                    "label",
                    { htmlFor: "stealth" },
                    "Stealth: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "stealth", name: "stealth" }),
                React.createElement(
                    "label",
                    { htmlFor: "survival" },
                    "Survival: "
                ),
                React.createElement("input", { type: "checkbox", className: "characterSkills", id: "survival", name: "survival" })
            ),
            React.createElement(
                "div",
                { id: "thingsDiv" },
                React.createElement(
                    "label",
                    { htmlFor: "spell" },
                    "Spells: "
                ),
                React.createElement(
                    "textarea",
                    { className: "characterSpells", name: "spell", rows: "10", cols: "15" },
                    "  "
                ),
                React.createElement(
                    "label",
                    { htmlFor: "feat" },
                    "Features: "
                ),
                React.createElement(
                    "textarea",
                    { className: "characterFeats", name: "feat", rows: "10", cols: "15" },
                    " "
                )
            ),
            React.createElement("input", { type: "hidden", name: "_id", value: character._id }),
            React.createElement("input", { id: "sendCharacter", type: "text", placeholder: "Enter Another Username" }),
            React.createElement("input", { className: "sendCharacter", type: "submit", value: "Copy Character(Not Working)" })
        );
    });

    return React.createElement(
        "div",
        { className: "characterList" },
        characterNodes
    );
};

var setup = function setup(csrf) {
    CharacterFormClass = React.createClass({
        displayName: "CharacterFormClass",

        handleSubmit: handleCharacter,
        render: renderCharacter
    });

    CharacterListClass = React.createClass({
        displayName: "CharacterListClass",

        loadCharactersFromServer: function loadCharactersFromServer() {
            sendAjax('GET', '/getCharacters', null, function (data) {
                this.setState({ data: data.characters });
            }.bind(this));
        },
        getInitialState: function getInitialState() {
            return { data: [] };
        },
        componentDidMount: function componentDidMount() {
            this.loadCharactersFromServer();
        },
        render: renderCharacterList
    });

    characterForm = ReactDOM.render(React.createElement(CharacterFormClass, { csrf: csrf }), document.querySelector("#makeCharacter"));

    characterRenderer = ReactDOM.render(React.createElement(CharacterListClass, null), document.querySelector("#characters"));
};

var getToken = function getToken() {
    sendAjax('GET', '/getToken', null, function (result) {
        setup(result.csrfToken);
    });
};

$(document).ready(function () {
    getToken();
});
"use strict";

var handleError = function handleError(message) {
  $("#errorMessage").text(message);
  $("#characterMessage").animate({ width: 'toggle' }, 350);
};

var redirect = function redirect(response) {
  $("#characterMessage").animate({ width: 'hide' }, 350);
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
