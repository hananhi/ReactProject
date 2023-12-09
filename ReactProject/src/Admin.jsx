import React from 'react'
import Header from './Header'
import './admin.css'
import { useUser } from './UserContext';

export default function Admin(props) {
    const {arraydata} = useUser();


  return (
    <div className='bodyweb'>
    <Header img={props.img}/>

    <h1 className='title'>Admin Panel</h1>
<div className='list'>
    <div className="vertical-menu">
    {arraydata.map((user,index)=>(
       <div key={index} >
        {user.Name} 
  <span className='info'>{user.Email}</span> 
  <span className='info'>{user.Voted ? 'Voted' : 'Not Voted'}</span>
</div>
))}
</div>
</div>

    </div>

  )
}
