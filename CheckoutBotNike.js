var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

const axios = require('axios');

const url_login = 'https://unite.nike.com/login?appVersion=900&experienceVersion=900&uxid=com.nike.commerce.nikedotcom.web&locale=en_US&backendEnvironment=identity&browser=Google%20Inc.&os=undefined&mobile=false&native=false&visit=3&visitor=b66b4f57-44b2-4bf8-8dcd-90171d09f5b5';
const url_addtocart = 'https://analytics.nike.com/v1/t';
const url_payment = 'https://api.nike.com/payment/preview/v3';
const url_placeorder = 'https://analytics.nike.com/v1/t';

let login = new Promise((resolve, reject) => {
    axios({
        method: 'post',
        url: url_login,
        data: {
            username: gmail, 
            password: password
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
        resolve()
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.')
        reject();
    });
});

let addToCart = new Promise((resolve, reject) => {
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
        console.log('Added to cart with succes');
        resolve()
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.')
        reject();
    });
});

let payment = new Promise((resolve, reject) => {
    axios({
        method: 'post',
        url: url_payment,
        data: {
            address1: address1,
            address2: address2,
            city: city,
            country: country,
            email: email,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            postalCode: postalCode,
            state: state,
            expiryMonth: expiryMonth,
            expiryYear: expiryYear,
            acountNumber: acountNumber,

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
        resolve();
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.');  
        reject();
    });
});

let placeOrder = new Promise((resolve, reject) => {
    axios({
        method: 'post',
        url: url_placeorder,
        data: {
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
        resolve();
    }, (error) => {
        console.log(error);
        console.log('Error, bot was detected or something else.');  
        reject();
    });
});

login.then(() => {
    addToCart.then(() => {
        payment.then(() => {
            placeOrder.then(() => {
                console.log('Everything done with success!')
            })
        })
    })
})
