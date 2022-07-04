import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import Img11 from '/Users/prithvirajjanardhankurapothula/Desktop/Industrial project/frontend/src/newImage.jpg';
import { Container, Row, Col, Card, Form, Button, Navbar, Modal,InputGroup, FormControl} from 'react-bootstrap';
import { lightBlue } from '@material-ui/core/colors';
import { getToken} from './Utils/Common';

function Login(props) {
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    console.log('hppdjfs')
    axios.get(`http://localhost:5000/verifyToken?token=${token}`).then(response => {
      //setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
      console.log('hppdjfs')
      setAuthLoading(false);
    }).catch(error => {
      //removeUserSession();
      setAuthLoading(false);
    });
  }, []);




  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const email = useFormInput('');
  const code = useFormInput('');
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:5000/signin', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setShow(true);
      //setUserSession(response.data.token, response.data.user);
      //props.history.push('/dashboard');
      console.log(response.data)
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  const handleCode = (event) => {
    event.preventDefault();
    setError(null);
    console.log(code.value)
    axios.post('http://localhost:5000/users/newcode', { code: code.value, email:email.value}).then(response => {
      setLoading(false);
  
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
      console.log(response.data)
    }).catch(error => {
      //setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  const handleShow = () => {
    setShow(false);
  }
  const handlesignup = () => {
    props.history.push('/signup');
  }
 
  return (
    <div className="row row-no-gutters">
      <div className="col-6 col-no-gutters" style={{backgroundColor:'skyblue',height: '100vh',alignItems:'center'}}>
      <h1 id="crest_logo" style={{textAlign:'center',paddingTop:'40%',color:'aliceblue'}} className="display-4">C3I<br/>Healthcare<br/>System</h1>
      </div>
          <div className="col-6 col-no-gutters">
              <div >
                            <div style={{textAlign:'center', paddingTop:'35%'}}><h3>Login</h3><br /><br /></div> 
                            <div className='col-no-gutters'style={{paddingLeft:'40%'}}>
                                <div>
                                  Email<br />
                                  <input type="text" {...email} autoComplete="new-password" />
                                </div>
                                <div style={{ marginTop: 10 }}>
                                  Password<br />
                                  <input type="password" {...password} autoComplete="new-password" />
                                </div>
                                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                                <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />

              
                                </div>
                                <div style={{ marginTop: 10 }}>
                                  <Button type='button' onClick={handlesignup}>
                                  Sign Up
                                  </Button>                             
                                </div>

            </div>
         <div>
         <Modal show={show}  size="s" aria-labelledby="contained-modal-title-vcenter" centered >
         <Modal.Header className="model_box">
                                       <Modal.Title className="model_text">Enter the Code</Modal.Title>
                                       <Button variant="secondary" onClick={handleShow}>
                                       Close
                                       </Button>
                                       </Modal.Header>
                                       <Form>
                                         <Row className="align-items-center">
                                           <Col xs="auto" >
                                             <Form.Control 
                                               style={{marginLeft:"15%"}}
                                               className="mb-2"
                                               id="inlineFormInput"
                                               placeholder="Enter Code"
                                               {...code}
                                             />
                                           </Col>
                                           
                                           <Col xs="auto" style={{paddingLeft:"15%"}}>
                                           {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                                             <Button type="submit" className="mb-2" onClick={handleCode}>
                                               Submit
                                             </Button>
                                           </Col>
                                         </Row>
                                         </Form>
   
                 
           </Modal>
         </div>

    </div>
  </div>
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

export default Login;