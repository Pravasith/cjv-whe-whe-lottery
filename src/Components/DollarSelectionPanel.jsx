import "../CSSFiles/DollarSelectionPanel.css"

const DollarSelectionPanel = () => {
    const dollarAmounts = [1, 5, 10, 20]

    return (
        <div className="dollar-panel">
            <div className="title">
                <p>🤑 Select dollar amount 🤑</p>
            </div>

            <div className="dollar-section">
                {dollarAmounts.map((amount, i) => {
                    return <button key={"dollar-amount-" + i}>${amount}</button>
                })}
            </div>
        </div>
    )
}

export default DollarSelectionPanel
