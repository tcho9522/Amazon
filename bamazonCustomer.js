var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "tcho",
    password: "Timchochanel7381!",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected as id: " + connection.threadID);
    // var query = "INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUES(1, 'macbook', 'Apple', 999.99, 50);";
    var query = "SELECT * FROM products";
    connection.query(query, function(err, results){
        if(err) throw err;
        display(results);
        connection.end();
    })
    
})

function display(array){
    console.log("Function START()")
    for(i=0; i<array.length; i++){
        console.log(
            `ITEM: ${array[i].product_name} || PRICE: $${array[i].price} || QUANTITY: ${array[i].stock_quantity}`
        )
    }
}