import React, {useContext, useRef, useEffect, useState} from 'react';
import Grandchaild from './Grandchiled'
import {userContext} from './Parrent'

 
const Chaild = () => {
    const userParrentData = useContext(userContext);
    const useRefHook = useRef(null);
    const [boolean] = useState(true);
    const show = () => {
      console.log('show fun');
    }
  useEffect(() => {

console.log('use effect fun');
if (boolean){
  show()
}
    useRefHook.current.focus();
  }, [])

    return (
        <div>
        <Grandchaild/>
        <div className="user-form">
          <div className="input-item">
            <label className="label">Update company Name: </label>
            <input
            ref={useRefHook}
              className="input"
                onChange={e => userParrentData.setName(e.target.value)}
            />
          </div>
        </div>
        </div>
      );
}
export default Chaild;