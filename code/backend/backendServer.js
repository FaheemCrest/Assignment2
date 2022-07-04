const express = require('express');
const cors = require('cors');
const speakeasy = require('speakeasy');
const mongoose = require("mongoose");
var cors_proxy = require('cors-anywhere');
require('dotenv').config();
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
//app.use(cors_proxy());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
var cryto = require('crypto');
const User = require("./models/user");

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

/*

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));


var corsOptions1 = {
  origin: 'http://8be5-118-210-190-172.ngrok.io/handleVar',
  optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions1));

*/

const allowlist = ['http://localhost:3000', 'http://8be5-118-210-190-172.ngrok.io/handleVar'];

    const corsOptionsDelegate = (req, callback) => {
    let corsOptions = { origin: true };

    //let isDomainAllowed = whitelist.indexOf(req.header('Origin')) !== -1;
    //let isExtensionAllowed = req.path.endsWith('.jpg');
/*
    if (isDomainAllowed && isExtensionAllowed) {
        // Enable CORS for this request
        corsOptions = { origin: true }
    } else {
        // Disable CORS for this request
        corsOptions = { origin: false }
    }
    */
    callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate));


var codeValue='1111';

const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const utils = require('./utils');
const url = process.env.ADDPATH;

//added code 
const userData = {
  userId: "123456",
  password: "1234",
  name: "prithvi",
  username: "prithvi",
  isAdmin: true
};


//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token) return next(); //if no token, continue

  token = token.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});


// request handlers
app.get('/', (req, res) => {
  if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
  res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
});


// validate the user credentials
app.post('/users/signin', function (req, res) {
  console.log('happening')
  console.log(req.body)
  const user = req.body.username;
  const pwd = req.body.password;
  // return 400 status if username/password is not exist
  if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Username or Password required."
    });
  }

  // return 401 status if the credential is not match.
  if (user !== userData.username || pwd !== userData.password) {
    return res.status(401).json({
      error: true,
      message: "Username or Password is Wrong."
    });
  }

/*

  // generate token
  const token = utils.generateToken(userData);
  // get basic user details
  const userObj = utils.getCleanUser(userData);
  // return the token along with user details
    return res.json({ user: userObj, token });
  */

    var min = 10000;
    var max = 90000;
    var num = Math.floor(Math.random() * min) + max;
    codeValue = String(num);
    console.log(codeValue)

 const mailgun = require("mailgun-js");
 const DOMAIN = 'sandbox8370f1b83ce442e19731351e1ef450f6.mailgun.org';
 const mg = mailgun({apiKey: '8aca294dd3a400ccb9a640b8cf12db90-90346a2d-639a0980', domain: DOMAIN});
 const data = {
	from: "Mailgun Sandbox <postmaster@sandbox8370f1b83ce442e19731351e1ef450f6.mailgun.org>",
to: "prithviraj janardhan Kurapothula <prithviraj.241@gmail.com>",
	subject: 'Code',
	text: codeValue
};


   // mg.messages().send(data, function (error, body) {console.log(body);});
    console.log('Sent Code is'+codeValue);
    const timeoutObj = setTimeout(() => {
      codeValue='----'
      console.log('Printing value:'+codeValue)
    }, 60000);
    //clearTimeout(timeoutObj);
    var24 = "ture"
    return res.json({var24});

});


//code
app.post('/users/code', function (req, res) {
  console.log('happening')
  console.log(req.body)
  const code = req.body.code;
  // return 400 status if username/password is not exist
  if (!code) {
    return res.status(400).json({
      error: true,
      message: "Code required."
    });
  }

  // return 401 status if the credential is not match.
  if (code !== codeValue) {
    return res.status(401).json({
      error: true,
      message: "code is Wrong."
    });
  }
  // generate token
  const token = utils.generateToken(userData);
  // get basic user details
  const userObj = utils.getCleanUser(userData);
  // return the token along with user details
    return res.json({ user: userObj, token });

/*
    var24 = "ture"
    return res.json({var24});
*/
});


