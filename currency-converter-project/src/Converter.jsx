import { useState } from "react"


function Converter() {

    let [currencyType1, setCurrencyType1] = useState("USD");
    let [currencyType2, setCurrencyType2] = useState("USD");
    let [currencyNumber, setCurrencyNumber] = useState(0);
    let [convertedCurrencyNumber, setConvertedCurrencyNumber] = useState(0);

    const handleTypeToConvertInput1 = (e) => {
        setCurrencyType1(e.target.value);
    };

    const handleTypeToConvertInput2 = (e) => {
        setCurrencyType2(e.target.value);
    };

    const handleNumberInput = (e) => {
        setCurrencyNumber(e.target.value)
    }

    const convertFunction = () => {
        if(currencyType1 === "USD" && currencyType2 === "USD") {
            setConvertedCurrencyNumber(currencyNumber * 1);
        }else if(currencyType1 === "USD" && currencyType2 === "RON") {
            setConvertedCurrencyNumber(currencyNumber * 4.56);
        }else if(currencyType1 === "USD" && currencyType2 === "EUR") {
            setConvertedCurrencyNumber(currencyNumber * 0.92);
        }else if(currencyType1 === "USD" && currencyType2 === "YEN") {
            setConvertedCurrencyNumber(currencyNumber * 149.67);
        }else if(currencyType1 === "RON" && currencyType2 === "RON") {
            setConvertedCurrencyNumber(currencyNumber * 1);
        }else if(currencyType1 === "RON" && currencyType2 === "USD") {
            setConvertedCurrencyNumber(currencyNumber * 0.22);
        }else if(currencyType1 === "RON" && currencyType2 === "EUR") {
            setConvertedCurrencyNumber(currencyNumber * 0.2);
        }else if(currencyType1 === "RON" && currencyType2 === "YEN") {
            setConvertedCurrencyNumber(currencyNumber * 32.82);
        }else if(currencyType1 === "EUR" && currencyType2 === "USD") {
            setConvertedCurrencyNumber(currencyNumber * 1.09);
        }else if(currencyType1 === "EUR" && currencyType2 === "RON") {
            setConvertedCurrencyNumber(currencyNumber * 4.98);
        }else if(currencyType1 === "EUR" && currencyType2 === "EUR") {
            setConvertedCurrencyNumber(currencyNumber * 1);
        }else if(currencyType1 === "EUR" && currencyType2 === "YEN") {
            setConvertedCurrencyNumber(currencyNumber * 163.37);
        }else if(currencyType1 === "YEN" && currencyType2 === "USD") {
            setConvertedCurrencyNumber(currencyNumber * 0.0067);
        }else if(currencyType1 === "YEN" && currencyType2 === "RON") {
            setConvertedCurrencyNumber(currencyNumber * 0.030);
        }else if(currencyType1 === "YEN" && currencyType2 === "EUR") {
            setConvertedCurrencyNumber(currencyNumber * 0.0061);
        }else if(currencyType1 === "YEN" && currencyType2 === "YEN") {
            setConvertedCurrencyNumber(currencyNumber * 1);
        }
    }

    return(
        <>
        <div className="converter-container">
            <h1>Currency Converter</h1>
            <select name="" id="" onChange={handleTypeToConvertInput1}>
                <option value="USD">USD</option>
                <option value="RON">RON</option>
                <option value="EUR">EUR</option>
                <option value="YEN">YEN</option>
            </select>
            <input type="text" placeholder="Enter value" onChange={handleNumberInput}/>
            <p>To</p>
            <select name="" id="" onChange={handleTypeToConvertInput2}>
                <option value="USD">USD</option>
                <option value="RON">RON</option>
                <option value="EUR">EUR</option>
                <option value="YEN">YEN</option>
            </select><br />
            <button onClick={convertFunction}>Convert</button>
            <p>value will show here</p>
            <p>currency 1 is: {currencyNumber}</p>
            <p>currency 2 is: {convertedCurrencyNumber}</p>
        </div>
        </>
    )
}
export default Converter