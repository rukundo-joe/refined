const express = require("express");
const Job = require("../models/jobModel");
const auth = require("../middleware/auth");

const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a job
router.post("/", auth(["Admin"]), async (req, res) => {
  const { title, category, description, type, location, salary } = req.body;

  try {
    const job = new Job({ ...req.body, postedBy: req.user.id });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Apply for a job
router.post("/:id/apply", auth(["SingleMother", "Mentor"]), async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Handle application logic here
    res.status(200).json({ message: "Application submitted!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
