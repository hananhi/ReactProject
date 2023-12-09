import React, { useState } from 'react'
import './login.css'
import Header from './Header';

import { useUser } from './UserContext';

    

export default function Login(props) {

  const {arraydata , userType, setUserType,userInfo,setUserInfo ,currentPage,setCurrentPage} = useUser();

    const [close,setclose]=useState(false);

    const [email,setemail]=useState('');
    const[Password,setpassword]=useState('')
    const [loading, setLoading] = useState(false);
    

    
        
        function validation(e){
            e.preventDefault();


            setLoading(true);

            if(email=='' && Password==''){
    
                setclose(true);
        }
        
            else{
            setTimeout(() => {
              // Once the task is complete, reset the loading state
              setLoading(false);
              
              const foundUser = arraydata.find((user) => {
                return user.Email === email && user.Password === Password ;
              });
                if (foundUser) {
                  setUserInfo({ index: arraydata.indexOf(foundUser), name: foundUser.Name });
                  setUserType(foundUser.Admin);
                  setCurrentPage('VotePage');

                } else {
                  
                  setUserInfo({ index: -1, name: '' });
                  setclose(true);

                }
              
        
            }, 2000); // Simulating a 2-second delay, replace with your actual asynchronous task
          }
        
            
           


    }

    
  return (
    <div className='bodyweb'>

        <div className='containerlogin'>
        <img src={props.img} alt='ghjj'></img>
        
        <form className='formlogin'  onSubmit={validation}> 
            <label>Emil:</label><br></br>
            <input type='email' className='inputbox' value={email} onChange={e=>setemail(e.target.value)}></input><br></br>
            <label>Password:</label><br></br>
            <input type='text' className='inputbox'  value={Password}onChange={e=>setpassword(e.target.value)}></input><br></br>
            <input type='submit' value={loading ? 'Loading...' : 'Login'} className='submit' disabled={loading} ></input>
        </form>
    </div>
    {close && <div className='errormsg'>Error <br></br><button onClick={() => setclose(!close)}>ok</button></div>}
        </div>




  )
}
