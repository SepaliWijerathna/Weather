const connection = require('./db_connection');
const fs = require('fs');
const path = require('path');
const Json_res = JSON.parse(fs.readFileSync(path.join(__dirname, 'response_format.json')));


exports.getData = async (table_name) => {
    Json_res['data'] = [];
     await connection.query(`SELECT * FROM ${table_name}` , (error, result) => {
        if (result < 0) {
            Json_res['success'] = false;
            Json_res['error'] = 'error occured when trying to get data  ';
            throw new Error('error occured when trying to get data');
        } else {
            Json_res['success'] = true;
            Json_res['data'] = result[0];
        }
        // console.log('result in db is ' + result[0]['bank_account']);
        console.log("result inside func " + result[0]['Id'])
        return result;
    });
     console.log("result from back is " + result[0]['Id'])

   
    return ;

}

