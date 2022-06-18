import { useEffect, useState } from "react"
import DollarSelectionPanel from "./Components/DollarSelectionPanel"
import Message from "./Components/Message"
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

    return (
        <div className="App">
            <Title />
            <Message />

            <div className="panels">
                <DollarSelectionPanel
                    selectedNumbers={selectedNumbers}
                    setMoneyValue={setMoneyValue}
                />
                <NumbersPanel
                    selectedNumbers={selectedNumbers}
                    setSelectedNumbers={setSelectedNumbers}
                    clearMoneyValue={clearMoneyValue}
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
