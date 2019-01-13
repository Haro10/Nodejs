// custom middleware function
function log(req, res, next) {
    console.log('Longging...');
    //Give control to next middleware function  -> if not -> hanggging
    next();
}

module.exports = log;


