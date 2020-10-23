const operations = require('./db');

async function getAllData(req){
    var result_;
    await operations.getData('Humidity').then((result=>{
        result_ = result;
    }));
    return result_;
}

exports.getAllData = getAllData;