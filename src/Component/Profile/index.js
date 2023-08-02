import React from 'react';
import Sidebar from '../Sidebar';
import "./index.css";
import BottomNaigation from "../BottomNavBar";
import {Link} from "react-router-dom"

export default function Profile() {
  return (
    <>
     <Sidebar/>  
    <div className='Dashboard-container'>
           <div className='card_heading_section'>
           <h1 className= "dash_head">Profile</h1>
           <Link to="/adding" className='linkPart'>
              <button className='AddTransaction_button'>+ Add Transaction</button>
          </Link> 
           </div>
           <div className='proflie-Container-details'>
              <div className='form-img-container'>
              <div className='form-container'>
                <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690874596/pexels-christina-morillo-1181690_1_loco8i.jpg'
                alt='person' className='background-img'/>
              </div>
              <div className='form-container-User'>
               <form className='from-elements'>
                   <div className='form-all-container'>
                   <div className='ferm-emelem'>
                      <div>
                      <label htmlFor='name' className='username_text'>Your Name</label><br/>
                      <input id="name" type='text' className='input_user'/>
                      </div>
                     <div>
                      <label htmlFor='name' className='username_email'>Email</label><br/>
                      <input id="name" type='email' className='input_user'/>
                      </div>
                      <div>
                      <label htmlFor='name' className='username_email'>Date of Birth</label><br/>
                      <input id="name" type='date' className='input_user'/>
                      </div>
                      <div>
                      <label htmlFor='name' className='username_email'>Permanent Address</label><br/>
                      <input id="name" type='text' className='input_user'/>
                      </div>
                      <div>
                      <label htmlFor='name' className='username_email'>Postal Code</label><br/>
                      <input id="name" type='text' className='input_user'/>
                  </div>
                   </div>

                   <div className='ferm-emelem'>
                        <div>
                        <label htmlFor='name' className='username_text'>User Name</label><br/>
                        <input id="name" type='text' className='input_user'/>
                        </div>
                        <div>
                        <label htmlFor='name' className='username_email'>Password</label><br/>
                        <input id="name" type='password' className='input_user'/>
                        </div>
                        <div>
                        <label htmlFor='name' className='username_email'>Present Address</label><br/>
                        <input id="name" type='text' className='input_user'/>
                        </div>
                        <div>
                        <label htmlFor='name' className='username_email'>City</label><br/>
                        <input id="name" type='text' className='input_user'/>
                        </div>
                        <div>
                        <label htmlFor='name' className='username_email'>Country</label><br/>
                        <input id="name" type='text' className='input_user'/>
                        </div>
                   </div>
                   </div>
               </form>
              </div>
              </div>
           </div>
           
       </div>
       <BottomNaigation/> 
     </>
  );
}
