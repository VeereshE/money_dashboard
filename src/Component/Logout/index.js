import React from 'react'
import './index.css';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import withRouter from './../Sidebar/index';

const DelectedIcon = () => {

    const history =  useHistory()

    const onClickDelected = () => {
        
        Cookies.remove('jwt_token')
        history.replace('/login')
    }

    const onClickCancle=() =>{
        history.push('/')
    }

  return (
    <div className='delected-container'>
         <div className='inner'>
           <div className='inner-container'>
                <div className='all_detail-de'>
                    <h1 className='heading-del'>Are you sure you want to Logout?</h1>
                    <h1 className='heading-del_1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h1>
                </div>
               <div className='button-container-del'>
               <button className='yes-button' onClick={onClickDelected}>Yes, Logout</button>
                <button className='no-button' onClick={onClickCancle}>Cancle</button>
               </div>
           </div>
         </div>
    </div>
  )
}

export default withRouter(DelectedIcon)