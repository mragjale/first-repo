import React, {useContext} from 'react';
import {userContext, CounterContext} from './Parrent'

const Grandchaild = () => {
    const parrentData = useContext(userContext)
    const counterContext = useContext(CounterContext)
    const showList = parrentData.arrayData.map(e => <li key={e}>{e}</li>)
    return (
        <div>
            <button onClick={() => counterContext.dispatchMethod('increament')}>Increament</button>
            <button onClick={() => counterContext.dispatchMethod('decreament')} disabled={counterContext.counterValue === 0}>Decreament</button>
            <button onClick={() => counterContext.dispatchMethod('reset')}>Reset</button>
          <h1 className="text-center">  {counterContext.counterValue}</h1>
           <h1>grandchaild shows name {parrentData.userData.name} and he is working as {parrentData.userData.job} in {parrentData.companyName}</h1>
        {showList}
        </div>
    )
}
export default Grandchaild;