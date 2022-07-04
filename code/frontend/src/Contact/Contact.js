import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button, Navbar, Modal} from 'react-bootstrap';
import '/Users/prithvirajjanardhankurapothula/Desktop/Industrial project/frontend/src/Contact/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
//import history from './../history';
//import Popper from 'popper.js';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Img1 from './img5.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
//import ReactApexCharts from 'react-apexcharts'
//import history from './../history';
//import Popup from '/Users/prithvirajjanardhankurapothula/Desktop/project_final/crest/src/Componet_popup/Popup.js';
//import Popup from 'reactjs-popup';
import "bootstrap/dist/js/bootstrap.min.js";
import 'reactjs-popup/dist/index.css';
import { useState } from "react";
import axios from "axios";



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            node:'',
            show: false,
            show1: false,
            vul: 'raj',
            vul_display: '',
            asp: '',
            ar: '',
            ai: '',
            cbs: '',
            asp1: '',
            ar1: '',
            ai1: '',
            cbs1: '',
            genButtons: [],
            val_cal: [],
            val_table: [],
            d_display: 'none',
            d1_display: 'none',
            s1_display: 'none',
            s_display: 'none',
            color_d:'#455eeb',
            color_ecg:'#455eeb',
            color_ecg1:'white',
            color_temperature:'#455eeb',
            color_temperature1:'white',
            color_heart:'#455eeb',
            color_heart1:'white',
            color_gps:'#455eeb',
            color_gps1:'white',
            color_acc:'#455eeb',
            color_acc1:'white',
            color_emg:'#455eeb',
            color_emg1:'white',
            color_control:'#455eeb',
            color_command:'#455eeb',
            line1:'#443c3d',
            line2:'#443c3d',
            line3:'#443c3d',
            line4:'#443c3d',
            line5:'#443c3d',
            line6:'#443c3d',
            line7:'#443c3d',
            line8:'#443c3d',
            line9:'#443c3d',
            line10:'#443c3d',
            line11:'#443c3d',
            line12:'#443c3d',
            vulTable: [
             ],
             flag_sensor1: true,
             flag_sensor2: true,
             flag_sensor3: true,
             flag_sensor4: true,
             flag_sensor5: true,
             flag_sensor6: true,
             display_sensor1: 'visible',
             display_sensor11: false,
             display_sensor2: 'visible',
             display_sensor12: false,
             display_sensor3: 'visible',
             display_sensor13: false,
             display_sensor4: 'visible',
             display_sensor14: false,
             display_sensor5: 'visible',
             display_sensor15: false,
             display_sensor6: 'visible',
             display_sensor16: false,
             rdisplay_sensor1: 'false',
             rdisplay_sensor2: 'true',
             rdisplay_sensor3: 'true',
             rdisplay_sensor4: 'true',
             rdisplay_sensor5: 'true',
             rdisplay_sensor6: 'true',

    };  
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleShow1 = this.handleShow1.bind(this);
    this.handleClose1 = this.handleClose1.bind(this);
    this.dataCollectionCenterVul=this.dataCollectionCenterVul.bind(this);
    this.dataCollectionCenterColor=this.dataCollectionCenterColor.bind(this);
    this.acc_n=this.acc_n.bind(this);
    this.ecg_n=this.ecg_n.bind(this);
    this.emg_n=this.emg_n.bind(this);
    this.control_n=this.control_n.bind(this);
    this.heart_n=this.heart_n.bind(this);
    this.temp_n=this.temp_n.bind(this);
    this.gps_n=this.gps_n.bind(this);
    this.cloud_n=this.cloud_n.bind(this);
    this.command_n=this.command_n.bind(this);
    this.tick=this.tick.bind(this);
    this.Dialog2_functions=this.Dialog2_functions.bind(this);
    this.paths=this.paths.bind(this);
    this.colors_m=this.paths.bind(this);
    this.renderTableData_node=this.renderTableData_node.bind(this);
    //this.numbers = [1, 4, 9];
    this.all_asp =[]
    this.temp='';
     this.heart='';
       this.gps='';
        this.acc='';
        this.ecg='';
        this.emg='';
        this.messageOut = '';
    }
    

    jQuerycode = () => {
        $("#button_closejkdsaf").click(function(){
           
            $('.vulnaribilities').css('display','none');
        });  
      }
    tick() {
        var attackProbability=0;
        var attackImpact=0;
        var attackRisk=0;
        var cvssBaseScore=0;
        var flag=0;

        
        axios.get('http://127.0.0.1:5000/flag')
            .then(res => {
                //console.log(res.data[0]);
                this.temp=res.data[0].temperature;
                this.heart=res.data[0].heartrate;
                this.gps=res.data[0].gps;
                this.ecg=res.data[0].ecg;
                this.emg=res.data[0].emg;
                this.acc=res.data[0].acc;
                
            })
       
            

        axios.get('http://127.0.0.1:5000/asp')
        .then(res => {
         const info = res.data;
         //console.log('-----')
         //console.log('----')
         //console.log('----')
         //console.log('----')
         for(var item in info)
         {
             if(this.gps=='0' && info[item].nodeName=='gpssensors')
             {
                 console.log('happening')
                 console.log(info[item].nodeName)
                 this.setState({display_sensor14:true,display_sensor4:'hidden'});
                 continue;
             }
             else if(this.gps=='1' && info[item].nodeName=='gpssensors')
             {
                console.log('happening 22')
                console.log(info[item].nodeName);
                this.setState({display_sensor14:false,display_sensor4:'visible'});

             }
            
             if(this.temp=='0' && info[item].nodeName=='temperaturesensors')
             {
                console.log('happening')
                console.log(info[item].nodeName)
                this.setState({display_sensor12:true,display_sensor2:'hidden'});
                 continue;
             }
             else if(this.temp=='1' && info[item].nodeName=='temperaturesensors')
             {
                console.log('happening 22')
                console.log(info[item].nodeName);
                this.setState({display_sensor12:false,display_sensor2:'visible'});

             }
             if(this.heart=='0' && info[item].nodeName=='heartratesensors')
             {
                console.log('happening')
                console.log(info[item].nodeName)
                this.setState({display_sensor13:true,display_sensor3:'hidden'});
                 continue;
             }
             else if(this.heart=='1' && info[item].nodeName=='heartratesensors')
             {
                console.log('happening 22')
                console.log(info[item].nodeName);
                this.setState({display_sensor13:false,display_sensor3:'visible'});

             }
             
             if(this.emg=='0' && info[item].nodeName=='emgs')
             {
                console.log('happening')
                console.log(info[item].nodeName)
                this.setState({display_sensor16:true,display_sensor6:'hidden'});
                 continue;
             }
             else if(this.emg=='1' && info[item].nodeName=='emgs')
             {
                console.log('happening 22')
                console.log(info[item].nodeName);
                this.setState({display_sensor16:false,display_sensor6:'visible'});

             }
            
             if(this.ecg=='0' && info[item].nodeName=='ecgs')
             {
                console.log('happening')
                console.log(info[item].nodeName)
                this.setState({display_sensor11:true,display_sensor1:'hidden'});
                 continue;
             }
             else if(this.ecg=='1' && info[item].nodeName=='ecgs')
             {
                console.log('happening 22')
                console.log(info[item].nodeName);
                this.setState({display_sensor11:false,display_sensor1:'visible'});

             }
             if(this.acc=='0' && info[item].nodeName=='accelerometers')
             {
                console.log('happening')
                console.log(info[item].nodeName)
                this.setState({display_sensor15:true,display_sensor5:'hidden'});
                 continue;
             }
             else if(this.acc=='1' && info[item].nodeName=='accelerometers')
             {
                console.log('happening 22')
                console.log(info[item].nodeName);
                this.setState({display_sensor15:false,display_sensor5:'visible'});
             }
             //console.log(info[item].nodeName)
             if(true){
                if(flag==0)
                {
                    
                   attackProbability=parseFloat(info[item].attackProbability)
                   flag=1;
                }
                else
                {
                   attackProbability=parseFloat(info[item].attackProbability)*attackProbability;
                }
                //console.log(info[item].attackProbability)
                //console.log(info[item].nodeName)
                if(attackImpact<parseFloat(info[item].attackImpact))
                {
                    attackImpact=parseFloat(info[item].attackImpact)
                }
                if(attackRisk<parseFloat(info[item].attackRisk))
                {
                    attackRisk=parseFloat(info[item].attackRisk)
                }
                if(cvssBaseScore<parseFloat(info[item].cvssBaseScore))
                {
                    cvssBaseScore=parseFloat(info[item].cvssBaseScore)
                }
             }
             //attackProbability=attackProbability.toFixed(2);
         }
         this.setState({asp:attackProbability,ai:attackImpact,ar:attackRisk,cbs:cvssBaseScore});

        })
    }
    componentDidMount()
    {
        this.interval = setInterval(() => this.tick(), 1000);
        this.jQuerycode();
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
        
	}

    handleClose1() {
		this.setState({ show1: false });
	}

	handleShow1() {
		this.setState({ show1: true });
	}
    dataCollectionCenterVul()
    {
        this.setState({ node: 'datacollectioncenters'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/dataSensor')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_d:'red'});
       }) 
    }
    acc_n()
    {
       
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        this.setState({ node: 'accelerometers'});
        axios.get('http://127.0.0.1:5000/accelerometer')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_acc:'red'});
        
       }) 
    }
    ecg_n()
    {
        
        this.setState({node:'ecgs'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/ecg')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_ecg:'red'});
        
       }) 
    }
    emg_n()
    {
        this.setState({node:'emgs'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/emg')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_emg:'red'});
        
       }) 
    }
    control_n()
    {
       
        this.setState({node:'controlcenters'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/controlcenter')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_control:'red'});
        
       }) 
    }
    heart_n()
    {
        this.setState({node:'heartratesensors'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/heartratesensor')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_heart:'red'});
        
       }) 
    }
    temp_n()
    {
        this.setState({node:'temperaturesensors'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/tempetaturesensor')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_temperature:'red'});
        
       }) 
    }
    gps_n()
    {
        this.setState({node:'gpssensors'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/gpssensor')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_gps:'red'});
        
       }) 
    }
    cloud_n()
    {
        this.setState({node:'mongodbs'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/mongodb')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_cloud:'red'});
        
       }) 
    }
    command_n()
    {
        this.setState({node:'commandcenters'});
        this.setState({d_display:'contents'});
        this.setState({ show: false });
        axios.get('http://127.0.0.1:5000/commandcenter')
       .then(res => {
        const info = res.data;
        this.setState({vulTable:info});
        this.setState({color_command:'red'});
        
       }) 
    }
    dataCollectionCenterColor()
    {
        this.setState({color_d:'#455eeb'});
        this.setState({color_acc:'#455eeb'});
        this.setState({color_ecg:'#455eeb'});
        this.setState({color_emg:'#455eeb'});
        this.setState({color_control:'#455eeb'});
        this.setState({color_heart:'#455eeb'});
        this.setState({color_temperature:'#455eeb'});
        this.setState({color_gps:'#455eeb'});
        this.setState({color_cloud:'#455eeb'});
        this.setState({color_command:'#455eeb'});
        this.setState({d_display:'none'});
        this.setState({d1_display:'none'});
        this.setState({s1_display:'none'});
        this.setState({line1:'#443c3d'});
        this.setState({line2:'#443c3d'});
        this.setState({line3:'#443c3d'});
        this.setState({line4:'#443c3d'});
        this.setState({line5:'#443c3d'});
        this.setState({line6:'#443c3d'});
        this.setState({line7:'#443c3d'});
        this.setState({line8:'#443c3d'});
        this.setState({line9:'#443c3d'});
        this.setState({line10:'#443c3d'});
        this.setState({line11:'#443c3d'});
        this.setState({line12:'#443c3d'});
        this.setState({val_cal:[]});
        this.setState({node:''});
        
    }
    
    Popup(props) {
        return (
        <h1>happy</h1>); 
    }
    Dialog1()
    {
        return(
            <Modal show={this.state.show} onHide={this.handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                                    <Modal.Header className="model_box">
                                    <Modal.Title className="model_text">Node Level Security Analysis</Modal.Title>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                    </Button>
                                    </Modal.Header>
                                    <Modal.Body className="model_box">Select Node
                                    </Modal.Body>
                                    <Modal.Footer className="model_box">
                                    <Button variant="primary" id="open_table" disabled={this.state.display_sensor15} onClick={this.acc_n}>
                                    Accelerometer
                                    </Button>
                                    <Button variant="primary" disabled={this.state.display_sensor11}  onClick={this.ecg_n}>
                                    ECG
                                    </Button>
                                    <Button variant="primary"  disabled={this.state.display_sensor16}  onClick={this.emg_n}>
                                    EMG
                                    </Button>
                                    <Button variant="primary" disabled={this.state.display_sensor13}  onClick={this.heart_n}>
                                    Heart rate
                                    </Button>
                                    <Button variant="primary"  disabled={this.state.display_sensor12}  onClick={this.temp_n}>
                                    Temperature
                                    </Button>
                                    <Button variant="primary" disabled={this.state.display_sensor14}  onClick={this.gps_n}>
                                    GPS
                                    </Button>
                                    <Button variant="primary" id="dcc" onClick={this.dataCollectionCenterVul}>
                                    Data Collection Centre
                                    </Button>
                                    <Button variant="primary"  onClick={this.cloud_n}>
                                    Cloud
                                    </Button>
                                    <Button variant="primary" onClick={this.control_n}>
                                   Control Unit
                                    </Button>
                                    <Button variant="primary" onClick={this.command_n}>
                                    Command Unit
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
        );
    }

    Dialog2_functions(data)
    {
        this.setState({ show1: false });
        this.setState({d1_display:'contents'});
        //console.log(data);
        data=parseInt(data);
        if(data==1)
        {
            data=[1];
            
            this.setState({genButtons:data});
        }
        if(data==2)
        {
            data=[2];
            
            this.setState({genButtons:data})
        }
        if(data==3)
        {
            data=[3];
            
            this.setState({genButtons:data})
        }
        if(data==4)
        {
            data=[4];
            
            this.setState({genButtons:data})
        }
        if(data==5)
        {
            data=[5];
            
            this.setState({genButtons:data})
        }
        if(data==6)
        {
            data=[6];
            
            this.setState({genButtons:data})
        }
        if(data==7)
        {
            data=[7,8,9,10,11,12];
            this.setState({genButtons:data})
        }
        if(data==8)
        {
            data=[13,14,15,16,17,18,19,20,21,22,23];
            this.setState({genButtons:data})
        }
        if(data==9)
        {
            data=[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
            this.setState({genButtons:data})
        }
        if(data==10)
        {
            data=[41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];
            this.setState({genButtons:data})
        }

        
        
    }
    Dialog2()
    {
        return(
            <Modal show={this.state.show1} onHide={this.handleClose1} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                                    <Modal.Header className="model_box">
                                    <Modal.Title className="model_text">Possible Attack Path</Modal.Title>
                                    <Button variant="secondary" onClick={this.handleClose1}>
                                    Close
                                    </Button>
                                    </Modal.Header>
                                    <Modal.Body className="model_box">Select Target
                                    </Modal.Body>
                                    <Modal.Footer className="model_box">
                                    <Button variant="primary" id="open_table" disabled={this.state.display_sensor15} onClick={() => this.Dialog2_functions('1')}>
                                    Accelerometer
                                    </Button>
                                    <Button variant="primary" disabled={this.state.display_sensor11} onClick={() => this.Dialog2_functions('2')}>
                                    ECG
                                    </Button>
                                    <Button variant="primary" disabled={this.state.display_sensor16} onClick={() => this.Dialog2_functions('3')}>
                                    EMG
                                    </Button>
                                    <Button variant="primary" disabled={this.state.display_sensor13} onClick={() => this.Dialog2_functions('4')}>
                                    Heart rate
                                    </Button>
                                    <Button variant="primary" disabled={this.state.display_sensor12} onClick={() => this.Dialog2_functions('5')}>
                                    Temperature
                                    </Button>
                                    <Button variant="primary" disabled={this.state.display_sensor14} onClick={() => this.Dialog2_functions('6')}>
                                    GPS
                                    </Button>
                                    <Button variant="primary" id="dcc" onClick={() => this.Dialog2_functions('7')}>
                                    Data Collection Centre
                                    </Button>
                                    <Button variant="primary"  onClick={() => this.Dialog2_functions('10')}>
                                    Cloud
                                    </Button>
                                    <Button variant="primary"  onClick={() => this.Dialog2_functions('8')}>
                                   Control Unit
                                    </Button>
                                    <Button variant="primary"  onClick={() => this.Dialog2_functions('9')}>
                                    Command Unit
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
        );
    }

    color_find(num)
    {
        var num_color;
            if(num<3.9)
           {
                num_color='green';
           } 
           else if(num<6.9)
           {
               num_color='yellow';
           }
           else
           {
               num_color='red';
           }
        return(num_color);
    }
    
     renderTableData() {
         
        return this.state.vulTable.map((vuln, index) => {
           const { cvssBaseScore, exploitabilityScore,impactScore, vulnerability, _id } = vuln //destructuring
           var asp = parseFloat(exploitabilityScore);
           var ai = parseFloat(impactScore);
           asp=asp/10;
           var ar= asp*ai;
           
           var ar_color=this.color_find(ar);
           var asp_color;
           if(asp<0.39)
           {
            asp_color='green';
           } 
           else if(asp<0.69)
           {
            asp_color='yellow';
           }
           else
           {
            asp_color='red';
           }
           var is_color=this.color_find(ai);
           var cv=parseFloat(cvssBaseScore);
           var cv_color=this.color_find(cv);
           //var list=[asp,ai,ar,cv];
           //console.log(this.all_asp)
           //this.all_asp.push(list);
           asp= asp.toFixed(2);
           ar= ar.toFixed(2);
           return (
              <tr style={{border: '1px dotted white'}} key={_id}>
                 <td style={{textAlign:'left',border: '1px dotted white'}}>{vulnerability}</td>
                 <td style={{color:asp_color,border: '1px dotted white'}}>{asp}</td>
                 <td style={{color:is_color,border: '1px dotted white'}}>{impactScore}</td>
                 <td style={{color:ar_color,border: '1px dotted white'}}>{ar}</td>
                 <td style={{color:cv_color,border: '1px dotted white'}}>{cvssBaseScore}</td>
              </tr>
           )
        })
        
     }
     renderTableData_node() {
         var attackProbability;
         var attackImpact=0;
         var attackRisk=0;
         var cvssBaseScore=0;
         var flag=0;
         //console.log("happening");
         
         axios.get('http://127.0.0.1:5000/asp')
         .then(res => {
          const info = res.data;
          for(var item in info)
          {
            var n=(this.state.node).localeCompare(info[item].nodeName);
              if(n==0)
              {
                //console.log(this.state.node);
                //console.log("happening2");
                //console.log(info[item].nodeName);
                 attackProbability=info[item].attackProbability;
                 attackImpact=info[item].attackImpact;
                 attackRisk=info[item].attackRisk;
                 cvssBaseScore=info[item].cvssBaseScore;
                 break;
        
              }
          }
          
          var nm=(this.state.node).localeCompare('');
          if(nm==1)
          {
            //console.log(attackProbability);
            //console.log(attackImpact);
            //console.log(attackRisk);
            //console.log(cvssBaseScore);
            this.setState({asp1:attackProbability,ai1:attackImpact,ar1:attackRisk,cbs1:cvssBaseScore});
          }
          //
          /*
          return (
            <tr>
               <td>{attackProbability}</td>
               <td>{attackImpact}</td>
               <td>{attackRisk}</td>
               <td>{cvssBaseScore}</td>
            </tr>

//<td >Attack Probability</td>
//<td>Attack Impact</td>
//<td>Attack Risk</td>
//<td>CVSS Base Score</td>
         );
          */
         return (
            <tr style={{border: '1px dotted white'}}>
               <td style={{border: '1px dotted white'}}>{attackProbability}</td>
               <td style={{border: '1px dotted white'}}>{attackImpact}</td>
               <td style={{border: '1px dotted white'}}>{attackRisk}</td>
               <td style={{border: '1px dotted white'}}>{cvssBaseScore}</td>
            </tr>
         );
         
        }  )
         
     }

//console.log(info[item].nodeName)
             /*
             flag=0
        for(var i=0;i<this.state.val_cal.length;i++)
             {
                var n=this.state.val_cal[i].localeCompare(info[item].nodeName);
                 if(n==0)
                 {
                     flag=1
                     break;
                 }
             }
             if(flag==0)
             {
                 continue;
             }
             */



    table_values()
    {
        var attackProbability=0;
        var attackImpact=0;
        var attackRisk=0;
        var cvssBaseScore=0;
        const info = this.state.val_table;
        var flag=0;
        //console.log(info);
        //console.log(this.state.val_cal)
         for(var item in info)
         {
            for(var i=0;i<this.state.val_cal.length;i++)
            {
               var n=this.state.val_cal[i].localeCompare(info[item].nodeName);
               //console.log(n)
                if(n==0)
                {
                    console.log("prob")
                    console.log(info[item].attackProbability)
                    console.log("node")
                    console.log(info[item].nodeName)
                    console.log(this.state.val_cal[i])
                    if(flag==0)
                        {
                            attackProbability=parseFloat(info[item].attackProbability)
                            console.log("prob1")
                            console.log("happening")
                            flag=1;
                        }
                        else
                        {
                            attackProbability=parseFloat(info[item].attackProbability)*attackProbability;
                        }
                        //attackProbability=parseFloat(info[item].attackProbability)+attackProbability;
                        attackImpact=parseFloat(info[item].attackImpact)+attackImpact
                        attackRisk=parseFloat(info[item].attackRisk)+attackRisk
                        cvssBaseScore=parseFloat(info[item].cvssBaseScore)+cvssBaseScore

                        //console.log("values")
                        //console.log(attackProbability);
                        //console.log(attackImpact);
                        //console.log(attackRisk);
                        //console.log(cvssBaseScore);
            
                                    
                    }
                }
         }
         console.log("value");
         console.log("attackProbability");
         attackProbability=attackProbability;
         attackImpact=attackImpact.toFixed(2);
         attackRisk=attackRisk.toFixed(2);
         cvssBaseScore=cvssBaseScore.toFixed(2);
         
         
         return (
            <tr style={{border: '1px dotted white'}} >
               <td style={{border: '1px dotted white'}}>{attackProbability}</td>
               <td style={{border: '1px dotted white'}}>{attackImpact}</td>
               <td style={{border: '1px dotted white'}}>{attackRisk}</td>
               <td style={{border: '1px dotted white'}}>{cvssBaseScore}</td>
            </tr>
         );
         
    }
    
        
         
     
     genbb(data)
     {
         return
         {
            <Button variant="primary" onClick={this.ecg_n}>
                    {data}
          </Button> 
         }
     }
     paths(data)
     {
        var num=data.i;
        num=parseInt(num);
        //console.log(num)
        this.setState({color_d:'#455eeb'});
        this.setState({color_acc:'#455eeb'});
        this.setState({color_ecg:'#455eeb'});
        this.setState({color_emg:'#455eeb'});
        this.setState({color_control:'#455eeb'});
        this.setState({color_heart:'#455eeb'});
        this.setState({color_temperature:'#455eeb'});
        this.setState({color_gps:'#455eeb'});
        this.setState({color_cloud:'#455eeb'});
        this.setState({color_command:'#455eeb'});
        this.setState({line1:'#443c3d'});
        this.setState({line2:'#443c3d'});
        this.setState({line3:'#443c3d'});
        this.setState({line4:'#443c3d'});
        this.setState({line5:'#443c3d'});
        this.setState({line6:'#443c3d'});
        this.setState({line7:'#443c3d'});
        this.setState({line8:'#443c3d'});
        this.setState({line9:'#443c3d'});
        this.setState({line10:'#443c3d'});
        this.setState({line11:'#443c3d'});
        this.setState({line12:'#443c3d'});
        this.setState({s1_display:'none'});
        this.setState({val_cal:[]});
        
        if(num==1)
        {
            
            const data2=["accelerometers"];
            this.setState({val_cal:data2});
            //console.log(data2)
            this.setState({color_acc:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;

            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==2)
        {
            const data2=["ecgs"];
            this.setState({val_cal:data2});
            this.setState({color_emg:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==3)
        {
            const data2=["emgs"];
            this.setState({val_cal:data2});
            this.setState({color_emg:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==4)
        {
            const data2=["heartratesensors"];
            this.setState({val_cal:data2});
            this.setState({color_heart:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==5)
        {
            const data2=["temperaturesensors"];
            this.setState({val_cal:data2});
            this.setState({color_temperature:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==6)
        {
            const data2=["gpssensors"];
            this.setState({val_cal:data2});
            this.setState({color_gps:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==7)
        {
           
            const data2=["ecgs","datacollectioncenters"];
            this.setState({val_cal:data2});
            this.setState({color_ecg:'red'});
            this.setState({line1:'red'});
            this.setState({color_d:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
            
        }
        if(num==8)
        {
          
            const data2=["ecgs","datacollectioncenters"];
            this.setState({val_cal:data2});
            this.setState({color_temperature:'red'});
            this.setState({line2:'red'});
            this.setState({color_d:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==9)
        {
         
            const data2=["heartratesensors","datacollectioncenters"];
            this.setState({val_cal:data2});
            this.setState({color_heart:'red'});
            this.setState({line3:'red'});
            this.setState({color_d:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==10)
        {
            const data2=["gpssensors","datacollectioncenters"];
            this.setState({val_cal:data2});
            this.setState({color_gps:'red'});
            this.setState({line4:'red'});
            this.setState({color_d:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==11)
        {
           
            const data2=["accelerometers","datacollectioncenters"];
            this.setState({val_cal:data2});
            this.setState({color_acc:'red'});
            this.setState({line5:'red'});
            this.setState({color_d:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==12)
        {
            const data2=["emgs","datacollectioncenters"];
            this.setState({val_cal:data2});
            this.setState({color_emg:'red'});
            this.setState({line6:'red'});
            this.setState({color_d:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }

        if(num==13)
        {
            const data2=["ecgs","datacollectioncenters","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_ecg:'red'});
            this.setState({line1:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==14)
        {
            const data2=["temperaturesensors","datacollectioncenters","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_temperature:'red'});
            this.setState({line2:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==15)
        {
            const data2=["heartratesensors","datacollectioncenters","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_heart:'red'});
            this.setState({line3:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==16)
        {
            const data2=["gpssensors","datacollectioncenters","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_gps:'red'});
            this.setState({line4:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==17)
        {
            const data2=["accelerometers","datacollectioncenters","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_acc:'red'});
            this.setState({line5:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==18)
        {
            const data2=["emgs","datacollectioncenters","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_emg:'red'});
            this.setState({line6:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==19)
        {
            const data2=["datacollectioncenters","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==20)
        {
            const data2=["commandcenters","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_command:'red'});
            this.setState({color_control:'red'});
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==21)
        {
            const data2=["mongodbs","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_cloud:'red'});
            this.setState({color_control:'red'});
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==22)
        {
            const data2=["commandcenters","mongodbs","controlcenters"];
            this.setState({val_cal:data2});
            this.setState({color_cloud:'red'});
            this.setState({color_control:'red'});
            this.setState({color_command:'red'});
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==23)
        {
            const data2=["mongodbs","controlcenters","commandcenters"];
            this.setState({val_cal:data2});
            this.setState({color_cloud:'red'});
            this.setState({color_control:'red'});
            this.setState({color_command:'red'});
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        } 
        if(num==24)
        {
            const data2=["ecgs","datacollectioncenters","controlcenters","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_ecg:'red'});
            this.setState({line1:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==25)
        {
            const data2=["temperaturesensors","datacollectioncenters","controlcenters","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_temperature:'red'});
            this.setState({line2:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==26)
        {
            const data2=["heartratesensors","datacollectioncenters","controlcenters","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_heart:'red'});
            this.setState({line3:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==27)
        {
            const data2=["gpssensors","datacollectioncenters","controlcenters","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_gps:'red'});
            this.setState({line4:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==28)
        {
            const data2=["accelerometers","datacollectioncenters","controlcenters","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_acc:'red'});
            this.setState({line5:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==29)
        {
            const data2=["emgs","datacollectioncenters","controlcenters","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_emg:'red'});
            this.setState({line6:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==30)
        {
            const data2=["ecgs","datacollectioncenters","controlcenters","commandcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_ecg:'red'});
            this.setState({line1:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==31)
        {
            const data2=["temperaturesensors","datacollectioncenters","controlcenters","commandcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_temperature:'red'});
            this.setState({line2:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==32)
        {
            const data2=["heartratesensors","datacollectioncenters","controlcenters","commandcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_heart:'red'});
            this.setState({line3:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==33)
        {
            const data2=["gpssensors","datacollectioncenters","controlcenters","commandcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_gps:'red'});
            this.setState({line4:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==34)
        {
            const data2=["accelerometers","datacollectioncenters","controlcenters","commandcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_acc:'red'});
            this.setState({line5:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==35)
        {
            const data2=["emgs","datacollectioncenters","controlcenters","commandcenters","mongodbs"];
            this.setState({line7:'red'});
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'});
            this.setState({color_command:'red'});
            this.setState({val_cal:data2});
            this.setState({color_emg:'red'});
            this.setState({line6:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==36)
        {
            const data2=["commandcenters","controlcenters","datacollectioncenters"];
            this.setState({val_cal:data2});
            this.setState({color_control:'red'});
            this.setState({color_command:'red'});
            this.setState({color_d:'red'});
            this.setState({line7:'red'});
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==37)
        {
            const data2=["commandcenters","controlcenters","datacollectioncenters","mongodbs"];
            this.setState({val_cal:data2});
            this.setState({color_control:'red'});
            this.setState({color_command:'red'});
            this.setState({color_cloud:'red'});
            this.setState({color_d:'red'});
            this.setState({line7:'red'});
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==38)
        {
            const data2=["controlcenters","commandcenters"];
            this.setState({val_cal:data2});
           
            this.setState({color_control:'red'});
            this.setState({color_command:'red'});
            this.setState({line8:'red'});
            this.setState({line10:'red'});
           
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        } 
        if(num==39)
        {
            const data2=["mongodbs","controlcenters","commandcenters",];
            this.setState({val_cal:data2});
            this.setState({color_cloud:'red'});
            this.setState({color_control:'red'});
            this.setState({color_command:'red'});
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({line12:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        } 
        if(num==40)
        {
            const data2=["mongodbs","commandcenters",];
            this.setState({val_cal:data2});
            this.setState({color_cloud:'red'});
            this.setState({color_command:'red'});
            
            this.setState({line12:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        } 
        if(num==41)
        {
            const data2=["ecgs","datacollectioncenters","controlcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_ecg:'red'});
            this.setState({line1:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==42)
        {
            const data2=["temperaturesensors","datacollectioncenters","controlcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_temperature:'red'});
            this.setState({line2:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==43)
        {
            const data2=["heartratesensors","datacollectioncenters","controlcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_heart:'red'});
            this.setState({line3:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==44)
        {
            const data2=["gpssensors","datacollectioncenters","controlcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_gps:'red'});
            this.setState({line4:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==45)
        {
            const data2=["accelerometers","datacollectioncenters","controlcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_acc:'red'});
            this.setState({line5:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==46)
        {
            const data2=["emgs","datacollectioncenters","controlcenters","mongodbs"];
            
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_emg:'red'});
            this.setState({line6:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==47)
        {
            const data2=["ecgs","datacollectioncenters","controlcenters","mongodbs","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            this.setState({color_command:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_ecg:'red'});
            this.setState({line1:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==48)
        {
            const data2=["temperaturesensors","datacollectioncenters","controlcenters","mongodbs","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_temperature:'red'});
            this.setState({line2:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==49)
        {
            const data2=["heartratesensors","datacollectioncenters","controlcenters","mongodbs","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            this.setState({color_command:'red'});
           
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_heart:'red'});
            this.setState({line3:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==50)
        {
            const data2=["gpssensors","datacollectioncenters","controlcenters","mongodbs","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            this.setState({color_command:'red'});
            
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_gps:'red'});
            this.setState({line4:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==51)
        {
            const data2=["accelerometers","datacollectioncenters","controlcenters","mongodbs","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            this.setState({color_command:'red'});
            
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_acc:'red'});
            this.setState({line5:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==52)
        {
            const data2=["emgs","datacollectioncenters","controlcenters","mongodbs","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            this.setState({color_command:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_emg:'red'});
            this.setState({line6:'red'});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==53)
        {
            const data2=["datacollectioncenters","controlcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==54)
        {
            const data2=["datacollectioncenters","controlcenters","mongodbs","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({line7:'red'});
            this.setState({color_d:'red'});
            this.setState({color_control:'red'});
            this.setState({color_command:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==55)
        {
            const data2=["controlcenters","mongodbs"];
            this.setState({line9:'red'});
            this.setState({line11:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_control:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==56)
        {
            const data2=["controlcenters","mongodbs","commandcenters"];
            this.setState({line8:'red'});
            this.setState({line10:'red'});
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
            this.setState({color_control:'red'});
            this.setState({color_command:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        if(num==57)
        {
            const data2=["mongodbs","commandcenters"];
            this.setState({line12:'red'});
            this.setState({color_cloud:'red'})
            this.setState({val_cal:data2});
         
            this.setState({color_command:'red'});
            axios.get('http://127.0.0.1:5000/asp')
            .then(res => {
            const info = res.data;
            //console.log(info);
            this.setState({val_table:info});
            });
            this.setState({s1_display:'contents'});
        }
        
     }
     generateButton(num)
     {
         return(
             <div>
                 {
                     this.state.genButtons.map(i=>{
                        return(<Button variant="primary" style={{marginLeft:'1%',marginTop:'1%'}} onClick={()=>this.paths({i})}>path</Button>);
                     })
                 }
             </div>
         );
 
     }
     function5(data)
     {
         //console.log(data);
         return('none');
     }
    render() {
        return (
            <>
            <div className="row row-no-gutters">
                <div id="navbar2" className="col-2 col-no-gutters">  
                    <div className="circular_picture">
                    <img src={Img1} />
                    </div>
                    <h4 id="login_name2">
                    </h4>
                    <hr id="saperation"/>
                        <h6 className="nav_options">
                        System Functionalities 
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor" onClick={()=>this.props.history.push('/dashboard')} /*onClick={() => history.push('/')}*/>
                        Home
                        <div className="nav_icons" >
                            <AiIcons.AiOutlineHome />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor">
                        C3I Security Defences
                        <div className="nav_icons" >
                        <MdIcons.MdSecurity />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor" onClick={()=>this.props.history.push('/Product')}/*onClick={() => history.push('/Products')}*/>
                        Healthcare Interface
                        <div className="nav_icons" >
                            <MdIcons.MdDashboard />
                        </div>
                        </li>
                        </ul>
                        <hr id="saperation"/>

                        
                        

                </div>
                <div className="col-10 col-no-gutters back_ground">
                    <div className="row row-no-gutters network_values" >
                        <div class="col test_color">
                            <h4>C3I Security Interface</h4>
                        </div>
                        <div class="col test_color network_values">
                            <text className="text_center">Attack Success Probability</text>
                            <br/>
                            <text className="text_center">{this.state.asp}</text>
                        </div>
                        <div class="col test_color network_values">
                            <text className="text_center">Attack Impact</text>
                            <br/>
                            <text className="text_center">{this.state.ai}</text>
                        </div>
                        <div class="col test_color network_values">
                            <text className="text_center">Attack Risk</text>
                            <br/>
                             <text className="text_center">{this.state.ar}</text>
                        </div>
                        <div class="col test_color network_values">
                            <text className="text_center">CVSS Base Score</text>
                            <br/>
                            <text className="text_center">{this.state.cbs}</text>
                        </div>
                    </div>
                    <div className="row row-no-gutters security_info">
                        <div className="col-6 col-no-gutters security_info_first_half">
                            <div className="row Heading">
                                <h3>Network Security Analysis</h3>
                            </div>  
                            <div className="row row-no-gutters">
                                <button type="button" className="btn btn-primary button_01" style= {{marginTop:"5%"}} onClick={this.handleShow} >C3I Nodes</button>
                                <br/>
                                <button type="button" className="btn btn-primary button_01" style= {{marginTop:"5%"}} onClick={this.handleShow1}>Possible Attack Paths</button>
                            </div>
                            <div className="row row-no-gutters attack_paths">
                                 
                            </div>
                            
                            <div className="row row-no-gutters vulnaribilities" style={{display:this.state.d_display}}>
                                <div className="card main_card1" id="main_card1">
                                <h2 id='title' style={{color:'white', marginLeft:'27%'} }>Node Vulnerabilities</h2>
                                <table id='vul_table' style={{margin: '0 auto', border: '1px dotted white'}}>
                                <tbody className="table_text">
                                <tr style={{textAlign:'left',  border: '1px dotted white'}}>
                               
                                <td  style={{border: '1px dotted white'}}>Vulnerabilities</td>
                                <td style={{border: '1px dotted white'}}>Attack Probability</td>
                                <td style={{border: '1px dotted white'}}>Attack Impact</td>
                                <td style={{border: '1px dotted white'}}>Attack Risk</td>
                                <td style={{border: '1px dotted white'}}>CVSS Base Score</td>
                                </tr>
                                    {this.renderTableData()}
                                </tbody>
                                </table>

                                <h2 id='title' style={{color:'white', marginLeft:'15%', marginTop:'5%'} }>Overall Node Security Level</h2>
                                <table id='vul_table' style={{margin: '0 auto', border: '1px dotted white'}}>
                                <tbody className="table_text">
                                <tr style={{border: '1px dotted white'}}>
                                <td style={{border: '1px dotted white'}}>Attack Probability</td>
                                <td style={{border: '1px dotted white'}}>Attack Impact</td>
                                <td style={{border: '1px dotted white'}}>Attack Risk</td>
                                <td style={{border: '1px dotted white'}}>CVSS Base Score</td>
                                </tr>
                               
                                {this.renderTableData_node()}
                                <tr style={{border: '1px dotted white'}}>
               <td style={{border: '1px dotted white'}}>{this.state.asp1}</td>
               <td style={{border: '1px dotted white'}}>{this.state.ai1}</td>
               <td style={{border: '1px dotted white'}}>{this.state.ar1}</td>
               <td style={{border: '1px dotted white'}}>{this.state.cbs1}</td>
            </tr>
                                
                                </tbody>
                                </table>
                                </div> 
                                <Button className="close_table" id="button_close" variant="primary" style= {{marginTop:'5%'}} onClick={this.dataCollectionCenterColor}>
                                    Close
                                    </Button>  
                            </div>
                            <div className="row row-no-gutters" style={{display:this.state.d1_display}}>
                            <h2 id='title1' style={{color:'white', marginLeft:'35%', marginTop:'5%'} }>Select Path</h2>
                                {this.generateButton(this.state.genButtons)}
                                <div className="card main_card1" style={{display:this.state.s1_display}}>
                                
                                <h2 id='title1' style={{color:'white', marginLeft:'30%' }}>Path Security Level</h2>
                                <table id='vul_table' style={{margin: '0 auto'}}>
                                <tbody className="table_text">
                                <tr style={{border: '1px dotted white'}}>
                                <td style={{border: '1px dotted white'}}>Attack Probability</td>
                                <td style={{border: '1px dotted white'}}>Attack Impact</td>
                                <td style={{border: '1px dotted white'}}>Attack Risk</td>
                                <td style={{border: '1px dotted white'}}>CVSS Base Score</td>
                                </tr>
                                    {this.table_values()}

                                </tbody>
                                </table>
                                </div> 
                                
                                <Button className="close_table" id="button_close" style= {{marginTop:'5%'}} variant="primary" onClick={this.dataCollectionCenterColor}>
                                    Close
                                    </Button>  
                            </div>
                            

                            
                            
                        </div>
                        <div className="col-6 col-no-gutters " id='left_border'>
                        <div className="row Heading">
                                <h3>Network Diagram</h3>
                            </div>  
                            <svg className="svg_style" width="590px" height="620px">
                            <rect x="0" y="175" width="100" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_ecg, visibility:this.state.display_sensor1}}/>,
                            <line x1="101" y1="190" x2="200" y2="390" className="line" style={{stroke:this.state.line1,visibility:this.state.display_sensor1}} />,
                            <text x="20" y="195" className="svg_text"  style={{visibility:this.state.display_sensor1}}>
                                ECG
                            </text>

                                
                                <g>
                                <rect x="0" y="250" width="100" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_temperature, visibility:this.state.display_sensor2}}/>
                                    <text x="5" y="270" className="svg_text" style={{visibility:this.state.display_sensor2}}>
                                    Temperature
                                    </text>
                                </g>
                                
                                <line x1="101" y1="265" x2="200" y2="390" className="line" style={{stroke:this.state.line2, visibility:this.state.display_sensor2}} />
                                
                                <g>
                                    <rect x="0" y="325" width="100" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_heart, visibility:this.state.display_sensor3}}/>
                                    <text x="20" y="345" className="svg_text" style={{visibility:this.state.display_sensor3}}>
                                    Heart rate
                                    </text>
                                </g>
                                
                                <line x1="101" y1="340" x2="200" y2="390" className="line" style={{stroke:this.state.line3, visibility:this.state.display_sensor3}} />
                                <g>
                                    <rect x="0" y="425" width="100" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_gps, visibility:this.state.display_sensor4}}/>
                                    <text x="20" y="445" className="svg_text" style={{visibility:this.state.display_sensor4}}>
                                    GPS
                                    </text>
                                </g>
                                
                                <line x1="101" y1="440" x2="200" y2="390" className="line" style={{stroke:this.state.line4, visibility:this.state.display_sensor4}}/>

                                <g>
                                <rect x="0" y="500" width="100" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_acc, visibility:this.state.display_sensor5}}/>
                                <text x="0" y="520" className="svg_text" style={{visibility:this.state.display_sensor5}}>
                                    Accelerometer
                                    </text>
                                </g>                                
                                <line x1="101" y1="515" x2="200" y2="390" className="line" style={{stroke:this.state.line5, visibility:this.state.display_sensor5}}/>

                                <g>
                                <rect x="0" y="575" width="100" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_emg, visibility:this.state.display_sensor6}}/>
                                <text x="20" y="595" className="svg_text" style={{visibility:this.state.display_sensor6}}>
                                    EMG
                                    </text>
                                </g>
                                
                                <line x1="101" y1="590" x2="200" y2="390" className="line" style={{stroke:this.state.line6, visibility:this.state.display_sensor6}} />
                            

                                <rect x="200" y="375" width="100" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_d}}/>
                                <text x="230" y="395" className="svg_text">
                                    DCU
                                    </text>
                                
                                <line x1="300" y1="390" x2="400" y2="390" className="line" style={{stroke:this.state.line7}}/>
                                
                                <rect x="400" y="375" width="100" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_control}}/>
                                <text x="410" y="395" className="svg_text">
                                    Control Unit
                                    </text>
                                <line x1="450" y1="375" x2="450" y2="290" className="line" style={{stroke:this.state.line8}}/>
                                <line x1="450" y1="405" x2="450" y2="490" className="line" style={{stroke:this.state.line9}}/>
                                
                                
                                <rect x="475" y="275" width="105" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_command}}/>
                                <text x="475" y="295" className="svg_text">
                                    Command Unit
                                    </text>
                                <line x1="450" y1="290" x2="475" y2="290" className="line" style={{stroke:this.state.line10}}/>

                                <rect x="475" y="475" width="105" height="30" rx="3" ry="3" className="rect_box" style={{fill:this.state.color_cloud}}/>
                                <text x="505" y="495" className="svg_text">
                                    Cloud
                                    </text>
                                <line x1="450" y1="490" x2="475" y2="490" className="line" style={{stroke:this.state.line11}}/>

                                <line x1="525.5" y1="305" x2="525.5" y2="475" className="line" style={{stroke:this.state.line12}}/>
                            </svg>
                        </div>
                    </div>           
                </div>
            </div>,
            {this.Dialog2()}
            {this.Dialog1()}
            
            </>


        );
    }
}

export default Products;

//<h1 style={{display:this.function5('name')}}>Happy</h1>