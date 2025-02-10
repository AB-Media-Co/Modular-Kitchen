// CommonCarousel.jsx
import React, { useState } from 'react';

const CommonCarousel = ({ children, itemsPerSlide , classCss="w-full"}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = React.Children.count(children);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const visibleItems = React.Children.toArray(children).slice(currentIndex, currentIndex + itemsPerSlide);

    return (
        <div className="relative py-10 content">
            {/* Carousel Container */}
            <div className="flex items-center justify-between px-4 md:px-0">
                {/* Previous Button */}
                <button onClick={goToPrevious} className="cursor-pointer z-40 absolute left-2 md:left-0 top-[50%] md:top-[60%] transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 focus:outline-none shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Items Container */}
                <div className={`flex gap-4 overflow-x-auto md:overflow-hidden transition-transform duration-300 ease-in-out ${classCss}`}>
                    {visibleItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item}
                        </React.Fragment>
                    ))}
                </div>

                {/* Next Button */}
                <button onClick={goToNext} className="cursor-pointer absolute z-40 right-2 md:right-0 top-[50%] md:top-[60%] transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 focus:outline-none shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CommonCarousel;
