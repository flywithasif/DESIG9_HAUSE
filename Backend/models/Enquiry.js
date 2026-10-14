const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: String,
  text: String,
  tag: String,
  createdAt: { type: Date, default: Date.now }
});

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  projectType: { type: String, default: "Architecture" },
  message: String,
  quality: { type: String, enum: ["HOT", "WARM", "COLD"], default: "WARM" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  markedColdBy: { type: String, default: null }, // Kis employee ne cold mark kiya
  lastComment: { type: String, default: "" },
  followUpDate: String,
  followUpTime: String,
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Enquiry", enquirySchema);