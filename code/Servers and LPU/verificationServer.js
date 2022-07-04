var express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
var app = express()
const cors = require('cors');
var hash;
var crypto = require('crypto');
const val1=crypto.createHash('sha256').update('hello1').digest('hex');
console.log(val1)


const allowlist = ['http://localhost:3000', 'http://95c5-49-178-116-222.ngrok.io/handleVar'];


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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res)
{
    res.send('verification server')
})

app.post('/handle',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body(npm insta)methods.
    console.log("Form server")
    console.log("hash:"+request.body.hash+" ID:BSN2937");
    this.hash = request.body.hash;
    response.send('true');
   
    });
    app.post('/handleVar',(request,response) => {
        //code to perform particular action.
        //To access POST variable use req.body()methods.
        console.log("For client")
        console.log("hash:"+request.body.hash+" ID:BSN2937");
        if(request.body.hash === this.hash)
        {
            response.send('true');
        }
        else
        {
            response.send('false');
        }
        });
var server = app.listen(8000,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Server listening on "+port)
})