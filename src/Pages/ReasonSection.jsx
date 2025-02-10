import React from 'react';

const ReasonSection = () => {
    // JSON array of objects
    const reasons = [
        {
            id: 1,
            image: `<svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.9438 24.9062C46.9438 37.5938 37.0313 47.5 24.3438 47.5C11.6563 47.5 1.74375 37.5938 1.74375 24.9062C1.74375 12.2188 11.6563 2.3125 24.3438 2.3125C37.0313 2.3125 46.9438 12.2188 46.9438 24.9062Z" fill="#F2F2F2"/>
            <path d="M24.3437 6.2625L28.7062 16.9688L40.9687 18.5813L30.75 28.1688L33.2812 40.3125L24.3437 34.7688L15.4062 40.3125L17.9375 28.1688L7.71875 18.5813L19.9812 16.9688L24.3437 6.2625Z" fill="#F04452"/>
            </svg>`,
            text: "10-year warranty¹"
        },
        {
            id: 2,
            image: `<svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.9438 24.9062C46.9438 37.5938 37.0313 47.5 24.3438 47.5C11.6563 47.5 1.74375 37.5938 1.74375 24.9062C1.74375 12.2188 11.6563 2.3125 24.3438 2.3125C37.0313 2.3125 46.9438 12.2188 46.9438 24.9062Z" fill="#F2F2F2"/>
            <path d="M24.3437 6.2625L28.7062 16.9688L40.9687 18.5813L30.75 28.1688L33.2812 40.3125L24.3437 34.7688L15.4062 40.3125L17.9375 28.1688L7.71875 18.5813L19.9812 16.9688L24.3437 6.2625Z" fill="#F04452"/>
            </svg>`,
            text: "Transparent pricing"
        },
        {
            id: 3,
            image: `<svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.9184 23.9466C42.9184 36.1464 33.0554 46.0093 20.8556 46.0093C8.65578 46.0093 -1.20711 36.1464 -1.20711 23.9466C-1.20711 11.7467 8.65578 1.8838 20.8556 1.8838C33.0554 1.8838 42.9184 11.7467 42.9184 23.9466Z" fill="#F2F2F2"/>
            <path d="M35.6667 4H8.33333C7.3 4 6.5 4.8 6.5 5.83333V39.1667C6.5 40.2 7.3 41 8.33333 41H35.6667C36.7 41 37.5 40.2 37.5 39.1667V5.83333C37.5 4.8 36.7 4 35.6667 4Z" fill="#D8D8D8"/>
            <path d="M37.5 13.6667H6.5V5.83333H37.5V13.6667Z" fill="#B3B3B3"/>
            <path d="M13 9.83333H31V12.6667H13V9.83333Z" fill="#EBEBEB"/>
            <path d="M30.5 31H28.3333V26.8333H30.5V31Z" fill="#B3B3B3"/>
            <path d="M13.6667 31H11.5V26.8333H13.6667V31Z" fill="#B3B3B3"/>
            <path d="M22.1667 31H20V26.8333H22.1667V31Z" fill="#B3B3B3"/>
            <path d="M30.5 31H28.3333V26.8333H30.5V31Z" fill="#B3B3B3"/>
            <path d="M33.8333 21.6667H31.6667V17.5H33.8333V21.6667Z" fill="#B3B3B3"/>
            <path d="M13.6667 21.6667H11.5V17.5H13.6667V21.6667Z" fill="#B3B3B3"/>
            <path d="M22.1667 21.6667H20V17.5H22.1667V21.6667Z" fill="#B3B3B3"/>
            <path d="M29.5 37C29.5 37.6333 29 38.1667 28.3333 38.1667C27.6667 38.1667 27.1667 37.6333 27.1667 37C27.1667 36.3667 27.6667 35.8333 28.3333 35.8333C29 35.8333 29.5 36.3667 29.5 37Z" fill="#F04452"/>
            <path d="M28.3333 35.8333V33.6667C28.3333 33.3333 28.6667 33.1667 29 33.3333L31.1667 34.5C31.3333 34.6667 31.1667 35 30.8333 35H29C28.6667 35 28.3333 35.3333 28.3333 35.8333Z" fill="#F04452"/>
            </svg>`,
            text: "45 days move-in guarantee²"
        }
    ];
    


    return (
        <div className='flex flex-col'>
            <div className='py-10 md:py-20 px-8 md:px-4 flex justify-center gap-10'>
                {reasons.map((reason,) => (
                    <div key={reason.id} className="flex flex-col items-center">
                  
                        <div dangerouslySetInnerHTML={{ __html: reason.image }} />


                        {/* <img src={reason.image} alt={reason.text} className="w-[60px] h-[60px] mb-2" /> */}
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
                        At Bhumikar, we design modern and functional kitchen interiors that combine style and efficiency. Our expert team ensures that every kitchen is tailored to your needs, offering innovative storage solutions, premium finishes, and a seamless blend of aesthetics and practicality.                    </p>
                    <a href='https://wa.me/+919953828816' className="bg-black rounded-full text-white px-8 py-2">
                        Book Free Consultation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReasonSection;