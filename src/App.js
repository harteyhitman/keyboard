
import React, { useState } from 'react'
import './App.css'
import {firstrow} from './keyboardData'
import {secondrow} from './keyboardData'
import {thirdrow} from './keyboardData'
import {fouthrow} from './keyboardData'
import {fifthrow} from './keyboardData'

const App = () => {
    
        const [input, setInput] = useState('');
    //     const [changeToggle, setChangeToggle] = useState(false)

    //     const toggleBar = () => {
    //         // setChangeToggle(!changeToggle)
    //         document.body.classList.toggle("bg-change")
            
    //     }
    //    if(changeToggle){
    //     document.body.classList.toggle("bg-change")
    //     // document.body.style.backgroundColor = 'red'
    //    }else{
    //     // document.body.style.backgroundColor = 'black'
    //    }

        const handleKeyPress = (e ,n) => {
            if(e === "Backspace"){
                handleBackspace()
                return
            }
            

            if(e === 'Space'){
                space(e) 
                return
                
            }
            if(e === 'Caps'){
                caps(e)
                n.target.style.backgroundColor = 'green'
              
                return
            }              
                if (e === 'Enter'){
                    enter()
                
                }

            setInput(input + e);
          };

          const handleBackspace = () => {
            setInput(input.slice(0, -1));
          };
          const space = () => {
            setInput(input + " ");
          }
          const caps = () =>{
            setInput(input.toLowerCase(''))
          }
         const enter = () =>{
            setInput(input + <br/>)
         }
       

         
  return (
    <div className='container'>
    <div  className="night-mode active night" >
        <div className="toggle-circle active" onClick={() => document.body.classList.toggle("bg-change")}></div>
    </div>
    <div className="change_light_color">
        <div className="colors">
            <input type="color" className='colors_input'/>
        </div>
    </div>


        <div className="keyboardWrap active">
        <div className="keyboard-lights"></div>
        <div className="keyboardkeys">  
            <div className="rows">
                {firstrow.map((first)=>(
                    <div className={`key${first.id} keys`} key={first.id} onClick={() => handleKeyPress(first.keys)}> {first.keys}</div>
                ))}
            </div>
            <div className="rows">
                {secondrow.map((second)=>(
                    <div className={`key${second.id} keys`} key={second.id} onClick={() => handleKeyPress(second.keys)}>{second.keys}</div>
                ))}
            </div>
            <div className="rows">
                {thirdrow.map((third)=>(
                    <div className={`key${third.id} keys`}  key={third.id} onClick={(e) =>  handleKeyPress(third.keys,e)}>{third.keys}</div>
                ))}
            </div>
            <div className="rows">
                {fouthrow.map((fourth)=>(
                    <div className={`key${fourth.id} keys`} key={fourth.id} onClick={() => handleKeyPress(fourth.keys)}>{fourth.keys}</div>
                ))}
            </div>
            <div className="rows">
                {fifthrow.map((fifth)=>(
                    <div className={`key${fifth.id} keys`} key={fifth.id} onClick={() => handleKeyPress(fifth.keys)}>{fifth.keys}</div>
                ))}
            </div>
        </div>
        </div>
        <input className='text active' type="text" value={input}/>
    </div>
  )
}

export default App