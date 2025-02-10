import React from 'react';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className=" w-full flex justify-between items-center px-[32px] py-[18px]">
                <div className="logo">
                    {/* Replace with your logo */}
                    <img src="https://images.livspace-cdn.com/w:154/h:36/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/livspace-logo-1695931938-nUPhX/livspace-1695932166-AWR5M.svg" alt="Logo" className="h-[27px]" />
                </div>
                <div className="icons">
                    {/* Replace with your icon */}
                    <button className="md:py-2 px-2 py-1 md:px-6 text-white font-medium text-[12px] bg-[#EB595F] rounded-full">
                     
                            GET FREE QUOTE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;