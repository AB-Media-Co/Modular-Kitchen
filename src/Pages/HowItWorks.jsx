
function HowItWorks() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">How it works</h2>
        </div>
        <div className="mt-10">
          <div className="md:grid md:grid-cols-9 md:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                    {/* Replace with your icon */}
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.889 9-8.019 9-6.131 0-9.258-4.943-8.019-9z" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gray-100 opacity-25"></div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">Meet a designer</p>
            </div>

            {/* Connector Line */}
            <div className="hidden h-[117px] md:flex items-center justify-center">
              <div className="border-t-2  border-dotted border-gray-300 w-full"></div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                    {/* Replace with your icon */}
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V5a3 3 0 00-3-3H4.5a3 3 0 00-3 3v11a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gray-100 opacity-25"></div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">(5% payment) Book a renovation</p>
            </div>

            {/* Connector Line */}
            <div className="hidden h-[117px] md:flex items-center justify-center">
              <div className="border-t-2  border-dotted border-gray-300 w-full"></div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                    {/* Replace with your icon */}
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gray-100 opacity-25"></div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">(50% payment) Execution begins</p>
            </div>

             {/* Connector Line */}
             <div className="hidden h-[117px] md:flex items-center justify-center">
              <div className="border-t-2 border-dotted border-gray-300 w-full"></div>
            </div>
            {/* Step 4 */}
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                    {/* Replace with your icon */}
                     <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gray-100 opacity-25"></div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">(100% payment) Final installations</p>
            </div>
             {/* Connector Line */}
             <div className="hidden h-[117px] md:flex items-center justify-center">
              <div className="border-t-2 border-dotted  border-gray-300 w-full"></div>
            </div>
            {/* Step 5 */}
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                    {/* Replace with your icon */}
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17l-5 5 5-5zm7 0l5 5-5-5zm-7-7l-5-5 5 5zm7 0l5-5-5 5zm-2 2v4m0-4h4m-4 0H8" />
                    </svg>
                  </div>
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gray-100 opacity-25"></div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">Move in and enjoy!</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-8 rounded-full">
            BOOK FREE CONSULTATION
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default HowItWorks;
