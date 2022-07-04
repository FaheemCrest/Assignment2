import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import Img11 from '/Users/prithvirajjanardhankurapothula/Desktop/Industrial project/frontend/src/newImage.jpg';
import { Container, Row, Col, Card, Form, Button, Navbar, Modal,InputGroup, FormControl} from 'react-bootstrap';
import { lightBlue } from '@material-ui/core/colors';
import { getToken} from './Utils/Common';

var QRCode = require('qrcode.react');
const Speakeasy = require("speakeasy");
const secretTemp = Speakeasy.generateSecret({ length: 20 });
const url = `${secretTemp.otpauth_url}&issuer=C3I Healthcare System`
console.log('Url='+url)
const secret =  secretTemp.base32;
console.log('key'+secret)

function Signupone(props) {

  const [loading, setLoading] = useState(false);
  const name = useFormInput('');
  const password = useFormInput('');
  const email = useFormInput('');
  const code = useFormInput('');
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

//const QRCode = require(`qrcode`)

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:5000/signup', { name: name.value, password: password.value, email: email.value, secret: secret }).then(response => {
      setLoading(false);
      setShow(true);
      //setUserSession(response.data.token, response.data.user);
      props.history.push('/login');
      console.log(response.data)
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }




  

  const handleShow = () => {
    setShow(false);
  }
  const data = 'kfsdj';
 
  return (
    <>
    <div className="row row-no-gutters">
      <div className="col-6 col-no-gutters" style={{backgroundColor:'skyblue',height: '100vh',alignItems:'center'}}>
      <h1 id="crest_logo" style={{textAlign:'center',paddingTop:'40%',color:'aliceblue'}} className="display-4">C3I<br/>Healthcare<br/>System</h1>
      </div>
          <div className="col-6 col-no-gutters">
              <div >
                            <div style={{textAlign:'center', paddingTop:'35%'}}><h3>Sign Up</h3><br /><br /></div> 
                            <div className='col-no-gutters'style={{paddingLeft:'40%'}}>
                                <div>
                                  Name<br />
                                  <input type="text" {...name} autoComplete="new-password" />
                                </div>

                                <div style={{ marginTop: 10 }}>
                                  Email<br />
                                  <input type="text" {...email} autoComplete="new-password" />
                                
              </div>
                                
                                <div style={{ marginTop: 10 }}>
                                  Password<br />
                                  <input type="password" {...password} autoComplete="new-password" />
                                  <div style={{ marginTop: 10 }}>
                <p>Scan the QR code on your Google Authenticator App before your signup</p>
              </div>
                                  <div style={{ marginLeft: 30,marginTop: 10 }}>
                                <QRCode value={url} />
              </div>
                                </div>
                                
                                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                                <input type="button" value={loading ? 'Loading...' : 'Signup'} onClick={handleLogin} disabled={loading} /><br />
                                </div>
            </div>
         
        

    </div>
  </div>
  </>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Signupone;