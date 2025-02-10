/* eslint-disable react/prop-types */
import Button from '../Common/Button';
import CommonCarousel from '../Common/CommonCarousel';
import Heading from '../Common/Heading';

const KitchenCarousel = () => {
    const kitchens = [
        {
            title: 'Sleek L-shaped kitchen',
            description: 'Featuring adjoining countertops with corner spaces.',
            imageUrl: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2024/09/2149178336.jpg',
        },
        {
            title: 'Premium U-shaped kitchen',
            description: 'Featuring three connected walls of cabinets with an open entrance.',
            imageUrl: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2024/09/2149178336.jpg',
        },
        {
            title: 'Elegant island kitchen',
            description: 'Featuring an independent middle counter surrounded by cabinet walls.',
            imageUrl: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2024/09/2149178336.jpg',
        },
        {
            title: 'Modern Kitchen',
            description: 'A contemporary kitchen design with clean lines.',
            imageUrl: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2024/09/2149178336.jpg',
        },
        {
            title: 'Rustic Kitchen',
            description: 'A warm and inviting kitchen with natural materials.',
            imageUrl: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2024/09/2149178336.jpg',
        },
        {
            title: 'Minimalist Kitchen',
            description: 'A simple and functional kitchen design.',
            imageUrl: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2024/09/2149178336.jpg',
        },
        {
            title: 'Another Sleek Kitchen',
            description: 'More modern design elements.',
            imageUrl: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2024/09/2149178336.jpg',
        },
    ];

    const itemsPerSlide = 3;

    return (
        <div className="relative py-10 content">
  
            <Heading
                title="Kitchens for every budget"
                description="Quality modules, superior finishes, trendy designs for affordable prices."
                btn="GET A FREE QUOTE"
            />

            {/* Carousel */}
            <CommonCarousel itemsPerSlide={itemsPerSlide}>
                {kitchens.map((kitchen, index) => (
                    <KitchenCard key={index} kitchen={kitchen} />
                ))}
            </CommonCarousel>
        </div>
    );
};

export default KitchenCarousel;



const KitchenCard = ({ kitchen }) => {
    return (
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
            <img src={kitchen.imageUrl} alt={kitchen.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{kitchen.title}</h3>
                <div className='flex gap-2 flex-col md:flex-row'>
                    <p className="text-gray-600 text-sm mb-4">{kitchen.description}</p>
                    <button className="md:h-[50px] md:w-[300px] rounded-full p-2 text-sm text-red-500 border border-red-500 hover:bg-red-50 hover:border-red-50 hover:text-red-500">
                        GET FREE QUOTE
                    </button>
                </div>
            </div>


        </div>
    );
};



