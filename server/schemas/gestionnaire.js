const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gestionnaireSchema = new Schema({
  fullname:  String,
  numero: Schema.Types.Mixed,
}, {collection: 'Gestionnaire'});

module.exports = mongoose.model('Gestionnaire', gestionnaireSchema);
