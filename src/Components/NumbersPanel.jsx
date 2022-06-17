import "../CSSFiles/NumbersPanel.css"

import { useState, useEffect } from "react"

const NumbersPanel = props => {
    const { selectedNumbers, setSelectedNumbers, showSelectedNumbers } = props

    const [buttons, setButtons] = useState([])

    const initializeButtons = () => {
        // This function initializes the buttons array and sets it to state
        const tempButtons = new Array(20).fill(0).map((_, i) => {
            return {
                className: "",
                number: i + 1,
            }
        })

        setButtons(tempButtons)
    }

    useEffect(() => {
        initializeButtons()
    }, [])

    const changeButtonColors = (num, isSelectedAlready) => {
        const tempButtons = buttons.map(button => {
            if (button.number === num) {
                return {
                    ...button,
                    className: isSelectedAlready ? "" : "selected",
                }
            } else return button
        })

        setButtons(tempButtons)
    }

    const selectNumbers = button => {
        if (selectedNumbers.includes(button.number)) {
            // in case the number is already selected
            changeButtonColors(button.number, true)
            setSelectedNumbers([
                ...selectedNumbers.filter(num => button.number !== num),
            ])
        } else {
            if (selectedNumbers.length < 5) {
                changeButtonColors(button.number)
                setSelectedNumbers([...selectedNumbers, button.number])
            } else alert("Sorry, you can select 5 numbers at most.")
        }
    }

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
                            onClick={() => {
                                selectNumbers(button)
                            }}
                        >
                            {button.number}
                        </button>
                    )
                })}
            </div>

            <button onClick={showSelectedNumbers}>Cash</button>
            <button>Clear</button>
            <button>Select Random</button>
        </div>
    )
}

export default NumbersPanel
