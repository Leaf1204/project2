///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////


const listSchema = new Schema({
  userid: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true },
  dateOf: { type:Date, required: true}
});

///goal schema
// const goalSchema = new Schema({
//   userid: { type: String, required: true },
//   goal: { type: Number, required: true },
//   dateOf: { type:Date, required: true}
// });

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const List = model("list", listSchema);
// const Goal = model("goal", goalSchema);
////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = List;
// module.exports = Goal;
