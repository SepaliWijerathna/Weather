const operations = require('./db');

async function getAllData(req){
    var result_;
    await operations.getData('ambient_light_level').then((result=>{
        result_ = result;
    }));
    return result_;
}

exports.getAllData = getAllData;