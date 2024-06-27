import React, { useRef, useState } from 'react'
import "./Tictactoe.css"
import circle from '../Tic-Tac-Toe/assets/cross-n.png'
import cross from "../Tic-Tac-Toe/assets/circle.png"

let data =["","","","","","","","",""]
export default function Tictactoe() {
        let [count, setCount]= useState(0);
        let[lock, setLock]= useState(false);
        let titleref= useRef(null);
       
        const toggle =(e,num)=>{
            if(lock){
                return 0;
            }
            if(count%2===0){
                e.target.innerHTML= `<img src= ${cross} alt=''>`;
                data[num]= 'x';
                setCount(++count);
            }
            else{
                e.target.innerHTML= `<img src= ${circle} alt=''>`;
                data[num]= 'o';
                setCount(++count);
                console.log(count,"0");
            }
        checkwin()
        }
        const checkwin=()=>{
            if(data[1]===data[2] && data[2]===data[3] && data[3]!==""){won(data[3]);}
            else if(data[4]===data[5] && data[5]===data[6] && data[6]!==""){won(data[6]);}
            else if(data[7]===data[8] && data[8]===data[9] && data[9]!==""){won(data[9]);}
            else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){won(data[7]);}
            else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){won(data[8]);}
            else if(data[3]===data[6] && data[6]===data[9] && data[9]!==""){won(data[9]);}
            else if(data[1]===data[5] && data[5]===data[9] && data[9]!==""){won(data[9]);}
            else if(data[3]===data[5] && data[5]===data[7] && data[7]!==""){won(data[7]);}
        }
        const won=(winner)=>{
            setLock(true)
            
            if(winner==="x"){titleref.current.innerHTML=`Congratulations: <img src=${cross} alt='' > wins`}
            if(winner==="o"){titleref.current.innerHTML=`Congratulations: <img src=${circle} alt=''> wins`}
            console.log(winner)
        }
        const reset=()=>{
            window.location.reload();
        }

  return (
    <div className="container">
    <h1 className="title" ref={titleref}>Tic Tac Toe Game In <span>React</span></h1>
    <div className="board">
        <div className="row1">
            <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
        </div>
        <div className="row2">
            <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
        </div>
        <div className="row3">
            <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,9)}}></div>
        </div>
      
    </div>
    <button className="reset" onClick={reset}>Reset</button>
  </div>
  )
}
