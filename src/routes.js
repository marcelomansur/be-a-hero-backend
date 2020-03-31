const express = require("express");

const OngController = require("./controllers/OngController");
const ProfileController = require("./controllers/ProfileController");
const IncidentController = require("./controllers/IncidentController");
const SessionController = require("./controllers/SessionController");

const OngValidator = require("./validators/OngValidator");
const ProfileValidator = require("./validators/ProfileValidator");
const IncidentValidator = require("./validators/IncidentValidator");
const SessionValidator = require("./validators/SessionValidator");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngValidator.create(), OngController.create);

routes.get("/profile", ProfileValidator.get(), ProfileController.index);

routes.get("/incidents", IncidentValidator.get(), IncidentController.index);
routes.post(
  "/incidents",
  IncidentValidator.create(),
  IncidentController.create
);
routes.delete(
  "/incidents/:id",
  IncidentValidator.delete(),
  IncidentController.delete
);

routes.post("/sessions", SessionValidator.create(), SessionController.create);

module.exports = routes;
