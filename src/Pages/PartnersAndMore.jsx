import React from 'react';

const PartnersAndMore = () => {
    const partners = [
        {
          name: 'Century Ply',
          logo: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2021/06/2.png'
        },
        {
          name: 'Philips',
          logo: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2021/06/1.png'
        },
        {
          name: 'Bosch',
          logo: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2021/06/3.png'
        },
        {
          name: 'Asian Paints',
          logo: 'https://passiveprime.com/Bhumikar/wp-content/uploads/2021/06/4.png'
        },
      
      ];
    
      const duplicatedPartners = [...partners, ...partners];
    
      return (
        <div className="w-full bg-gray-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-start mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our trusted partners
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Winning collaborations that produce winning designs.
              </p>
            </div>
    
            <div className="max-w-7xl mx-auto overflow-hidden">
              <div className="flex animate-marquee items-center">
                {duplicatedPartners.map((partner, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-32 md:w-40 mx-8"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 8s linear infinite;
            }
          `}</style>
        </div>
  );
};

export default PartnersAndMore;