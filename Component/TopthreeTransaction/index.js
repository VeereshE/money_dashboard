import React, { useEffect , useState} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
import './index.css'

export default function TopthreeTransaction() {

    const [data, setData] = useState([]);

    useEffect (() =>{

        const queryParams = {
            limit: 2,
            offset: 2,
          };
        axios.get("https://bursting-gelding-24.hasura.app/api/rest/all-transactions",
        
        {
         headers:{
           "Content-Type": "application/json",
               "x-hasura-admin-secret":
                 "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
               "x-hasura-role": "user",
               "x-hasura-user-id": "1",
         },
         params: queryParams,
        }
        
        )
        .then((response) => {
         console.log(response)
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
         
       })
        .catch((error) => {
         console.error("Error fetching data:", error);
         
       });
     }, []);
     
  return (
    <div className='last-transcation'>
             <h1 className='last_heading'>Last Transaction</h1>
              <div className='last-transcation-details'>
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
  )
}
