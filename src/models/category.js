const sqlConnection = require('../services/sqlConnection');

function listCategories(cb) { //! cb is representing the functionality of caller
    var sql = "SELECT ID as categoryID, Name as name FROM Categories";
    var data = []; //! because the above SQL doesn't need any data
    sqlConnection.executeQuery(sql, data, function(err, result) {
        cb(err, result);
    });
}

module.exports = {listCategories};
