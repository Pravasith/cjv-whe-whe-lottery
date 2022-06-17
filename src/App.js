import DollarSelectionPanel from "./Components/DollarSelectionPanel"
import NumbersPanel from "./Components/NumbersPanel"
import ResultPanel from "./Components/ResultPanel"
import Title from "./Components/Title"

import "./CSSFiles/App.css"

function App() {
    return (
        <div className="App">
            <Title />

            <div className="panels">
                <DollarSelectionPanel />
                <NumbersPanel />
                <ResultPanel />
            </div>
        </div>
    )
}

export default App
