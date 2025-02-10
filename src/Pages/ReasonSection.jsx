import React from 'react';

const ReasonSection = () => {
    // JSON array of objects
    const reasons = [
        {
            id: 1,
            image: "https://images.livspace-cdn.com/w:60/h:60/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/10-year-warranty-desktop-1646210954-fh1K8.png", // Replace with actual image paths
            text: "10-year warranty¹"
        },
        {
            id: 2,
            image: "https://images.livspace-cdn.com/w:60/h:60/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/10-year-warranty-desktop-1646210954-fh1K8.png",
            text: "Transparent pricing"
        },
        {
            id: 3,
            image: "https://images.livspace-cdn.com/w:60/h:60/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/45-day-move-desktop-1646210955-0qlyM.png",
            text: "45 days move-in guarantee²"
        }
    ];

    

    return (
        <div className='flex flex-col'>
            <div className='py-10 md:py-20 flex justify-center gap-10'>
                {reasons.map((reason,) => (
                    <div key={reason.id} className="flex flex-col items-center">
                        <img src={reason.image} alt={reason.text} className="w-[60px] h-[60px] mb-2" />
                        <p className="text-center text-[16px] leading-[20px]">{reason.text}</p>
                    </div>
                ))}
            </div>
            <div className='py-10 bg-[#F5F5F5] md:py-20'>
                <div className='flex flex-col items-center justify-center gap-6 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
                    <h1 className="text-4xl font-bold tracking-tight text-center text-gray-800 ">
                        The kitchen design you crave
                    </h1>
                    <p className=" text-xl text-center text-gray-500">
                        When you give your kitchen the Livspace touch, you get both beauty and functionality. We employ state-of-the-art technology and design science to ensure your home features a flawless kitchen that lasts a VERY long time
                    </p>
                    <button className="bg-[#EB595F] rounded-full text-white px-8 py-2">
                        Book Free Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReasonSection;