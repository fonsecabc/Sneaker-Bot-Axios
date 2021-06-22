var http = require('http');

function createServer()
{
    //create a server object:
    http.createServer(function (req, res) {
        res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
    }).listen(8080); //the server object listens on port 8080
}

const axios = require('axios');

const url_login = 'https://unite.nike.com/login?appVersion=900&experienceVersion=900&uxid=com.nike.commerce.nikedotcom.web&locale=en_US&backendEnvironment=identity&browser=Google%20Inc.&os=undefined&mobile=false&native=false&visit=3&visitor=b66b4f57-44b2-4bf8-8dcd-90171d09f5b5';
const url_addtocart = 'https://analytics.nike.com/v1/t';
const url_payment = 'https://api.nike.com/payment/preview/v3';
const url_placeorder = 'https://analytics.nike.com/v1/t';

function login()
{
    axios({
        method: 'post',
        url: url_login,
        data: {
            username: "gmail@gmail.com", //nike username
            password: "password" //password
        },
        headers: {
            'Accept-Language': 'en-en-US,en;q=0.9,en',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36',
        },
        proxy: {
            host: 'localhost',
            port: 8080
        }
    })
    .then ((response) => {
        console.log('Logged in with success!');
        console.log(response);
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.');  
    });
}

function addToCart()
{
    axios({
        method: 'post',
        url: url_addtocart,
        data: {
            event: "Product Added",
            name: "Nike Air Force 1",
            quantity: 1,

        },
        headers: {
            'Accept-Language': 'en-en-US,en;q=0.9,en',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36',
        },
        proxy: {
            host: 'localhost',
            port: 8080
        }
    })
    .then ((response) => {
        console.log('Shoe added to cart!');
        console.log(response);
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.');  
    });
}

function payment()
{
    axios({
        method: 'post',
        url: url_payment,
        data: {
            address1: "1234 Street Blvd", 
            address2: "123",
            city: "MyCity",
            country: "US",
            email: "gmail@gmail.com",
            firstName: "Name",
            lastName: "LastName",
            phoneNumber: "(123) 456-7890",
            postalCode: "12345",
            state: "FL",
            expiryMonth: "06",
            expiryYear: "2027",
            acountNumber: "1234567812345678",

        },
        headers: {
            'Accept-Language': 'en-en-US,en;q=0.9,en',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36',
        },
        proxy: {
            host: 'localhost',
            port: 8080
        }
    })
    .then ((response) => {
        console.log('Payment made!');
        console.log(response);
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.');  
    });
}

function placeOrder()
{
    axios({
        method: 'post',
        url: url_placeorder,
        data: {
            event: 'Placed-Order',
            checkoutid: ''
        },
        headers: {
            'Accept-Language': 'en-en-US,en;q=0.9,en',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36',
        },
        proxy: {
            host: 'localhost',
            port: 8080
        }
    })
    .then ((response) => {
        console.log('Order Placed!');
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.');  
    });
}

createServer();
login();
addToCart();
payment();
