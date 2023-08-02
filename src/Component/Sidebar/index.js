import React from 'react';
import { Link , withRouter} from 'react-router-dom';
import './index.css';
import DelectedIcon from '../DelectedIcon';



function Sidebar() {

  const onCLickButton=() =>{
    <DelectedIcon/>
  }
  return (
    <div className='fixedContainer'>
      <div className='sidebar-container'>
        <div className='image-container'>
          <img
            src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690572722/Frame_507_1_u1updv.png'
            alt='logo'
            className='logoImage'
          />
        </div>
        <div className='listItems'>
          <li className='list-container'>
            <ul className='element-list'>
              <Link to='/dashboard' className='linkPart'>
                <div className='name-container'>
                  <div className='home-img'>
                    <img
                      src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690616353/home_2_wix60v.svg'
                      alt='home'
                      className='home'
                    />
                  </div>
                  <span className='title'>Dashboard</span>
                </div>
              </Link>

              <Link to='/transactions' className='linkPart'>
                <div className='name-container'>
                  <div className='home-img'>
                    <img
                      src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690618752/transfer_1_repytq.svg'
                      alt='home'
                      className='home'
                    />
                  </div>
                  <span className='title'>Transactions</span>
                </div>
              </Link>

              <Link to='/profile' className='linkPart'>
                <div className='name-container'>
                  <div className='home-img'>
                    <img
                      src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690618850/user_3_1_otxdmn.svg'
                      alt='home'
                      className='home'
                    />
                  </div>
                  <span className='title'>Profile</span>
                </div>
              </Link>
            </ul>
          </li>
        </div>
        <div className='logout-container'>
          <div className='image-name-details'>
            <img
              src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690576227/Avatar_mgr8u7.png'
              alt='person'
              className='images-person'
            />
          </div>
          <div>
            <span className='nameItems'>Rhye</span>
            <br />
            <span className='email'>olivia@untitledui.com</span>
          <Link to="/logout" className='linkPart' >
            <button className="button-logout" onClick={onCLickButton}> 
            <img
              src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690619789/log-out-01_mbnr4f.svg'
              alt='logout'
              className='logout'
            />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
