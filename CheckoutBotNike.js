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
            username: "caiobragadafonseca@gmail.com", 
            password: "Cc.123,4.5"
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
            address1: "8910 Legacy Ct",
            address2: "208",
            city: "Kissimmee",
            country: "US",
            email: "caiobragadafonseca@gmail.com",
            firstName: "Caio",
            lastName: "Fonseca",
            phoneNumber: "(321) 443-7972",
            postalCode: "34747",
            state: "FL",
            creditCardInfoId: "5afc5970-2507-45de-b41b-3f729e1bebd2",
            expiryMonth: "06",
            expiryYear: "2027",
            acountNumber: "5313671938347761",

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
            checkoutId: "8239c258-cc15-474c-8f57-de3121ee1d8f",
            anonymousId: "926499C685684F7056EB4DB7D0A126AF",
            event: 'Placed-Order'
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
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.');  
    });
}

createServer();
login();
addToCart();
payment();



