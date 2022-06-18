import "../CSSFiles/NumbersPanel.css"

import { useState, useEffect } from "react"

const NumbersPanel = props => {
    const { selectedNumbers, setSelectedNumbers, clearMoneyValue, showResult } =
        props

    const numbers1To20 = new Array(20).fill(0).map((_, i) => i + 1)

    const [buttons, setButtons] = useState([])

    const initializeButtons = () => {
        // This function initializes the buttons array and sets it to state
        const tempButtons = numbers1To20.map(number => ({
            className: "",
            number,
        }))

        setButtons(tempButtons)
        setSelectedNumbers([])
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

    const selectTheNumber = buttonNumber => {
        if (selectedNumbers.includes(buttonNumber)) {
            // in case the number is already selected
            changeButtonColors(buttonNumber, true)
            setSelectedNumbers([
                ...selectedNumbers.filter(num => buttonNumber !== num),
            ])
        } else {
            if (selectedNumbers.length < 5) {
                changeButtonColors(buttonNumber)
                setSelectedNumbers([...selectedNumbers, buttonNumber])
            } else alert("Sorry, you can select 5 numbers at most.")
        }
    }

    const handleClear = () => {
        clearMoneyValue()
        initializeButtons()
    }

    const selectRandom = () => {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        const randomNumbers = []
        let c = 0

        while (c < 5) {
            const randomNumber = getRandomInt(1, 20)

            if (randomNumbers.includes(randomNumber)) continue
            else randomNumbers.push(randomNumber)

            c++
        }

        const newButtons = buttons.map(button => ({
            number: button.number,
            className: randomNumbers.includes(button.number) ? "selected" : "",
        }))

        setButtons(newButtons)
        setSelectedNumbers(randomNumbers)
    }

    const handleCash = () => {
        showResult()
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
                                selectTheNumber(button.number)
                            }}
                        >
                            {button.number}
                        </button>
                    )
                })}
            </div>

            <button className="primary-btn" onClick={handleCash}>
                Cash
            </button>
            <button className="primary-btn" onClick={handleClear}>
                Clear
            </button>
            <button className="primary-btn" onClick={selectRandom}>
                Select Random
            </button>
        </div>
    )
}

export default NumbersPanel
