exports.testing = function(params, callback) {
    if(params.breakme) {
        return ("Broken", null);
    } else {
        return (null, "awesome sauce");
    }
};