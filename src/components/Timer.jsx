import { useEffect, useState } from "react";

export const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
       const timerId = setTimeout(()=>{
        setCount((prevState)=> {
            return prevState + 1;
        })
       }, 1000) 
       return(()=> {
        clearTimeout(timerId)
       })
    }, [count])
        


    return <div style={{backgroundColor: "green", padding: 15, borderRadius: 80}}>{count} seconds </div>
    
}