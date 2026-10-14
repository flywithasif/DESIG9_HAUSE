const mongoose = require("mongoose");

const siteVisitSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  propertyType: String,
  plotArea: String,
  preferredDate: String,
  preferredTime: String,
  message: String,
  quality: { type: String, enum: ["HOT", "WARM", "COLD"], default: "WARM" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  markedColdBy: { type: String, default: null },
  lastComment: { type: String, default: "" },
  followUpDate: String,
  followUpTime: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SiteVisit", siteVisitSchema);