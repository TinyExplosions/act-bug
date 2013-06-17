exports.testing = function(params, callback) {
    if(params.breakme) {
        return callback("Broken", null);
    } else {
        if(params.stringonly) {
            return callback(null, "awesome sauce");
        } else {
            return callback(null, {test: "awesome sauce"});
        }
    }
};