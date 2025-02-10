import React, { useState } from 'react';

const TestesToBeBest = () => {
    const [activeTab, setActiveTab] = useState('Drawer Cyclic Test');

    const tabs = [
        'Drawer Cyclic Test',
        'Shutter Cyclic Test',
        'Vertical Force Test',
        'Shelf Load Test',
    ];

    const tabContents = {
        'Drawer Cyclic Test': {
            title: 'Drawer Cyclic Test',
            description: 'Ensures extended life for your cabinet drawers.',
            videoUrl: 'https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/design-to-installtion-1616405714-HYWaQ/tested-best-1616487276-wIcKF/drawer-testing-1624542511-bJpFw/drawer-cyclic-v3-d-1624542538-4AJQx.mp4',
        },
        'Shutter Cyclic Test': {
            title: 'Shutter Cyclic Test',
            description: 'Details about the shutter cyclic test.',
            videoUrl: 'https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/design-to-installtion-1616405714-HYWaQ/tested-best-1616487276-wIcKF/drawer-testing-1624542511-bJpFw/drawer-cyclic-v3-d-1624542538-4AJQx.mp4',
        },
        'Vertical Force Test': {
            title: 'Vertical Force Test',
            description: 'Information on the vertical force test.',
            videoUrl: 'https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/design-to-installtion-1616405714-HYWaQ/tested-best-1616487276-wIcKF/drawer-testing-1624542511-bJpFw/drawer-cyclic-v3-d-1624542538-4AJQx.mp4',
        },
        'Shelf Load Test': {
            title: 'Shelf Load Test',
            description: 'Details about the shelf load test.',
            videoUrl: 'https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/design-to-installtion-1616405714-HYWaQ/tested-best-1616487276-wIcKF/drawer-testing-1624542511-bJpFw/drawer-cyclic-v3-d-1624542538-4AJQx.mp4',
        },
    };

    const currentTabContent = tabContents[activeTab];

    return (
        <div className="bg-gray-50 py-12">
            <div className="content mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Tested to be the best
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                    A lot of our success in modular strength hinges on testing our cabinets
                </p>

                {/* Tabs */}
                <div className="mt-6 border-b border-gray-200">
                    <nav className="-mb-px flex space-x-4 overflow-x-auto"> {/* Added overflow-x-auto */}
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-md ${activeTab === tab
                                        ? 'border-[#EB595F] text-[#EB595F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    } focus:outline-none`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="mt-6 flex flex-col md:flex-row gap-5"> {/* Modified flex direction */}
                    {currentTabContent.videoUrl ? (
                        <div className="relative w-full md:w-1/2"> {/* Adjusted width */}
                            <video
                                src={currentTabContent.videoUrl}
                                title="Test Video"
                                loop
                                autoPlay
                                muted
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ) : (

                        <div className="bg-gray-200 aspect-w-16 aspect-h-9 flex items-center justify-center">
                            <span className="text-gray-500">No video available</span>
                        </div>

                    )}
                    <div className="flex flex-col justify-center md:w-1/2"> {/* Adjusted width */}
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                            {currentTabContent.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{currentTabContent.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestesToBeBest;
