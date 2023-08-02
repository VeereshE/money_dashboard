import React from 'react'
import './index.css'

export default function AddTransactionForm() {
  return (
    <div className='delected-container'>
         <div className='inner'>
           <div className='form-edit-container'> 
                <div className='form-padding-container'>
                <span className='update-form'>Add Transaction</span>
                <p className='update-detail'>You can update your transaction here</p>
                <form className='update-form-container'>
                    <label htmlFor='name' className='update-text'>Transaction Name</label><br/>
                    <input id="name" type='text' className='update-input'/>
                    <label for="cash-type" className='update-text'>Transaction Type</label><br/>
                    <select name="cash-type" id="cash-type" className='update-input'>
                        <option value="volvo">Debit</option>
                        <option value="volvo">Cebit</option>
                    </select>
                    <label for="cash-type" className='update-text'>Category</label><br/>
                    <select name="cash-type" id="cash-type" className='update-input'>
                        <option value="volvo">Shopping</option>
                        <option value="volvo">Subscription Shopping</option>
                    </select>
                    <label htmlFor='name' className='update-text'>Amount</label><br/>
                    <input id="name" type='text' className='update-input'/><br/>
                    <label htmlFor='name' className='update-text'>Date</label><br/>
                    <input id="name" type='date' className='update-input'/>
                    <button className='AddTransaction_button'>Add Transaction</button>
                </form>
                </div>
           </div>
         </div>
    </div>
  )
}