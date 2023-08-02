import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from '../Sidebar';
import './index.css';
import BottomNaigation from "../BottomNavBar"
import { TailSpin  } from "react-loader-spinner";
import {Link} from 'react-router-dom'

export default function Transactions() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const queryParams = {
      limit: 2,
      offset: 2,
    };
    axios
      .get("https://bursting-gelding-24.hasura.app/api/rest/all-transactions", {
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "user",
          "x-hasura-user-id": "1",
        },
        params: queryParams,
      })
      .then((response) => {
        //console.log(response)
      
        const formattedData = response.data.transactions.map(eachItem => ({
          amount: eachItem.amount,
          category: eachItem.category,
          date: eachItem.date,
          id: eachItem.id,
          transactionName: eachItem.transaction_name,
          type: eachItem.type,
          userId: eachItem.user_id,
        }))
        console.log(formattedData)
        setData(formattedData);
      
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return(
      <div className="loader-container" data-testid="loader">
      <TailSpin type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )
  }





  return (
    <>
    <Sidebar/>  
   <div className='Dashboard-container'>
          <div className='card_heading_section'>
          <h1 className= "dash_head">Transactions</h1>
          <Link to="/adding" className='linkPart'>
              <button className='AddTransaction_button'>+ Add Transaction</button>
          </Link>
          </div>
          <div className='list-All-transaction'>
             <div className='list-details'>
                <span className='User_name'>User Name</span>
                <span className='User_name'>Transaction Name</span>
                <span className='User_name'>Category</span>
                <span className='User_name'>Date</span>
                <span className='User_name'>Amount</span>
             </div>
             <hr className='line'/>
        <div className='last-transcation2'>
            
              <div className='last-transcation-detail1'>
                <>
                {data.map((eachItem)=>(
                  <div className='first-list'>
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690803124/Group_328_hyooka.svg'
                    alt='red' className='red_container'/>
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690576227/Avatar_mgr8u7.png'
                    alt="dowm" className='image_usernmae'/>
                    <h1 className='heading_list'>{eachItem.transactionName}</h1>
                    <span className='shopping'>{eachItem.type}</span>
                    <span className='time'>{eachItem.date}</span>
                    <span className='value'>${eachItem.amount}</span>
                    <Link  to ="/update" className='linkPart'>
                      <button className='button1'>
                        <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690804978/pencil-02_vvjx6b.svg'
                        alt='pencial' className='pencial'/>
                      </button>
                    </Link>
                    <Link to="/delete" className='linkPart'>
                    <button className='button1'>
                      <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690805534/trash-01_rix8iz.svg'
                      alt='pencial' className='pencial'/>
                    </button>
                    </Link>
                  </div>
                ))}
                </>
      </div>
  </div>

          </div>
      </div>
      <BottomNaigation/> 
    </>
  );
}
