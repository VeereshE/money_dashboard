import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./index.css"
import {Link} from "react-router-dom"
import {AiFillHome} from 'react-icons/ai'

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='bottom-container'>
        <BottomNavigation className='ContainerStyle' value={value} onChange={handleChange}>
      <Link to='/dashboard'>
      <BottomNavigationAction
        label="Dashboard"
        value="recents"
        icon={<AiFillHome />}
      />
      </Link >
      <Link to='/transactions' className='linkPart'>
      <BottomNavigationAction
        label="Transactions"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      </Link>
      <Link to='/profile' className='linkPart'>
      <BottomNavigationAction
        label="Profie"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      </Link>
     
    </BottomNavigation>
    </div>
  );
}