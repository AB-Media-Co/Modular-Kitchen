import React from 'react'

const Button = ({btn=" GET A FREE QUOTE"}) => {
    return (
        <a href='https://wa.me/+919953828816' className="bg-black cursor-pointer text-white px-8 py-3 rounded-full  transition-colors text-sm font-semibold">
           {btn}
        </a>
    )
}

export default Button
