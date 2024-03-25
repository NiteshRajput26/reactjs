import {useEffect, useState} from "react"


function useCurrencyInfo(currency){               // custom hook
    const [data, setData] = useState({})              // setdata variable jisme json responce hold krenge
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())                   // then me call back ke through responce ko string se json me convert kiya h
        .then((res) => setData(res[currency]))       // fetch se hum chaining kr skte h mtlb .then() lga skte h
      
        // [] square bracket se bhi hum responce ka access le skte h
      
        console.log(data);
    }, [currency])                           // [...] dependencies array........currency ke ander change ho to uske liye wapas se call kiya
    console.log(data);
    return data
}

export default useCurrencyInfo;