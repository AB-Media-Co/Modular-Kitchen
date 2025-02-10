import { useState } from 'react';

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
            videoUrl: 'https://player.vimeo.com/video/1010609171',
        },
        'Shutter Cyclic Test': {
            title: 'Shutter Cyclic Test',
            description: 'Details about the shutter cyclic test.',
            videoUrl: 'https://player.vimeo.com/video/1005784969',
        },
        'Vertical Force Test': {
            title: 'Vertical Force Test',
            description: 'Information on the vertical force test.',
            videoUrl: 'https://player.vimeo.com/video/1005784210',
        },
        'Shelf Load Test': {
            title: 'Shelf Load Test',
            description: 'Details about the shelf load test.',
            videoUrl: 'https://player.vimeo.com/video/1005784210',
        },
    };

    const currentTabContent = tabContents[activeTab];

    return (
        <div className="bg-gray-50 py-12">
            <div className="content mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Tested to be the best
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                    A lot of our success in modular strength hinges on testing our cabinets.
                </p>

                {/* Tabs */}
                <div className="mt-6 border-b border-gray-200">
                    <nav className="-mb-px flex space-x-4 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-md ${activeTab === tab
                                    ? 'border-black text-black'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    } focus:outline-none`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentTabContent.videoUrl ? (
                        <div className="relative w-full h-64 md:h-96">
                            <iframe
                                src={currentTabContent.videoUrl}
                                title={currentTabContent.title}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; muted"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                autoPlay
                                loop
                                muted
                            ></iframe>
                        </div>
                    ) : (
                        <div className="bg-gray-200 aspect-w-16 aspect-h-9 flex items-center justify-center rounded-lg">
                            <span className="text-gray-500">No video available</span>
                        </div>
                    )}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                            {currentTabContent.title}
                        </h3>
                        <p className="text-gray-600">{currentTabContent.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestesToBeBest;