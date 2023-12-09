import React, { useRef, useState } from 'react'
import Header from './Header'
import './votepage.css'
import { useUser } from './UserContext';

const applicant=[
    {
        name:'Clover',
        img :'https://assets.mycast.io/characters/clover-ewing-9280612-normal.jpg?1669227907',
        votes:0,
        id:'1',
        voted:false

    },
    {
        name:'Sam',
        img:'https://paintbynumberscanvas.com/wp-content/uploads/2020/08/sam-totally-spies-paint-by-number.jpg',
        votes:0,
        id:'2',
        voted:false
    }
    ,
    {
        name:'Alex',
        img:'https://assets.mycast.io/posters/which-actress-should-ve-played-alex-in-various-decades-fan-casting-poster-335143-medium.jpg?1685928466',
        votes:0,
        id:'3',
        voted:false
    }
]

    
export default function Votepage(props) {
  


const [applicants, setApplicants] = useState(applicant);
const[alredyvoted,setalreadyvoted]=useState(false);
const {arraydata,setarraydata , userInfo} = useUser();


function changevotes(e,index){

    setalreadyvoted(true);
    const newarray = [...applicants];
    newarray[index].votes++;
    newarray[index].voted = true;
    setApplicants(newarray);

}

function suring(){
    const newarray = [...arraydata];

    newarray.map((e) => {
        if (e.Name === userInfo.name) {
          e.Voted=true;
        }
        return e; // Make sure to return the updated element
      });

    setarraydata(newarray);



}
function cancel(){

 setalreadyvoted(false);

}

  return (
    <div className='bodyweb'>
        <Header img={props.img}/>

<h1 className='title'>Vote Page</h1>
<div className='containerapplicant'>
        <div className='applicant'>
            
            {applicants.map((e,index)=>(

            <div key={index} className='one-applicant'>
                <p className='counter'>{e.votes}</p>
                <img src={e.img}></img>
                <h2>{e.name}</h2>
               {!e.voted &&!alredyvoted && (<button  onClick={(e)=>changevotes(e, index)}>Vote me </button>)}



               {e.voted && alredyvoted &&(
  <>
    <button onClick={suring}>I'm sure</button>
    <button onClick={cancel}>Cancel</button>
  </>
)}
                </div>
            ))}

        </div>
        </div>
    </div>
  )
}
