const MySqli = require('mysqli');

let conn = new MySqli({
    host: 'localhost', 
    post: 3306, 
    user: 'admin', 
    passwd: 'admin', 
    db: 'ecommerce' 
});

let db = conn.emit(false, '');

module.exports = {
    database: db
}