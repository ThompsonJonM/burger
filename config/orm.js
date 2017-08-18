var connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + '=' + ob[key]);
    }

    return arr.toString();
}

var orm = {

    // Select all function
    selectAll: function(tableInput, cb) {
        var queryString = 'select * from ' + tableInput;

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // Create function
    insertOne: function(table, col, vals, cb) {
        var queryString = 'insert into ' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'values (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // Update function
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = 'update ' + table;

        queryString += ' set ';
        queryString += objToSql(objColVals);
        queryString += ' where ';
        queryString += condition;

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    deleteOne: function(table, condition, cb) {
        var queryString = 'delete from ' + table;

        queryString += ' where ';
        queryString += condition;

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;