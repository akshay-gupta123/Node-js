const express = require("express")
const bodyParser = require("body-parser")

const dishRouter = express.Router();

dishRouter.route("/")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishess');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});


dishRouter.route("/:dishid")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the dish to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported on /dish/:dishid');
})
.put((req, res, next) => {
    res.end('Will update dish');
})
.delete((req, res, next) => {
    res.end('Deleting the dish');
});

module.exports = dishRouter;