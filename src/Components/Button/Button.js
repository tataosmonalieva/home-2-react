import  React from "react";


const Button = ({text}) => {
    const handleClick = () => {
        console.log(`hello${text}`)
    }
    return (
        <button className={'customButton'}
                onClick={handleClick}
        >
            {text}
        </button>
    )
}