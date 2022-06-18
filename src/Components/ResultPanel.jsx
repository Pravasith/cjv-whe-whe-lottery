import "../CSSFiles/ResultPanel.css"

const ResultPanel = props => {
    const { selectedNumbers, moneyValue } = props

    return (
        <div className="result-panel">
            <div className="selected-numbers">
                <p>Selected Numbers</p>
                <p className="blue">
                    {!!selectedNumbers.length
                        ? selectedNumbers.join(", ")
                        : "Selection empty"}
                </p>
            </div>

            <div className="selected-dollars">
                <p>Total</p>
                <p className="blue">${moneyValue}</p>
            </div>
        </div>
    )
}

export default ResultPanel
