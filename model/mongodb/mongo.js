var mongoose = require('mongoose');

var mongo;

if (process.env.VCAP_SERVICES) {
    var env = JSON.parse(process.env.VCAP_SERVICES);
    mongo = env['mongodb-1.8'][0]['credentials'];
} else {
    mongo = {
//        "hostname": "localhost",
        "hostname": "localhost",
        "port": 27017,
        "username": "",
        "password": "",
        "name": "",
        "db": "mathchef"
    };
}

var generateMongoUrl = function (obj) {
    obj.hostname = (obj.hostname || 'localhost');
    obj.port = (obj.port || 27017);
    if (obj.username && obj.password) {
        return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
    } else {
        return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
    }
};

mongoose.connect(generateMongoUrl(mongo));

var db = mongoose.connection;
db.on('error', function (err) {
    console.error('connection error:');
    console.error(err);
});

db.once('open', function () {
    console.log('Connection opened');
});

exports.mongoose = mongoose;