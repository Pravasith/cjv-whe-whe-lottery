import "../CSSFiles/NumbersPanel.css"

import { useState, useEffect } from "react"

const NumbersPanel = () => {
    const [buttons, setButtons] = useState([])

    const initializeButtons = () => {
        // This function initializes the buttons array and sets it to state
        const tempButtons = new Array(20).fill(0).map((_, i) => {
            return {
                className: "",
                innerHtml: i + 1,
            }
        })

        setButtons(tempButtons)
    }

    useEffect(() => {
        initializeButtons()
    }, [])

    return (
        <div className="numbers-panel">
            <div className="title">
                <p>🔢 Select numbers 🔢</p>
            </div>

            <div className="numbers">
                {buttons.map((button, i) => {
                    return (
                        <button
                            key={"numbers-" + i}
                            className={button.className}
                        >
                            {button.innerHtml}
                        </button>
                    )
                })}
            </div>

            <button>Cash</button>
            <button>Clear</button>
            <button>Select Random</button>
        </div>
    )
}

export default NumbersPanel
