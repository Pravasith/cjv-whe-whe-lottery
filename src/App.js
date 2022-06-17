import { useEffect, useState } from "react"
import DollarSelectionPanel from "./Components/DollarSelectionPanel"
import Message from "./Components/Message"
import NumbersPanel from "./Components/NumbersPanel"
import ResultPanel from "./Components/ResultPanel"
import Title from "./Components/Title"

import "./CSSFiles/App.css"

function App() {
    const [selectedNumbers, setSelectedNumbers] = useState([])

    useEffect(() => {
        console.log(selectedNumbers)
    }, [selectedNumbers])

    return (
        <div className="App">
            <Title />
            <Message />

            <div className="panels">
                <DollarSelectionPanel />
                <NumbersPanel
                    selectedNumbers={selectedNumbers}
                    setSelectedNumbers={setSelectedNumbers}
                />
                <ResultPanel />
            </div>
        </div>
    )
}

export default App
