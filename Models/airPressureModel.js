const operations = require('./db');

async function getAllData(req){
    var result_;
    await operations.getData('air_pressure').then((result=>{
        result_ = result;
    }));
    return result_;
}

function saveData(data_j){
    json_ = JSON.parse(data_j)
    var DATA = [];
    //DATA["TodayDate"] = data_j["alert"]["date"]["_text"];
    console.log(json_["alert"]["info"]["parameter"]["valueName"])
    DATA = [json_["alert"]["date"]["_text"],json_["alert"]["time"]["_text"],json_["alert"]["info"]["parameter"]["value"]["_text"]];

    operations.saveData('air_pressure',DATA)
}

exports.getAllData = getAllData;
exports.saveData = saveData;