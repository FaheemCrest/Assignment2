import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button, Navbar, Modal} from 'react-bootstrap';
import './Products.css';
import { getUser, removeUserSession } from '/Users/prithvirajjanardhankurapothula/Desktop/Industrial project/frontend/src/Utils/Common.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $, { timers } from 'jquery';
import Popper from 'popper.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Img1 from './img2.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import ReactApexCharts from 'react-apexcharts'
//import history from './../history';
import axios from "axios";
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox22374cf711474affaaa652ab32e7e38b.mailgun.org';
const mg = mailgun({apiKey: "87a9f2dc47afb3141f02eb2fdbad4e16-a09d6718-4a019a39", domain: DOMAIN});



class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
        
            series1: [{
                name: "Desktops",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }],
          series2: [{
            name: "Desktops",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }],

          options: {
            chart: {
              height: 100,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: '',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
                categories: [],
              }
          },

          temp: '',
          ox:'',
          hr:'',
          bp1:'',
          bp2:'',
          conmm:'',
          gps: '',    
          acc: '',    
          heart: '',
          temp_color: '',
          flagHash: '',
          message: '',
          show: false,
        status: '',
          
        
        };
        //this.handleShow = this.showMessage.bind(this);
        //this.handleClose = this.sendMessage.bind(this);
        this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMessangeChange = this.handleMessangeChange.bind(this);
        this.tick = this.tick.bind(this);
        this.num_test =[];
        this.temp_ecg='';
        this.temp_emg='';
        this.tempVal='';
        this.gpsVal='';
        this.accVal='';
        this.rateVal='';
        this.checkEcg = '';
        this.checkEmg = '';
        this.ecgVal = '';
        this. emgVal = '';
        this.hashValue = '';
        //this.flagHash = '';
        this.statusMes= '';
      }

      handleClose() {
        console.log('message'+this.state.message)
        const mailgun = require("mailgun-js");
        const DOMAIN = 'sandbox8370f1b83ce442e19731351e1ef450f6.mailgun.org';
        const mg = mailgun({apiKey: '8aca294dd3a400ccb9a640b8cf12db90-90346a2d-639a0980', domain: DOMAIN});
        const data = {
            from: "Mailgun Sandbox <postmaster@sandbox8370f1b83ce442e19731351e1ef450f6.mailgun.org>",
            to: "prithviraj janardhan Kurapothula <prithviraj.241@gmail.com>",
            subject: 'Temperature',
            text: 'ID:A675522\n'+'Heart Rate:'+this.state.heart+'\n Temperature:'+this.state.temp+'\n GPS Location:'+this.state.gps+'\n Message:'+this.state.message
        };
        mg.messages().send(data, function (error, body) {
            console.log(body);
        });
		this.setState({ show: false });


	}

	handleShow() {
		this.setState({ show: true });  
	}
    handleMessangeChange(e)
    {
        this.setState({message: e.target.value})
    }
    
    Dialog1()
    {
        return(
            <Modal show={this.state.show} onHide={this.handleClose1} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                                    <Modal.Header className="model_box">
                                    <Modal.Title className="model_text">Emergency Contact</Modal.Title>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                    Send
                                    </Button>
                                    </Modal.Header>
                                    <Modal.Body className="model_box">Enter Message
                                    <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} 
                                        onChange = {this.handleMessangeChange}
                                        />
                                    </Form.Group>
                                    </Form>
                                    </Modal.Body>
                                   
                                </Modal>
        );
    }
    
    /*
      

      handleMessageChange(e)
      {
        this.setState({message: e.target.value});
      }
      sendMessage()
      {
          console.log("This is the message"+this.message)
          this.setState({closeFlag: 'false'});
      }
      showMessage()
      {
          this.setState({closeFlag: 'true'});
      }
      Dialog2()
        {
            return(
                <Modal show={this.state.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >

                <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter messages</Form.Label>
                <Form.Control as="textarea" rows={3} 
                value={this.state.message}
                onChange = {this.handleMessageChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onSubmit={this.handleClose()}>
                Submit
            </Button>
            </Form>
            </Modal>

            );
        }
        
        */

      componentDidMount()
      {
          this.interval = setInterval(() => this.tick(), 3000);
      }
      componentWillUnmount() {
          clearInterval(this.interval);
        }

    handleLogout() {
            console.log('logOut')
            removeUserSession();
            this.props.history.push('/');

          }

        mesfamily()
        {
            //this.setState({closeFlag: 'true'});
            console.log("sending message")
            const data = {
                from: "Mailgun Sandbox <postmaster@sandbox22374cf711474affaaa652ab32e7e38b.mailgun.org>",
                to: "prithviraj janardhan Kurapothula <prithvijk.241@gmail.com>",
                subject: 'Temperature',
                text: 'A675522 looks critical\n hjghjg'
            };
            mg.messages().send(data, function (error, body) {
                //console.log(body);
            });
        }
        printMes()
        {
            this.setState({status: 'FAIL'});
        
        }



        tick() 
        {
            //temp
           
            var flag = 1;
            axios.get('http://127.0.0.1:5000/dtemp')
            .then(res => {
                this.tempVal = res.data[0].temp;
            })
            //gps
            axios.get('http://127.0.0.1:5000/dgps')
            .then(res => {
                this.gpsVal = res.data[0].gps;
                
            })
            //acc
            axios.get('http://127.0.0.1:5000/dacc')
            .then(res => {
                this.accVal = res.data[0].acc;
            })
            //heart
           axios.get('http://127.0.0.1:5000/heart')
           .then(res => {
               this.rateVal = res.data[0].heartrate;
           })
           //emg
           axios.get('http://127.0.0.1:5000/demg')
           .then(res => {
               this.checkEmg=res.data[0].emg[39];
               this.emgVal = res.data[0].emg;
           })
           //ecg
           axios.get('http://127.0.0.1:5000/decg')
           .then(res => {
               this.checkEcg=res.data[0].ecg[39];
               this.ecgVal = res.data[0].ecg;
           })
           

           /*
           axios.get('http://c4ab-14-2-65-97.ngrok.io ')
           .then(res => {
              
           })
           */
           
          //if ()

            //console.log('happksdfjkdfs,=',this.props.flagHash);
            if(flag==1)
            {
                if(this.state.temp != this.tempVal)
                {
                    this.setState({temp: this.tempVal});
                    //console.log(this.state.temp)
                    var temp1=parseFloat(this.tempVal)
                    if(temp1<35 || temp1>38)
                    {
                        //console.log('red happening')
                        this.setState({temp_color: 'red'});
                    }
                    else if(temp1>36.11 || temp1<37.22)
                    {
                        //console.log('red happening')
                        this.setState({temp_color: 'green'});
                    }
                    else if(temp1>35 || temp1<36.11 || temp1>37.22 || temp1<38)
                    {
                        //console.log('red happening')
                        this.setState({temp_color: 'yellow'});
                    }
                    var cryto = require('crypto');
           var self=this;
           this.hashValue = cryto.createHash('sha256').update(this.tempVal).digest('hex');;
           axios.post('http://e3b9-49-178-116-222.ngrok.io/handleVar', {
                hash: this.hashValue
                })
                .then(function (response) {
                console.log(response);
                if(response.data == true)
                {
                    console.log('Integrity Verification successful');
                    //this.flagHash = 0;
                    flag = 0
                    self.statusMes = 'FAIL';
                    //this.setState({status: 'PASS'});
                    //this.setState({flagHash: response.data});
                    //console.log(response.data)
                    self.statusMes = 'PASS';
                    self.setState({status: 'PASS'});
                }
                else 
                {
                    console.log('Integrity Verification unsuccessful');
                    //this.setState({status: 'FAIL'});
                    self.statusMes = 'FAIL';
                    self.setState({status: 'FAIL'});
                }
    
                })
                .catch(function (error) {
                console.log(error);
                self.statusMes = 'Server Not Working';
                self.setState({status: 'Server Not WorkingL'});
                self.printMes.bind();
            
          });
                }
                if(this.state.gps != this.gpsVal)
                {
                    this.setState({gps: this.gpsVal});
                    //console.log(this.state.gps)
                }
                
                if(this.state.acc != this.accVal)
                {
                    this.setState({acc: this.accVal});
                    //console.log(this.state.acc)
                }
                if(this.state.heart != this.rateVal)
               {
                   this.setState({heart: this.rateVal});
                   //console.log(this.state.heart)
               }
               if(this.checkEmg!=this.temp_emg)
               {
                   this.temp_emg=this.checkEmg;
                   const val= [{
                       name: "Desktops",
                       data: this.emgVal
                   }]
                   //console.log('emg happening')
                   this.setState({series2:val});
               }
               if(this.checkEcg!=this.temp_ecg)
               {
                   this.temp_ecg=this.checkEcg;
                   const val= [{
                       name: "Desktops",
                       data: this.ecgVal
                   }]
                   //console.log('ecg happening')
                   this.setState({series1:val});
                   const num=Math.floor(Math.random() * (100 - 90 + 1)) + 110;
                    const num1=Math.floor(Math.random() * (100 - 90 + 1)) + 70;
                    this.setState({bp1: num});
                    this.setState({bp2: num1});
               }
               
            }
            else
            {
                console.log('Values are not being changed because of unsuccessful verification')
            }
            
        }

    
    render() {
        return (
            <>
            <div className="row row-no-gutters">
                <div id="navbar" className="col-2 col-no-gutters">
                    <div className="circular_picture">
                        <img src={Img1} />
                        </div>
                        <h4 id="login_name">
                        </h4>
                        <hr id="saperation"/>
                        <h6 className="nav_options">
                        System Functionalities 
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor" onClick={()=>this.props.history.push('/dashboard')}>
                        Home
                        <div className="nav_icons" >
                            <AiIcons.AiOutlineHome />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor">
                        Add Patient
                        <div className="nav_icons" >
                            <AiIcons.AiOutlineUserAdd />
                        </div>
                        </li>
                        </ul>
                        <hr id="saperation"/>
                        <h6 className="nav_options">
                        Emergency Contact
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor" onClick={()=>this.handleShow() }>
                        Ambulance
                        <div className="nav_icons" >
                            <FaIcons.FaAmbulance />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor" onClick={()=>this.mesfamily()}>
                        Practitioner

                        <div className="nav_icons" >
                            <BsIcons.BsPersonFill />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor" onClick={()=>this.mesfamily()}>
                        Family
                        <div className="nav_icons" >
                            <BsIcons.BsFillPeopleFill/>
                        </div>
                        </li>
                        </ul>
                        <hr id="saperation"/>
                        <h6 className="nav_options">
                        Security
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor" onClick={()=>this.props.history.push('/Contact')}>
                        C3I Security
                        <div className="nav_icons" >
                            <MdIcons.MdSecurity />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor">
                        Data Integrity Status
                        <div className="nav_icons" >
                            <h6>
                                {this.state.status}
                            </h6>
                        </div>
                        </li>
                        </ul>`
                    </div>

                <div className="col-10 col-no-gutters">
                    <div className="card main_cards">
                        <p className="card_title">
                        Patient info
                        </p>
                        <div className="row">
                            <div className="col-6 col-no-gutters">
                                <p className="main_text">
                                    Patient Name: Raj 
                                </p>
                                <p className="main_text">
                                    Patient ID: A675522
                                </p>
                            </div>
                            <div className="col-6 col-no-gutters">
                                <div id="progress_card" className="card main_cards">
                                <p className="main_text progress_title">
                                Condition: Normal 
                                <div  className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated  bg-danger" style={{width:'60%'}}>Normal</div>
                                </div>
                                <div id="location">
                                Live Location: {this.state.gps}
                                </div>
                                </p>            
                            </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Heart Rate
                                </p>
                                <p id="actual_HR">
                                {this.state.heart}
                                </p>
                                <p id="actual_HR_L">
                                    bpm
                                </p>
                                
                        
                            </div>   
                        </div>
                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Blood Pressure
                                </p>
                                <p id="actual_BP">
                                {this.state.bp1}/{this.state.bp2}
                                </p>
                                <p id="actual_BP_L">
                                    SYS/DIA
                                </p>
                            </div>   
                        </div>

                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Body Acceleration
                                </p>
                                <p id="actual_PO " style={{color:'green', textAlign: 'center', fontSize: '75px', marginBotton: '0'}}>
                                {this.state.acc}
                                </p>
                                <p id="actual_PO_L">
                                    m/s2
                                </p>

                            </div>   
                        </div>

                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Temperature
                                </p>
                                <p id="actual_T" style={{color:this.state.temp_color}}>
                                    {this.state.temp}
                                </p>
                                <p id="actual_T_L">
                                    Celsius
                                </p>
                            </div>   
                        </div>
                        
                    </div>

                        

                    <div className="row">
                        <div className="col-6 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    ECG
                                </p>
                                <div id="chart">
                                <ReactApexCharts options={this.state.options} series={this.state.series1} type="line" height={350} />
                                </div>
                        
                            </div>   
                        </div>
                        <div className="col-6 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    EMG
                                </p>
                                <div id="chart">
                                <ReactApexCharts options={this.state.options} series={this.state.series2} type="line" height={350} />
                                </div>
                        
                            </div>   
                        </div>
                        
                    </div>
                </div>
            </div>,
            {this.Dialog1()}
            </>

        );
    }
}

export default Products;