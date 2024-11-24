const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["IT", "Education", "Healthcare", "Retail", "Other"],
    required: true,
  },
  description: String,
  type: {
    type: String,
    enum: ["Remote", "On-site", "Part-time", "Full-time"],
    required: true,
  },
  location: String,
  salary: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Job", JobSchema);
