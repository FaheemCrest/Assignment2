import React from 'react';
import { Container } from 'react-bootstrap';
import { getUser, removeUserSession } from './Utils/Common';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import Img1 from './img2.png';

function Dashboard(props) {

 
  const user = getUser();
  var value;


  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  const dashbord = () => {
    props.history.push('/Product');
  }

  return (
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
                        <li className="nav_list_contents option_cursor" onClick = {handleLogout}>
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
                        Security
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor" onClick={()=>props.history.push('/Contact')}>
                        C3I Security
                        <div className="nav_icons" >
                            <MdIcons.MdSecurity />
                        </div>
                        </li>
                        
                        </ul>`
     </div>
     <div className="col-10 col-no-gutterss">
       <div className="Row">
             
       </div>
       <div className="col-10 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin" style={{marginLeft:'10%'}}>
                                <p className="card_title">
                                    A1797653
                                </p>

                                <h6>
                                  Name: Prithviraj
                                </h6>
                                <p  style={{marginLeft:'80%'}}>
                                <input type="button" onClick={dashbord} value="View"/>
                                </p>
                                <p>

                                </p>
                                
                                
                        
                            </div>   
                        </div>
      </div>
      
    </div>
 
    
  );
}

export default Dashboard;
