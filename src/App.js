import { useState } from "react"

import DollarSelectionPanel from "./Components/DollarSelectionPanel"
import NumbersPanel from "./Components/NumbersPanel"
import ResultPanel from "./Components/ResultPanel"
import Title from "./Components/Title"

import "./CSSFiles/App.css"

function App() {
    const [selectedNumbers, setSelectedNumbers] = useState([])
    const [moneyValue, setMoneyValue] = useState(0)

    const clearMoneyValue = () => {
        setMoneyValue(0)
    }

    const showResult = () => {
        if (!selectedNumbers.length || selectedNumbers.length < 5) {
            alert("Please choose 5 numbers and a money value first!")
            return
        }

        if (!moneyValue) {
            alert("Please choose the Money value!")
            return
        }

        alert(
            `Numbers selected are: ${selectedNumbers.join(
                ", "
            )}, and the money value selected is $${moneyValue}`
        )
    }

    return (
        <div className="App">
            <Title />

            <div className="panels">
                <DollarSelectionPanel
                    selectedNumbers={selectedNumbers}
                    setMoneyValue={setMoneyValue}
                />
                <NumbersPanel
                    selectedNumbers={selectedNumbers}
                    setSelectedNumbers={setSelectedNumbers}
                    clearMoneyValue={clearMoneyValue}
                    showResult={showResult}
                />
                <ResultPanel
                    selectedNumbers={selectedNumbers}
                    moneyValue={moneyValue}
                />
            </div>
        </div>
    )
}

export default App
