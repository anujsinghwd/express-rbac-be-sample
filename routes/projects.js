const express = require("express");
const router = express.Router();
const { projects } = require("../data");
const { authUser } = require("../middleware/basicAuth");
const { canViewProject, scopedProject } = require("../permissions/project");

router.get("/", authUser, (req, res) => {
  res.json(scopedProject(req.user, projects));
});

router.get("/:projectId", setProject, authUser, authGetProject, (req, res) => {
  res.json(req.project);
});

function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId);
  req.project = projects.find((project) => project.id === projectId);
  if (req.project == null) {
    res.status(404);
    return res.send("Project not found");
  }
  next();
}

function authGetProject(req, res, next) {
  if (!canViewProject(req.user, req.project)) {
    res.send(403);
    return res.send("Not Allowed");
  }
  next();
}

module.exports = router;
