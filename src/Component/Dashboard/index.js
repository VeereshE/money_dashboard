import React, { useEffect , useState} from 'react';
import { TailSpin  } from "react-loader-spinner";
import Sidebar from '../Sidebar';
import axios from "axios";
import TopthreeTransaction from '../TopthreeTransaction';
import DeditandCreditOverview from '../DeditandCreditOverview';
import BottomNaigation from "../BottomNavBar"
import {Link} from "react-router-dom";
import "./index.css"




const  Dashboard = () =>{

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect (() =>{
     axios.get("https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin",
     {
      headers:{
        "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-role": "admin",
      },
     }
     
     )
     .then((response) => {
      //console.log(response)
      setData(response.data);
      setLoading(false);
    })
     .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
  }, []);
  if(loading){
    return(
        <div className="loader-container" data-testid="loader">
          <TailSpin type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    )
  }

  const result = data.transaction_totals_admin.reduce((acc, item) => {
    const type = item.type.toLowerCase();
    if (type === 'debit') {
      acc.debitSum += item.sum;
    } else if (type === 'credit') {
      acc.creditSum += item.sum;
    }
    return acc;
  }, { debitSum: 0, creditSum: 0 });
  
  //console.log(result);

   




  return(
    <>
        <Sidebar/> 
      <div className='Dashboard-container'>
          <div className='card_heading_section'>
          <h1 className= "dash_head">Accounts</h1>
          <Link to="/adding" className='linkPart'>
              <button className='AddTransaction_button'>+ Add Transaction</button>
          </Link>
          </div>
           
       <div className='card-container'>

         <div className='card_credit_canter'>
            <div className='text-image-container'>
                <div className='text-container'>
                <span className='dollar'>${result.creditSum.toLocaleString('en-US')}</span>
                <span className='credit'>Credit</span>
                </div>
                <div className='image-container'>
                <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690796688/Group_1_vmipkx.svg'
                className='image1' alt="credit"/>
                </div>
            </div>
          </div>

          <div className='card_credit_canter2'>
            <div className='text-image-container'>
                <div className='text-container'>
                <span className='dollar2'>${result.debitSum.toLocaleString('en-US')}</span>
                <span className='debit'>Debit</span>
                </div>
                <div className='image-container'>
                <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690799396/Group_2_ynu3ml.svg'
                className='image1' alt="credit"/>
                </div>
            </div>
             </div>
          </div> 

       <TopthreeTransaction/>
       <DeditandCreditOverview/>
        <BottomNaigation/> 
      </div>
    </>
  )
}

export default Dashboard;



