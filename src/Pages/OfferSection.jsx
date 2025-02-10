import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Wrench, Shield, Lightbulb } from 'lucide-react';
import Button from '../Common/Button';
import CommonCarousel from '../Common/CommonCarousel';
import { CommonSlider } from '../Common/CommonSlider';

const OfferSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const services = [
        {
            title: 'Our services',
            icon: "🛠️",
            items: [
                'Modular kitchens',
                'Modular wardrobes',
                'Lighting',
                'Flooring',
                'Electrical work',
                'Civil work',
                'False ceiling',
                'Wall design & painting'
            ]
        },
        {
            title: 'Warranty',
            icon: "🛡️",
            items: [
                'FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.',
                'Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.'
            ]
        },
        {
            title: 'Technology & science',
            icon: "💡",
            items: [
                'AquaBloc® Technology - Hermetically sealed edges that ensure no moisture enters the panels of your modular cabinets.',
                'AntiBubble® Technology - Super seamless panels without air bubbles for your modular cabinets.',
                'DuraBuild™ Technology - Robust structure for modular cabinets, making them strong and long-lasting.',
                'Design Science - Modular kitchens with improved accessibility that makes daily tasks more efficient and reduces stress on the body.'
            ]
        },
        {
            title: 'Additional Services',
            icon: "🔧",
            items: [
                'Custom cabinet solutions',
                'Interior decoration',
                'Smart home integration',
                'Professional consultation'
            ]
        }
    ];

    const nextSlide = () => {
        setSlideIndex((prev) => (prev === services.length - 3 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setSlideIndex((prev) => (prev === 0 ? services.length - 3 : prev - 1));
    };

    const itemsPerSlide = 3;

    return (
        <div className=" mx-auto  py-12 bg-gray-50">
            <div className='content'>
                <div className="flex justify-between md:items-center flex-col md:flex-row gap-4 mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">What we offer</h1>
                    <Button />
                </div>



                {/* <CommonCarousel itemsPerSlide={itemsPerSlide}>
                    {services.map((service, index) => (
                        <div key={index} className="w-full md:w-1/3 bg-white p-2 md:p-8 rounded-lg shadow-md overflow-hidden flex-shrink-0">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-gray-100 p-2 rounded-lg">
                                    <span className="text-2xl">{service.icon}</span>
                                </span>
                                <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                            </div>
                            <ul className="space-y-4">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="w-1 h-1 rounded-full bg-gray-400 mt-2.5"></span>
                                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>


                        </div>
                    ))}
                </CommonCarousel> */}


                <div className='block md:hidden'>
                    <CommonCarousel itemsPerSlide={itemsPerSlide}>
                        {services.map((service, index) => (
                            <div key={index} className="w-full h-[60vh] my-4 bg-white p-2 md:p-8 rounded-lg shadow-md overflow-hidden flex-shrink-0">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="bg-gray-100 p-2 rounded-lg">
                                        <span className="text-2xl">{service.icon}</span>
                                    </span>
                                    <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                                </div>
                                <ul className="space-y-4">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="w-1 h-1 rounded-full bg-gray-400 mt-2.5"></span>
                                            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        ))}
                    </CommonCarousel>

                </div>

                <div className='hidden md:block'>
                    <CommonSlider showItems={3} gap={16}>
                        {services.map((service, index) => (
                            <div key={index} className="w-full h-[60vh] my-4 bg-white p-2 md:p-8 rounded-lg shadow-md overflow-hidden flex-shrink-0">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="bg-gray-100 p-2 rounded-lg">
                                        <span className="text-2xl">{service.icon}</span>
                                    </span>
                                    <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                                </div>
                                <ul className="space-y-4">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="w-1 h-1 rounded-full bg-gray-400 mt-2.5"></span>
                                            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        ))}
                    </CommonSlider>

                </div>

            </div>
        </div>
    );
};

export default OfferSection
