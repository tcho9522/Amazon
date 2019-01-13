var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "tcho",
    password: "Timchochanel7381!",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err;
    var query = "SELECT * FROM products";
    connection.query(query, function(err, results){
        if(err) throw err;
        start(results);
    })
    // connection.end();
})
function start(results){
    inquirer.prompt({
        name: "userChoice",
        type: "list",
        message: "Welcome to Bamazon! Would you like to browse our most popular products?",
        choices: [
            "Yes",
            "No"
        ]
    }).then(function(answer){
        if(answer.userChoice==="Yes"){
            display(results);
            console.log("Are there any items you would like to purchase?? Enter in the ID number into the command line")
            askItem();
        }
    })
}
function display(array){
    for(i=0; i<array.length; i++){
        console.log(
            `ID: ${array[i].item_id} || ITEM: ${array[i].product_name} || PRICE: $${array[i].price} || QUANTITY: ${array[i].stock_quantity}`
        )
    }
}
function askItem(){
    inquirer.prompt([{
        name: "userChoice",
        type: "input",
        message: "Enter in the product ID you wish to purchase."
    },{
        name: "quantChoice",
        type: "input",
        message: "How many would you like to purchase?"
    }]).then(function(answer){
        var query = `SELECT * FROM products WHERE item_id = ${answer.userChoice}`
        connection.query(query,function(err,results){
            if (err) throw err;
            var amount = results[0].stock_quantity;
            if(answer.quantChoice > amount){
                console.log("Sorry, not enough in stock. Please make another selection")
                askItem();
            }
            else{
                var query = `UPDATE products SET stock_quantity = ${amount-answer.quantChoice} WHERE item_id = ${answer.userChoice}`
                connection.query(query,function(err,res){
                    if(err) throw err;
                    var total = answer.quantChoice * results[0].price;
                    console.log(`Your order of ${results[0].product_name} has been placed.`)
                    console.log(`Order details:`);
                    console.log(`Item: ${results[0].product_name}`);
                    console.log(`Quantity: ${answer.quantChoice}`);
                    console.log(`Total: $${total}`)
                    connection.end();
                })
            }
        })
    })
}
