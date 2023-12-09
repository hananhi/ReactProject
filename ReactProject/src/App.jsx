
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useUser} from './UserContext';
import Login from './Login'
import Votepage from './Votepage'
import Admin from './Admin'
import { useState } from 'react'

function App() {
 
  const {currentPage} = useUser();
 

 let  img='https://th.bing.com/th/id/OIP.IYCmpu56Lv0AmcBKZZpUrgAAAA?rs=1&pid=ImgDetMain';


  return (
    

<div >
{currentPage==='Login' && (<Login img={img}/>)}
{currentPage==='VotePage' && (<Votepage img={img}/>)}
{currentPage==='Admin' && (<Admin img={img}/>)}
</div>

    
  )
}

export default App
