const db = require('../conf/database');
module.exports = {
    getRecentPosts: function(req,res,next){
        db.query('select id, title, description, thumbnail from posts ORDER BY createdAt DESC LIMIT 16')
        .then(function([results,fields]){
            if(results && results.length){
                res.locals.results = results;
            }
            next();
        })
        .catch(err => next(err));

    },

getPostById: function(req, res, next) {
    let postID = req.params.id;
    let baseSQL = `SELECT p.id, p.title, p.description, p.image, p.createdAt, u.username FROM posts p JOIN users u ON p.fk_authorId=u.id
    WHERE p.id=?;`;
    db.query(baseSQL, [postID])
        .then(function([results, fields]){
        
            if (results && results.length == 1) {
                res.locals.currentPost = results[0];
            }
            next();
        })
        .catch(err => next(err));
}, 
}