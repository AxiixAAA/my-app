import React from "react";
import { useEffect, useState } from "react";


export const Online = () =>{

    const [isOnline, set_isOnline] = useState(true);
    let interval = null;
   
    const InternetErrMessagenger = () => set_isOnline(navigator.onLine===true); // for do like this shortform
   
    
    useEffect(()=>{
       // eslint-disable-next-line react-hooks/exhaustive-deps
       interval = setInterval(InternetErrMessagenger, 6000); // call the function name only not with function with call `()`
       return ()=>{
          clearInterval(interval) // for component unmount stop the interval
       }
    },[])

    return( <div>
        {isOnline === true ? "online" : "ofline" }
    </div> ) 
}