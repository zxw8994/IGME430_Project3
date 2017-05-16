
const models = require('../models');

const Character = models.Character;

const makerPage = (req, res) => {
  Character.CharacterModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.render('app', { csrfToken: req.csrfToken(), characters: docs });
  });
};


const makeCharacters = (req, res) => {


  const characterData = {
      name: req.body.name,
      job: req.body.job,
      level: req.body.level,
      owner: req.session.account._id,
      str: req.body.str,
      dex:  req.body.dex,
      con:  req.body.con,
      inte: req.body.inte,
      wis:  req.body.wis,
      cha:  req.body.cha,
      ac:   req.body.ac,
      speed:    req.body.speed,
      initiative:   req.body.initiative,
      proB: req.body.proB,
      acro: req.body.acro,
      animal:   req.body.animal,
      arcana:   req.body.arcana,
      athletics:    req.body.athletics,
      deception:    req.body.deception,
      history:  req.body.history,
      insight:  req.body.insight,
      intimidation: req.body.intimidation,
      investigation:    req.body.investigation,
      medicine: req.body.medicine,
      nature:   req.body.nature,
      perception:   req.body.perception,
      performance:  req.body.performance,
      persuasion:   req.body.persuasion,
      religion: req.body.religion,
      sleight:  req.body.sleight,
      stealth:  req.body.stealth,
      survival: req.body.survival,
      spell:    req.body.spell,
      feats:   req.body.feats,
  };

  const newCharacter = new Character.CharacterModel(characterData);

  const characterPromise = newCharacter.save();

  characterPromise.then(() => res.json({ redirect: '/maker' }));

  characterPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Character already exists.' });
    }

  });

  return characterPromise;
};

const getCharacter = (request, response) => {
  const req = request;
  const res = response;

  return Character.CharacterModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.json({ characters: docs });
  });
};

//const deleteCharacter = (request, response) => {
//};

//const doQuest = (req, res) => {  
//}


module.exports.makerPage = makerPage;
module.exports.make = makeCharacters;
module.exports.getCharacters = getCharacter;

