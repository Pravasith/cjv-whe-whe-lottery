import "../CSSFiles/ResultPanel.css"

const ResultPanel = () => {
    return (
        <div className="result-panel">
            <div className="selected-numbers">
                <p>Selected Numbers</p>
                <p>1, 2, 3, 4, 5</p>
            </div>

            <div className="selected-dollars">
                <p>Dollar amount selected</p>
                <p>$100</p>
            </div>
        </div>
    )
}

export default ResultPanel
