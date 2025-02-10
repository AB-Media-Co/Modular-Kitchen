import React from 'react';
import CountUp from 'react-countup';

const NumberCountSection = () => {
  return (
    <div className="bg-[#5BA585] text-white py-10">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center  justify-center gap-6">
          <h2 className="text-3xl font-bold text-center">Let our numbers do the talking!</h2>
          <div className="flex flex-wrap gap-10 w-full justify-around"> {/* Changed to flex-wrap and justify-around */}
            <div className="text-center w-1/2 sm:w-auto"> {/* Adjusted width for responsiveness */}
              <CountUp end={50000} duration={2} separator="" className="text-4xl sm:text-5xl font-semibold" /> <span className="text-4xl sm:text-5xl font-semibold">+</span> {/* Adjusted text size */}
              <p>#LivspaceHomes</p>
            </div>
            <div className="text-center w-1/2 sm:w-auto"> {/* Adjusted width for responsiveness */}
              <CountUp end={3500} duration={2} separator="" className="text-4xl sm:text-5xl font-semibold" />  <span className="text-4xl sm:text-5xl font-semibold">+</span> {/* Adjusted text size */}
              <p>designers</p>
            </div>
            <div className="text-center w-1/2 sm:w-auto"> {/* Adjusted width for responsiveness */}
              <CountUp end={40} duration={2} separator=" " className="text-4xl sm:text-5xl font-semibold" /> {/* Adjusted text size */}
              <p>cities</p>
            </div>
            <div className="text-center w-1/2 sm:w-auto"> {/* Adjusted width for responsiveness */}
              <CountUp end={4} duration={2} separator=" " className="text-4xl sm:text-5xl font-semibold" /> {/* Adjusted text size */}
              <p>countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCountSection;
