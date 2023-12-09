import React from 'react'
import'./header.css'
import { useUser } from './UserContext';

export default function Header(props) {

  const {userInfo,userType ,setCurrentPage} = useUser();


  const navigatelogout = () => {
    setCurrentPage('Login');
  };

  const navigateVote = () => {
    setCurrentPage('VotePage');
  };

  const navigateAdmin = () => {
    setCurrentPage('Admin');
  };

  return (
    <div className='containerheader'>
    <img src={props.img} className='headimg' />
    
    <div className='user-info-container'>
      <div className='userinfo'>{userInfo.name}</div>

      {userType && (
        <div className="dropdown-content">
          <button onClick={navigatelogout}>log out</button> 
          <button onClick={navigateVote}>Vote</button>
          <button onClick={navigateAdmin}>Admin</button>
        </div>
      )}

      {!userType && (
        <div className="dropdown-content">
          <button onClick={navigatelogout}>log out</button>
          <button onClick={navigateVote}>Vote</button>
        </div>
      )}
    </div>
  </div>
  )
}
