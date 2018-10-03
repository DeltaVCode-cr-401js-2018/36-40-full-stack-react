'use strict';
import mongoose, { Schema } from 'mongoose';
const ensembleSchema = Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true, default: 0 },
  instruments: [
    { type: Schema.Types.ObjectId, ref: 'instrument' },
  ],
  userID: {type: Schema.Types.ObjectId, ref: 'users', required: true},
});
ensembleSchema.pre('findOne', function (next) {
  this.populate('instruments');
  next();
});
const Ensemble = mongoose.model('ensemble', ensembleSchema);
Ensemble.route = 'ensembles';
export default Ensemble;