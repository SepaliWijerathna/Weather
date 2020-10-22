const operations = require('./db');

exports.register = (req) => {
    return operations.getData.getData('Temperature')
    
}