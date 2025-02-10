import React, { useState } from 'react';
import ReactModal from 'react-modal';

// Define modal styles
const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: 'none',
        borderRadius: '8px',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '90%', // Added for responsiveness
        width: 'auto',     // Added for responsiveness
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

const VideoSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div className='content py-10 md:py-20 flex flex-col md:flex-row gap-10 items-center'> {/* Modified flex direction */}
                <div className="relative w-full md:w-1/2"> {/* Adjusted width */}
                    <img
                        src="https://images.livspace-cdn.com/w:555/h:304/q:50/plain/https://d3ai42rl8fy79o.cloudfront.net/galactus/templates/testimonial_desktop-rohit.jpg.1589528775089" // Replace with your actual image path
                        alt="Video Thumbnail"
                        className="cursor-pointer rounded-lg w-full object-cover h-auto md:h-[304px]" // Adjusted height
                        onClick={() => setModalIsOpen(true)}
                    />
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"  // Centered play button

                    >
                        <button className="play-button cursor-pointer bg-white rounded-full p-2"
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

                <div className="mt-4 text-center justify-center items-center flex flex-col w-full md:w-1/2"> {/* Adjusted width */}
                    <p className="text-lg italic">
                        “Hats off to the entire team at Livspace. They finished the project ahead of time. They said 45 days but finished it much earlier.”
                    </p>
                    <p className="text-base font-bold mt-2">Rohit and Shveta</p>
                </div>

            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={modalStyles}
                contentLabel="Video Testimonial"
            >
                <div className="z-50 relative"> {/* Made relative for positioning */}
                    <div  onClick={()=> setModalIsOpen(false)} className='text-black absolute right-4 top-4 cursor-pointer font-bold'>X</div>

                    <iframe
                        width="100%"          // Make iframe responsive
                        height="auto"         // Adjust height automatically
                        style={{ aspectRatio: '16 / 9' }} // Maintain 16:9 aspect ratio
                        src="https://www.youtube.com/embed/0j6s1XfPA3k"
                        title="Rohit and Shveta&#39;s Dream Modular Kitchen | Livspace Review"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
            </ReactModal>

        </>
    );
};

export default VideoSection;
