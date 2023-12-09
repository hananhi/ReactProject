import React, { createContext, useContext, useState } from 'react';
import  { useEffect} from 'react'

const UserContext = createContext();

export function UserProvider({ children }) { 

 const [userType, setUserType] = useState(false);
 const [userInfo, setUserInfo] = useState({ index: -1, name: ''});
const [arraydata,setarraydata]=useState([]) ;

const [currentPage, setCurrentPage] = useState('Login');

 let  img='https://th.bing.com/th/id/OIP.IYCmpu56Lv0AmcBKZZpUrgAAAA?rs=1&pid=ImgDetMain';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://6555d3b784b36e3a431e6c47.mockapi.io/users');
        const data = await response.json();
        setarraydata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


return (
  <UserContext.Provider value={{ arraydata , userType, setUserType,userInfo,setUserInfo,currentPage,setCurrentPage, setarraydata}}>
    {children}
  </UserContext.Provider>
);
}

export function useUser() {

return useContext(UserContext);
}