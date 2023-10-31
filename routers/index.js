const express = require("express");

const authRoute = require("./auth.router");
const tutorRoute = require('./tutor.router')
const parentsRoute = require('./parents.router')
const adminRoute = require('./admin.routers')
const classRoute = require('./class.router')

const appRoute = express();

appRoute.use("/auth", authRoute);
appRoute.use('/tutor', tutorRoute);
appRoute.use('/parents', parentsRoute);
appRoute.use('/admin', adminRoute);
appRoute.use('/class', classRoute);

module.exports = appRoute;