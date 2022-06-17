import "../CSSFiles/ResultPanel.css"

const ResultPanel = props => {
    const { selectedNumbers, moneyValue } = props

    return (
        <div className="result-panel">
            <div className="selected-numbers">
                <p>Selected Numbers</p>
                <p>{selectedNumbers.join(", ")}</p>
            </div>

            <div className="selected-dollars">
                <p>Dollar amount selected</p>
                <p>${moneyValue}</p>
            </div>
        </div>
    )
}

export default ResultPanel
