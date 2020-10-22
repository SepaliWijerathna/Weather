const operations = require('./db');

exports.register = (req) => {
    operations.getData('Temperature').then((result=>{
        console.log(result);
    }))
    
}