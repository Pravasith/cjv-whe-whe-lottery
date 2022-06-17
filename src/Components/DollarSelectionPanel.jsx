import "../CSSFiles/DollarSelectionPanel.css"

const DollarSelectionPanel = ({ setMoneyValue, selectedNumbers }) => {
    const dollarAmounts = [1, 5, 10, 20]

    const selectDollarAmount = value => {
        if (selectedNumbers.length === 5) {
            setMoneyValue(prevValue => prevValue + value)
        } else {
            alert("Please select 5 numbers before selecting Dollar value!")
        }
    }

    return (
        <div className="dollar-panel">
            <div className="title">
                <p>🤑 Select dollar amount 🤑</p>
            </div>

            <div className="dollar-section">
                {dollarAmounts.map((amount, i) => {
                    return (
                        <button
                            key={"dollar-amount-" + i}
                            onClick={() => selectDollarAmount(amount)}
                        >
                            ${amount}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default DollarSelectionPanel
