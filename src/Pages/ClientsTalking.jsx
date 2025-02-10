/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '../Common/Button';
import CommonCarousel from '../Common/CommonCarousel';
import Heading from '../Common/Heading';
import ReactModal from 'react-modal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

const modalStyles = {
    content: {
        top: '15%',          // Align to the top
        left: '15%',         // Align to the left
        right: '0',        // Align to the right
        bottom: '0',       // Align to the bottom
        margin: '0',       // Remove any margins
        padding: '0',      // Remove any padding
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: 'none',
        borderRadius: '0', // Remove border radius
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70vw',   // Take full viewport width
        height: '70vh',  // Take full viewport height
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Darker overlay
        zIndex: 1000, // Ensure overlay is on top
    },
};


const ClientsTalking = () => {
    const Clients = [
        {
            title: `“Livspace took time out to understand the nuances of exactly what we wanted and our philosophy.” Bijoy and Lisa`,
            Thumbnail: "https://images.livspace-cdn.com/w:555/h:184/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/client-testimony-1646315297-haa3R/preetika-and-nikhil-desktop-1646377717-qiw2k.jpg",
            videoUrl: 'https://images.livspace-cdn.com/w:600/h:340/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/kitchen-looks-1646376713-fFxLF/l-shaped-desktop-1646376768-UU4KP.jpg',
        },
        {
            title: `“Over the weekends, we like to call in our friends, especially now since Livspace has done such a fabulous job.”Rohini and Keshav

`,
            Thumbnail: "https://images.livspace-cdn.com/w:555/h:184/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/client-testimony-1646315297-haa3R/preetika-and-nikhil-desktop-1646377717-qiw2k.jpg",
            videoUrl: 'https://images.livspace-cdn.com/w:600/h:340/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/kitchen-looks-1646376713-fFxLF/l-shaped-desktop-1646376768-UU4KP.jpg',
        },
        {
            title: `“I think it’s fair to say that three months ago we got a house from a builder and today we have a home to come back to.”

Preetika and Nikhil`,
            Thumbnail: "https://images.livspace-cdn.com/w:555/h:184/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/client-testimony-1646315297-haa3R/preetika-and-nikhil-desktop-1646377717-qiw2k.jpg",
            videoUrl: 'https://images.livspace-cdn.com/w:600/h:340/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/kitchen-looks-1646376713-fFxLF/l-shaped-desktop-1646376768-UU4KP.jpg',
        },
        {
            title: `
“Overall it has been a very pleasant experience. I have no doubt that I would recommend Livspace.”
Rohit and Aanchal
`,
            Thumbnail: "https://images.livspace-cdn.com/w:555/h:184/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/client-testimony-1646315297-haa3R/preetika-and-nikhil-desktop-1646377717-qiw2k.jpg",
            videoUrl: 'https://images.livspace-cdn.com/w:600/h:340/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/kitchen-looks-1646376713-fFxLF/l-shaped-desktop-1646376768-UU4KP.jpg',
        },

    ];

    const itemsPerSlide = 3;


    const newsData = [
        {
            source: 'The Economic Times',
            content:
                'Livspace said it crossed the billion-dollar valuation mark after raising $180 million in a late-stage funding round led by KKR & Co...',
        },
        {
            source: 'Mint',
            content:
                'Livspace has joined the unicorn club after the online home décor startup backed by private equity firm TPG raised $180 mn at a valuation of over $1.2 bn...',
        },
        {
            source: 'Architect and Interiors India',
            content:
                'The 23,000 sq-ft Bengaluru centre, designed by FITCH Singapore, combines inspiration, information and technology',
        },
        {
            source: 'The Economic Times',
            content:
                'The company has also opened Experience Centres (ECs) spanning 1500 sq ft each in prime locations in all four cities.',
        },
    ];

    return (
        <div className='flex flex-col'>
            <div className="relative py-10 content">
                {/* Heading and Description */}
                <Heading
                    title="We'll let our clients do the talking"
                    description="Here’s what they have to say"
                    btn="BOOK FREE CONSULTATION"
                />


                {/* Carousel */}
                <CommonCarousel itemsPerSlide={itemsPerSlide} >
                    {Clients.map((client, index) => (
                        <ClientCard key={index} client={client} />
                    ))}
                </CommonCarousel>
            </div>

            <div className='py-10 md:py-20 justify-center bg-gray-50 items-start px-4 md:items-center flex gap-3 flex-col'>
                <div className='flex flex-col gap-2 justify-center md:items-center '>

                    <h1 className='text-4xl font-bold'>Connect with us</h1>
                    <p className='text-md'>Reach out on WhatsApp or give us a call for the best home design experience.</p>
                </div>
                <div className='flex gap-4 flex-col md:flex-row'>
                    <div className='flex gap-2 cursor-pointer bg-[#365677] px-6 py-2 rounded-full text-white' >
                        <CallIcon />
                        CALL NOW
                    </div>
                    <div className='flex gap-2 cursor-pointer bg-[#365677] px-6 py-2 rounded-full text-white' >

                        <WhatsAppIcon style={{ background: "green" }} />
                        WHATSAPP
                    </div>
                </div>

            </div>


            <div className='py-10 md:py-20 justify-center content flex gap-3 flex-col'>

                    <h2 className="text-3xl  text-start  font-semibold text-gray-800 mb-8">In the news</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newsData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
                            >
                                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                                    {item.source}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                            </div>
                        ))}
                    </div>
                
            </div>

        </div>
    );
};

export default ClientsTalking;






const ClientCard = ({ client }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="w-full md:w-1/3 flex flex-col bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
            <div className="relative">
                <img
                    src={client.Thumbnail}
                    alt={client.title}
                    className="w-full h-50 object-cover cursor-pointer" // Added cursor pointer
                    onClick={() => setModalIsOpen(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <button
                        className="play-button cursor-pointer bg-white rounded-full p-2"
                        onClick={() => setModalIsOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="black"
                            width="24"
                            height="24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
            </div>
            <p className="px-8 text-center py-4  relative z-10">{client.title}</p>

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={modalStyles}
                contentLabel="Video Testimonial"
                ariaHideApp={false} // Suppress the warning
            >
                <div className="relative w-full h-full">
                    <button
                        onClick={() => setModalIsOpen(false)}
                        className="text-white absolute right-4 top-4 cursor-pointer font-bold z-20 bg-gray-800 rounded-full px-3 py-1" // Added z-20
                    >
                        X
                    </button>

                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/0j6s1XfPA3k?autoplay=1" // Autoplay enabled
                        title="Rohit and Shveta's Dream Modular Kitchen | Livspace Review"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen // Enable full screen
                    ></iframe>
                </div>
            </ReactModal>
        </div>

    );
};




