const mongoose = require('mongoose');

const gdUserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  prefName: { type: String, default: null },
  jobTitle: { type: String },
  department: { type: String },
  directReports: { type: [String], default: [] },
  division: { type: String, default: null },
  email: { type: String, unique: true },
  location: { type: String },
  imgUrl: { type: String },
  reportsTo: { type: String, default: null },
  workPhone: { type: String, default: null },
  ext: { type: String, default: null },
  personalPhone: { type: String, default: null },
  id: { type: Number, unique: true },
  linkedInUrl: { type: String, default: null },
  twitterUrl: { type: String, default: null },
  facebookUrl: { type: String, default: null },
  instagramUrl: { type: String, default: null },
  timeOff: { type: String, default: null },
  timeOffIcon: { type: String, default: null },
  skype: { type: String, default: null },
  pinterest: { type: String, default: null },
  pronouns: { type: String, default: null },
  canUploadPhoto: { type: Boolean, default: null },
  photoUploaded: { type: Boolean, default: null },
  timezone: { type: String },
});

const GdUserModel = mongoose.model('employes', gdUserSchema);

module.exports = GdUserModel;
