/* eslint-disable react/prop-types */
import CommonCarousel from '../Common/CommonCarousel';
import Heading from '../Common/Heading';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { CommonSlider } from '../Common/CommonSlider';




const ClientsTalking = () => {
    const Clients = [
        {
            testimonial: `“Bhumikar took time out to understand the nuances of exactly what we wanted and our philosophy.”`,
            name: `Bijoy and Lisa`,
            image: `data:image/jpeg;base64,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`, // Dummy image

        },
        {
            testimonial: `“Over the weekends, we like to call in our friends, especially now since Bhumikar has done such a fabulous job.”`,
            name: `Rohini and Keshav`,
            image: `data:image/jpeg;base64,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`, // Dummy image

        },
        {
            testimonial: `“I think it’s fair to say that three months ago we got a house from a builder and today we have a home to come back to.”`,
            name: `Preetika and Nikhil`,
            image: `data:image/jpeg;base64,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`, // Dummy image

        },
        {
            testimonial: `“Overall it has been a very pleasant experience. I have no doubt that I would recommend Bhumikar.”`,
            name: `Rohit and Aanchal`,
            image: `data:image/jpeg;base64,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`, // Dummy image

        },
        {
            testimonial: `“Bhumikar’s attention to detail and commitment to quality have transformed our living space into a dream home.”`,
            name: `Amit and Anjali`,
            image: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmAMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAwECBQYHBP/EADcQAAICAQIDBAcGBgMAAAAAAAABAgMEBREGITESMkFxEyJRYYGRsRQjQlKh0QcVQ3LB4VNi8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A64AAA8QXRXMCsUTRRbFEiAqAUlKMIuU5KMV1beyQFQYPO4s0nE3jG55E14UrdfPoYqfHdfa+70+bj7ZWr9gNxBqWPx1iyltkYd1a/NGSl+hsOn6phalDtYWRCxrrHpJeaYHsKNFQBFKJFJHpaIZoCIFWUALvrzAXfXmAAAAIkiiyJLBASRRcURUDG67rFOjYfprPXsk9q609nJ/sjnGqavm6pY5ZdzcN/Vri9oR+B6OJ9SlqWsXTUt6a36Ope5dX8WYkAACoF9NtlFsbabJV2x5qcXs0WADoPDHE8dQaxM5xhlfhn0Vn7M2Y4wm004tqS6NeB0zhTWP5tp+1rX2ml9mzbx9j+P1IrNkckSFJAeeSLCSaLAKLvrzAXfXmAAAAuiTQIok0QLzx6zkvD0rLyE9nCp7eb5L9WewwXGzkuHMjs+MoJ+XaQHNV0ABUAAAAAAz3BWXLH12utP1ciLrl7+W6+hgT38P7/wA8wOz19PH6gdYKMqGRUMyJk0yGQFF315gR7y8wAHiABfAniQQJogXni1rE+36VlYyW7srfZ/uXNfqj2lJPsxb232W+wHGenLxBffbK+6y6SSdknJqPRbssKgAAAAAGw8DYbydbVzW8MaLm/wC58l/k143X+Hd8ezm0ejSkuzNz8WumwG5AAio5kMiWZFLqBbHvLzAj3l5gAAALosngQRJoMCQbb8n4hADjmRW6cm6qXWE3F/BkZtfHGjPHyHqVC+6taVq/LL2/H/3U1QqAAAAAAbn/AA6q9bPu90IfVmmJNvZLdvkkvE6fwtpdml6Wq79lfZLt2Jfh9iIrMBgowI5kL6ksyJgUXfXmAu+vMAAABVEsGQl8WB6EVLIsvA82o4lefg3Ytvdtjtv7H4P4M5LkUWY19lF0XGyuTjJP2o7Gc040cHxFkdjwjBS8+yijBgAIAADZeBtMWXqEsy2O9WNt2d+jm+ny6nQjWuAIdnRrJfmvf0SNlIoWsuZHJgRzfMjLpMtALvrzAXfXmAAAAFUygAmgyVM8yltzfQ8mXrum4SfpsutyX4K5dqXyQGUnOMIuU3skaFxrotmPkz1KrtTptf3ni4S/Y8/EHE92pWQhiKdFFU1OO/elJdG/L2G86fk06rpdV7hGULoevBrdb9GgOSg2jiHhO7ElLI02Mrcfq6lznX+6NX+BQPRg4OTn5CoxKZWWPrsuS97fgZzQuEcrUOzdm9vGxnz2a2nPyXgjftPwMXTqFRh0xrh47dZeb8QMbw9gXaRg14WTKEm25RnX03fNx5/XxMuaPxtrdq1KnFwrXH7LLtuUX/U/0vqbHoWsVaxhq2O0b48ra/yv3e5kGTkyGUi6bImwKMAAF315gLvrzAAGsahxhTW5QwKXc1/Um+zH5dX+hrmdrmo526uyJRg/wV+qv0A3rO1rT8HdX5Me2vwQ9aXyRrufxjbNOGBQoL89vN/JcjVgVHpy9RzcuW+RlW2e5y5fLoeboAAN3/h9nb0ZGDN84P0kF7n1/Xb5mkGS4czfsGsY9zbUHLsT8nyA6hkX1Y1Fl10uzXXFyk/cjmsdag+Io6lLEoVfpOdfo13d+9/d7zYuPbshadTCrf0E7PvWvbt6q8uvyNFIrtNc42VxnW1KEknFrxR49a1GGl6bdlz2bgvUXtk+iMXwRfkWaBWr16tc3CqW/WC/3y+BgePtRd2bDArl6lC7U0vGb6fJfUDVrLJ22Sstk5WTblKT8WytVtlM+3TZOua6ShJxfzRYCozmJxVqmPsrLIZEfZaufzRmsTjDDt2WXTZTJ9Wl2o/uaSAOpYmfiZkd8bIrs90Zc/kenc5LFuMlKLaa6NGVwuItSxNl6f00F+G31v16kV0WPeXmDX9L4sw8mUYZa+y2b9W94P4+HxAGiAAqAAAAAAAAOjYMq9b4ehG/n6SvsTfskuW/z2ZzqS7EpR3323XmbLwhn+hxs/Gk+Ua5Xw+C2f8Ag1nrzfUiur6JCGPo2FCL2jGiLb+G7ZzDUcj7XqGTkf8ALbKXw35G5PU/RcDwujL7z0P2eO3Xfu/RbmilQAAAAAAAAAAAAAAAAAAAAAXVWzqcpVvZyjKD96a2ZRoACd5Nr09Yrl9yrnYl/wBttjzgAAAAAAAAAAAB/9k=`, // Dummy image

        },
        {
            testimonial: `“We couldn’t be happier with the results. Bhumikar’s team was professional and efficient throughout the process.”`,
            name: `Raj and Priya`,
            image: `data:image/jpeg;base64,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`, // Dummy image

        },
    ];

    const itemsPerSlide = 3;


    // const newsData = [
    //     {
    //         source: 'The Economic Times',
    //         content:
    //             'Bhumikar said it crossed the billion-dollar valuation mark after raising $180 million in a late-stage funding round led by KKR & Co...',
    //     },
    //     {
    //         source: 'Mint',
    //         content:
    //             'Bhumikar has joined the unicorn club after the online home décor startup backed by private equity firm TPG raised $180 mn at a valuation of over $1.2 bn...',
    //     },
    //     {
    //         source: 'Architect and Interiors India',
    //         content:
    //             'The 23,000 sq-ft Bengaluru centre, designed by FITCH Singapore, combines inspiration, information and technology',
    //     },
    //     {
    //         source: 'The Economic Times',
    //         content:
    //             'The company has also opened Experience Centres (ECs) spanning 1500 sq ft each in prime locations in all four cities.',
    //     },
    // ];

    return (
        <div className='flex flex-col'>
            <div className="relative py-10 content">
                {/* Heading and Description */}
                <Heading
                    title="We'll let our clients do the talking"
                    description="Here’s what they have to say"
                    btn="BOOK FREE CONSULTATION"
                />




                <div className='block md:hidden'>
                    <CommonCarousel itemsPerSlide={itemsPerSlide}>
                        {Clients.map((client, index) => (
                            <ClientCard key={index} client={client} />
                        ))}
                    </CommonCarousel>

                </div>

                <div className='hidden md:block'>
                    <CommonSlider showItems={3} gap={16}>
                        {Clients.map((client, index) => (
                            <ClientCard key={index} client={client} />
                        ))}
                    </CommonSlider>

                </div>


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




        </div>
    );
};

export default ClientsTalking;






const ClientCard = ({ client }) => {

    return (
        <div className="w-full p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <img
                        src={client.image}
                        alt={client.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-700 text-sm">{client.testimonial}</p>
                    <p className="text-gray-500 text-xs mt-2 text-center">{client.name}</p>
                </div>
            </div>
        </div>

    );
};




