const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
  publisherAdress: String,
  tokenAdress: String,
});

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
