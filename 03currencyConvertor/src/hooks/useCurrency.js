import { useState , useEffect } from "react";


function useCurrency(currency){
    const [data , setData] = useState({})
   
    useEffect(()=>{
        
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/jpy.json
        `).then((res)=>{
           return res.json()   
        }).then((res)=>{
            return setData(res[currency])
        })
    },[]) //dependencie []
    console.log(data)
    return data
}

export default useCurrency;