import React from 'react'
import {firstrow} from './keyboardData'
import {secondrow} from './keyboardData'
import {thirdrow} from './keyboardData'
import {fouthrow} from './keyboardData'
import {fifthrow} from './keyboardData'

const App = () => {
  return (
    <div className='container'>
        <div className="keyboardWrap">
        <div className="keyboardkeys">  
            <div className="rows">
                {firstrow.map((first)=>(
                    <div className="keys" key={first.id}> {first.keys}</div>
                ))}
            </div>
            <div className="rows">
                {secondrow.map((second)=>(
                    <div className="keys" key={second.id}>{second.keys}</div>
                ))}
            </div>
            <div className="rows">
                {thirdrow.map((third)=>(
                    <div className="keys" key={third.id}>{third.keys}</div>
                ))}
            </div>
            <div className="rows">
                {fouthrow.map((fourth)=>(
                    <div className="keys" key={fourth.id}>{fourth.keys}</div>
                ))}
            </div>
            <div className="rows">
                {fifthrow.map((fifth)=>(
                    <div className="keys" key={fifth.id}>{fifth.keys}</div>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default App