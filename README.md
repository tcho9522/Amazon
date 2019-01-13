# Amazon

Bamazon is a server side application that is a mock design of amazon. It will display the lists of items on hand and proceed to ask what you are interested in purchasing. Here is the basic flow of this application.

Run the javascript through node:

![image of 1st](https://github.com/tcho9522/Amazon/blob/master/images/1st.PNG)

After clicking yes, it will display the product name, the price, and the quantity in stock.
The server will then ask you to enter in the product ID you wish to purchase, then the amount you would like to purchase.
![image of 2nd](https://github.com/tcho9522/Amazon/blob/master/images/2nd.PNG)

If you enter in a quantity amount that is less than the quantity in stock, it will successfully finish the order and update the quantity:

![image of 3rd](https://github.com/tcho9522/Amazon/blob/master/images/3rd.PNG)

If you enter in a quantity amount that is more than the quantity in stock, it will redirect you to the prompt of entering in a product ID you would like to purchase:
![image of 4th](https://github.com/tcho9522/Amazon/blob/master/images/4th.PNG)
