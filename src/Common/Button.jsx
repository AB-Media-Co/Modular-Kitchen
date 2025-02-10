import React from 'react'

const Button = ({btn=" GET A FREE QUOTE"}) => {
    return (
        <button className="bg-[#EB595F] cursor-pointer text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors text-sm font-semibold">
           {btn}
        </button>
    )
}

export default Button
