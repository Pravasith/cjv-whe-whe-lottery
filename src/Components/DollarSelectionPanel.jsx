import "../CSSFiles/DollarSelectionPanel.css"

const DollarSelectionPanel = () => {
    const dollarAmounts = [1, 5, 10, 20]

    return (
        <div className="dollar-section">
            {dollarAmounts.map((amount, i) => {
                return <button key={"dollar-amount-" + i}>${amount}</button>
            })}
        </div>
    )
}

export default DollarSelectionPanel
