const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let CharacterModel = {};

// mongoose.Types.ObjectID is a function
// that converts string ID to a real mongo ID
const convertID = mongoose.Types.ObjectId;
const setName = (name) => _.escape(name).trim();
const setJob = (job) => _.escape(job).trim();

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },


  job: {
    type: String,
    required: true,
    trim: true,
    set: setJob,
  },


  level: {
    type: Number,
    min: 1,
    required: false,
  },
    // attributeDiv
  str: {
    type: Number,
    min: 1,
    required: false,
  }, 
  dex: {
    type: Number,
    min: 1,
    required: false,
  },
  con: {
    type: Number,
    min: 1,
    required: false,
  }, 
  inte: {
    type: Number,
    min: 1,
    required: false,
  }, 
  wis: {
    type: Number,
    min: 1,
    required: false,
  },
  cha: {
    type: Number,
    min: 1,
    required: false,
  },
    // stuffDiv
  ac: {
    type: Number,
    min: 1,
    required: false,
  },
  speed: {
    type: Number,
    min: 1,
    required: false,
  },
  initiative: {
    type: Number,
    min: 0,
    required: false,
  },
    proB: {
    type: Number,
    min: 2,
    required: false,
  },
    // skillDiv - NOT SURE IF VALID/CORRECT TYPE:
  acro: {
    type: Boolean,
    required: false,
  },
  animal: {
    type: Boolean,
    required: false,
  },
  arcana: {
    type: Boolean,
    required: false,
  },
  athletics: {
    type: Boolean,
    required: false,
  },
  deception: {
    type: Boolean,
    required: false,
  },
  history: {
    type: Boolean,
    required: false,
  },
  insight: {
    type: Boolean,
    required: false,
  },
  intimidation: {
    type: Boolean,
    required: false,
  },
  investigation: {
    type: Boolean,
    required: false,
  },
  medicine: {
    type: Boolean,
    required: false,
  },
  nature: {
    type: Boolean,
    required: false,
  },
  perception: {
    type: Boolean,
    required: false,
  },
  performance: {
    type: Boolean,
    required: false,
  },
  persuasion: {
    type: Boolean,
    required: false,
  },
  religion: {
    type: Boolean,
    required: false,
  },
  sleight: {
    type: Boolean,
    required: false,
  },
  stealth: {
    type: Boolean,
    required: false,
  },
  survival: {
    type: Boolean,
    required: false,
  },
    // thingsDiv
  spell: {
    type: String,
    required: false,
  },
  feats: {
    type: String,
    required: false,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

CharacterSchema.statics.toAPI = (doc) => ({
    name: doc.name,
    job: doc.job,   
    level: doc.level,
    str: doc.str,
    dex: doc.dex,
    con: doc.con,
    inte:   doc.inte,
    wis:    doc.wis,
    cha:    doc.cha,
    ac: doc.ac,
    speed:  doc.speed,
    initiative: doc.initiative,
    proB:   doc.proB,
    acro:   doc.acro,
    animal: doc.animal,
    arcana: doc.arcana,
    athletics:  doc.athletics,
    deception:  doc.deception,
    history:    doc.history,
    insight:    doc.insight,
    intimidation:   doc.intimidation,
    investigation:  doc.investigation,
    medicine:   doc.medicine,
    nature: doc.nature,
    perception: doc.perception,
    performance:    doc.performance,
    persuasion: doc.persuasion,
    religion:   doc.religion,
    sleight:    doc.sleight,
    stealth:    doc.stealth,
    survival:   doc.survival,
    spell:  doc.spell,
    feats:  doc.feats,

});

CharacterSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertID(ownerId),
  };

  return CharacterModel.find(search).select('name job level str dex con inte wis cha ac speed initiative proB acro animal arcana athletics deception history insight intimidation investigation medicine nature perception performance persuasion religion sleight stealth survival spell feats').exec(callback);

};


CharacterModel = mongoose.model('Character', CharacterSchema);

module.exports.CharacterModel = CharacterModel;
module.exports.CharacterSchema = CharacterSchema;

