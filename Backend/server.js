const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/User");
const Enquiry = require("./models/Enquiry");
const SiteVisit = require("./models/SiteVisit");
const Newsletter = require("./models/Newsletter");
const verifyToken = require("./middleware/auth");

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/desig9hause";
const JWT_SECRET = process.env.JWT_SECRET || "desig9hause_super_secret_key";

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected Successfully");
    const superAdminEmail = process.env.SUPER_ADMIN_EMAIL || "supersagaradmin@desig9hause.com";
    const superAdminPass = process.env.SUPER_ADMIN_PASS || "Sagarvirz@8734&35";

    const existingAdmin = await User.findOne({ email: superAdminEmail });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(superAdminPass, 10);
      await User.create({
        name: "Sagar Admin",
        email: superAdminEmail,
        password: hashedPassword,
        role: "superadmin",
        status: "active",
        permissions: { contactLeads: true, siteVisits: true, newsletters: true }
      });
      console.log(`Default Super Admin created securely: ${superAdminEmail}`);
    }
  })
  .catch((err) => console.log("MongoDB Connection Error: ", err));

// --- AUTH & USER MANAGEMENT ROUTES ---

app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password." });

    if (user.status === "deactive") {
      return res.status(403).json({ message: "Your account has been deactivated by Super Admin." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password." });

    const userPermissions = user.permissions || { contactLeads: true, siteVisits: true, newsletters: false };

    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name, permissions: userPermissions }, 
      JWT_SECRET, 
      { expiresIn: process.env.JWT_EXPIRES_IN || "24h" }
    );
    
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role, permissions: userPermissions } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/admin/create-user", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "superadmin") {
      return res.status(403).json({ message: "Access Denied!" });
    }
    const { name, email, phone, password, role, status, permissions } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ 
      name, 
      email, 
      phone: phone || "",
      password: hashedPassword, 
      role: role || "employee",
      status: status || "active",
      permissions: permissions || { contactLeads: true, siteVisits: true, newsletters: false }
    });

    res.status(201).json({ success: true, user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Employee Profile, Password & Status Route
app.put("/admin/users/:id", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "superadmin") {
      return res.status(403).json({ message: "Access Denied!" });
    }
    const { name, email, phone, password, role, status, permissions } = req.body;
    
    let updateData = { name, email, phone, role, status, permissions };
    
    if (password && password.trim() !== "") {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, { new: true }).select("-password");
    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.json({ success: true, user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/admin/users", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "superadmin") return res.status(403).json({ message: "Access denied." });
    const users = await User.find().select("-password");
    res.json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/admin/users/:id", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "superadmin") return res.status(403).json({ message: "Access denied." });
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- PUBLIC WEBSITE ROUTES ---

app.post("/enquiries", async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.status(201).json({ success: true, data: newEnquiry });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/site-visits", async (req, res) => {
  try {
    const newVisit = await SiteVisit.create(req.body);

    return res.status(201).json({
      success: true,
      data: newVisit,
    });
  } catch (err) {
    console.error("SITE_VISIT_SUBMISSION_ERROR:", {
      name: err.name,
      message: err.message,
      errors: err.errors
        ? Object.keys(err.errors)
        : undefined,
    });

    return res.status(500).json({
      success: false,
      message: "Unable to submit site visit request.",
    });
  }
});

app.post("/newsletters", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email required" });
    const newSub = await Newsletter.create({ email });
    res.status(201).json({ success: true, data: newSub });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/admin/newsletters", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "superadmin" && !req.user.permissions?.newsletters) {
      return res.status(403).json({ message: "Access denied." });
    }
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    res.json({ subscribers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- LEADS FETCHING ---

app.get("/enquiries", verifyToken, async (req, res) => {
  try {
    let query = {};
    if (req.user.role !== "superadmin") {
      if (!req.user.permissions?.contactLeads) return res.json({ leads: [] });
      query = { assignedTo: req.user.id, quality: { $ne: "COLD" } };
    }
    const leads = await Enquiry.find(query).populate("assignedTo", "name email").sort({ createdAt: -1 });
    res.json({ leads });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/site-visits", verifyToken, async (req, res) => {
  try {
    let query = {};
    if (req.user.role !== "superadmin") {
      if (!req.user.permissions?.siteVisits) return res.json({ visits: [] });
      query = { assignedTo: req.user.id, quality: { $ne: "COLD" } };
    }
    const visits = await SiteVisit.find(query).populate("assignedTo", "name email").sort({ createdAt: -1 });
    res.json({ visits });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/enquiries/:id", verifyToken, async (req, res) => {
  try {
    const { quality, commentTag, newComment, followUpDate, followUpTime, assignedTo } = req.body;
    const lead = await Enquiry.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });

    const currentCommentsCount = lead.comments ? lead.comments.length : 0;
    const willAddComment = (newComment || commentTag) ? 1 : 0;
    const totalCommentsAfterUpdate = currentCommentsCount + willAddComment;

    if (quality === "COLD" && req.user.role !== "superadmin" && totalCommentsAfterUpdate < 2) {
      return res.status(400).json({ message: "Cold Validation Error: Minimum 2 updates required." });
    }

    let updateData = {};
    if (quality) updateData.quality = quality;
    if (followUpDate !== undefined) updateData.followUpDate = followUpDate;
    if (followUpTime !== undefined) updateData.followUpTime = followUpTime;
    if (assignedTo !== undefined && req.user.role === "superadmin") updateData.assignedTo = assignedTo || null;
    if (quality === "COLD" && req.user.role !== "superadmin") updateData.markedColdBy = req.user.name;

    if (newComment || commentTag) {
      const commentObj = { author: req.user.name, authorId: req.user.id, text: newComment || "", tag: commentTag || "", createdAt: new Date() };
      await Enquiry.findByIdAndUpdate(req.params.id, { $push: { comments: commentObj } });
      updateData.lastComment = `${commentTag ? `[${commentTag}] ` : ""}${newComment || ""}`;
    }

    const updatedLead = await Enquiry.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ success: true, lead: updatedLead });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/site-visits/:id", verifyToken, async (req, res) => {
  try {
    const { quality, commentTag, newComment, followUpDate, followUpTime, assignedTo } = req.body;
    const visit = await SiteVisit.findById(req.params.id);
    if (!visit) return res.status(404).json({ message: "Site visit lead not found" });

    const currentCommentsCount = visit.comments ? visit.comments.length : 0;
    const willAddComment = (newComment || commentTag) ? 1 : 0;
    const totalCommentsAfterUpdate = currentCommentsCount + willAddComment;

    if (quality === "COLD" && req.user.role !== "superadmin" && totalCommentsAfterUpdate < 2) {
      return res.status(400).json({ message: "Cold Validation Error: Minimum 2 updates required." });
    }

    let updateData = {};
    if (quality) updateData.quality = quality;
    if (followUpDate !== undefined) updateData.followUpDate = followUpDate;
    if (followUpTime !== undefined) updateData.followUpTime = followUpTime;
    if (assignedTo !== undefined && req.user.role === "superadmin") updateData.assignedTo = assignedTo || null;
    if (quality === "COLD" && req.user.role !== "superadmin") updateData.markedColdBy = req.user.name;

    if (newComment || commentTag) {
      const commentObj = { author: req.user.name, authorId: req.user.id, text: newComment || "", tag: commentTag || "", createdAt: new Date() };
      await SiteVisit.findByIdAndUpdate(req.params.id, { $push: { comments: commentObj } });
      updateData.lastComment = `${commentTag ? `[${commentTag}] ` : ""}${newComment || ""}`;
    }

    const updatedVisit = await SiteVisit.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ success: true, visit: updatedVisit });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/admin/stats", verifyToken, async (req, res) => {
  try {
    let enquiryQuery = {};
    let siteQuery = {};

    if (req.user.role !== "superadmin") {
      enquiryQuery = { assignedTo: req.user.id, quality: { $ne: "COLD" } };
      siteQuery = { assignedTo: req.user.id, quality: { $ne: "COLD" } };
    }

    const totalEnquiries = await Enquiry.countDocuments(enquiryQuery);
    const hotEnquiries = await Enquiry.countDocuments({ ...enquiryQuery, quality: "HOT" });
    const warmEnquiries = await Enquiry.countDocuments({ ...enquiryQuery, quality: "WARM" });
    const coldEnquiries = await Enquiry.countDocuments({ ...enquiryQuery, quality: "COLD" });
    
    const siteVisitsCount = await SiteVisit.countDocuments(siteQuery);
    const newslettersCount = req.user.role === "superadmin" ? await Newsletter.countDocuments() : 0;
    const totalEmployees = req.user.role === "superadmin" ? await User.countDocuments({ role: { $ne: "superadmin" } }) : 0;

    let userUpdateCount = 0;
    let employeeStats = [];

    const allEnquiries = await Enquiry.find({}, "comments");
    const allVisits = await SiteVisit.find({}, "comments");

    const allComments = [
      ...allEnquiries.flatMap(e => e.comments || []),
      ...allVisits.flatMap(v => v.comments || [])
    ];

    if (req.user.role === "superadmin") {
      const employees = await User.find({ role: { $ne: "superadmin" } }, "name email");
      employeeStats = employees.map(emp => {
        const count = allComments.filter(c => c.author === emp.name || c.authorId == emp._id).length;
        return { id: emp._id, name: emp.name, email: emp.email, updatesCount: count };
      });
    } else {
      userUpdateCount = allComments.filter(c => c.author === req.user.name || c.authorId == req.user.id).length;
    }

    res.json({
      totalEnquiries,
      hotEnquiries,
      warmEnquiries,
      coldEnquiries,
      siteVisitsCount,
      newslettersCount,
      totalEmployees,
      userUpdateCount,
      employeeStats
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});