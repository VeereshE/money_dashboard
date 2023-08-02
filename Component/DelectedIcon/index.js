import React from 'react'
import './index.css'

export default function DelectedIcon() {

  const onCLickDelected=()=>{}

  const onClickLeaveIt=()=>{}
  
  return (
    <div className='delected-container'>
         <div className='inner'>
           <div className='inner-container'>
                <div className='all_detail-de'>
                    <h1 className='heading-del'>Are you sure you want to Delete?</h1>
                    <h1 className='heading-del_1'>This transaction will be deleted immediately. You can’t undo this action.</h1>
                </div>
               <div className='button-container-del'>
               <button className='yes-button' onClick={onCLickDelected}>Yes,Delete</button>
                <button className='no-button' onClick={onClickLeaveIt}>No, Leave it</button>
               </div>
           </div>
         </div>
    </div>
  )
}