app.post('/users/newcode', function (req, res) {
  const { email, code} = req.body;

  console.log('code=');
  //check if user exist
  User.findOne({ email }).exec((err, user) => {
    //console.log("checking at the "+user.secret)
    if (err || !user) {
      return res.status(400).json({
        error: "User With That Email Does Not Exist. Please Signup",
      });
    }
    console.log("checking at the "+user.secret)
    const secret = user.secret;
    console.log("checking at the "+secret)
    const token = code;
    
    const tokenValidate = speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
      window: 30
    });
    console.log('token++',tokenValidate);

    if(tokenValidate)
    {
      // generate token

      console.log('token++ djfsaljfdsla',tokenValidate);
  const token1 = utils.generateToken(userData);
  // get basic user details
  const userObj = utils.getCleanUser(userData);
  // return the token along with user details
    return res.json({ user: userObj, token:token1 });
    }
    else
    {
      return res.status(400).json({
        error: true,
        message: "Error."
      });
    }
  

/*
    var24 = "ture"
    return res.json({var24});
*/
var24 = "ture"
    return res.json({var24});
  });
});




// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required."
    });
  }
  // check token that was passed by decoding token using secret
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) return res.status(401).json({
      error: true,
      message: "Invalid token."
    });

    // return 401 status if the userId does not match.
    if (user.userId !== userData.userId) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    }
    // get basic user details
    var userObj = utils.getCleanUser(userData);
    return res.json({ user: userObj, token });
  });
});
// My code 
const accelerometer = require('./routes/acc');
app.use('/accelerometer', accelerometer);

const {
  signin,
  signup,
  signout,
} = require("./controllers/authControllers.js");
app.post("/signup", signup);
app.post("/signin", signin);

url1 = url + '/routes/asp.js'
const asp = require(url1);
app.use('/asp', asp);

url2 = url + '/routes/commandcenter.js'
const commandcenter = require(url2);
app.use('/commandcenter', commandcenter);

url3 = url + '/routes/controlcenter.js'
const controlcenter = require(url3);
app.use('/controlcenter', controlcenter);

url4 = url + '/routes/ecg.js'
const ecg = require(url4);
app.use('/ecg', ecg);

url5 = url + '/routes/emg.js'
const emg = require(url5);
app.use('/emg', emg);

url6 = url + '/routes/gpssensor.js'
const gpssensor = require(url6);
app.use('/gpssensor', gpssensor);

url7 = url + '/routes/heartratesensor.js'
const heartratesensor = require(url7);
app.use('/heartratesensor', heartratesensor);

url8 = url + '/routes/mongodb.js'
const mongodb = require(url8);
app.use('/mongodb', mongodb);

url9 = url + '/routes/tempetaturesensor.js'
const tempetaturesensor = require(url9);
app.use('/tempetaturesensor', tempetaturesensor);

url10 = url + '/routes/heart.js'
const heartRouter = require(url10);
app.use('/heart', heartRouter);

url11 = url + '/routes/temp.js'
const tempRouter = require(url11);
app.use('/dtemp', tempRouter);

url12 = url + '/routes/gps.js'
const dgpsRouter = require(url12);
app.use('/dgps', dgpsRouter);

url13 = url + '/routes/acc1.js'
const daccRouter = require(url13);
app.use('/dacc', daccRouter);

url14 = url + '/routes/ecgsensor.js'
const decgRouter = require(url14);
app.use('/decg', decgRouter);

url15 = url + '/routes/emgsensor.js'
const demgRouter = require(url15);
app.use('/demg', demgRouter);

url16 = url + '/routes/flagCheck.js'
const flagrrRouter = require(url16);
app.use('/flag', flagrrRouter);

const sensorRouter = require('./routes/sensor');
app.use('/sensor', sensorRouter);

const checkRouter = require('./routes/check');
app.use('/check', checkRouter);

const dataSensorRouter = require('./routes/dataSensor');
app.use('/dataSensor', dataSensorRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
