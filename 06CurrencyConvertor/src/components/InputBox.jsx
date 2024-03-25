import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()
  
   //useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>  
  
        {/* js me css isliye likhi kyunki hum user se css le rhe h */}
        
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}  
                    
                 
                    { /* {} data variable se aa jayega */}
              
                </label>
                <input
                    id={amountInputId}            // binding id
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
               
                    // (e) event fire kiya h or isse onAmountChange (&& agar exist krta h to )method call kr skte h jisse component ko pta chl jaye ki amount change hua h onChange method ke through
               />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
              // event fire kiya h or whi same logic jo amount change ke liye kiya tha
              >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;