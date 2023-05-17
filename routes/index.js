var express = require('express');
const{isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostById} = require('../middleware/posts');
var router = express.Router();
/*
router.get( function(req, res) {
    res.locals.navItems = 
    [
        {
            text: "Log in",
            cssClasses: "nav-items button",
            href: "/login"


        }
    ]
    next();
})*/

/* GET home page. */
router.get('/', getRecentPosts, function(req, res, next) {
    res.render('index', { title: 'CSC 317 App', name: "Abdarrahman Ayyaz" });
});
router.get('/login', function(req, res) {
    res.render('login',{css:["formstyle.css"]});
});
router.get('/postImage', isLoggedIn, function(req, res) {
    res.render('postImage',{css:["formstyle.css"]});
});
router.get('/registration', function(req, res) 
{
    res.render('registration',{css:["formstyle.css"] ,js:["registration.js"]});
});
router.get("/posts/:id(\\d+)", getPostById, function(req, res) 
{
    console.log(req.params);
    res.render('viewPost',{js:["viewPost.js"]});
});

module.exports = router;