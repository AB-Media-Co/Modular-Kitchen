import React from 'react';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className=" w-full flex justify-between items-center px-2 md:px-[32px] py-[18px]">
                <div className="logo">
                 
                    <img src="/Logo/Bhumikar.png" alt="Logo" className="h-[57px]" />
                </div>
                <div className="icons">
                    {/* Replace with your icon */}
                    <button className="md:py-2 px-2 py-1 md:px-6 text-white font-medium text-[12px] bg-black rounded-full">
                     
                            GET FREE QUOTE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;