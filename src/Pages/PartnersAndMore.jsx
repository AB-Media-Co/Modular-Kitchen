import React from 'react';

const PartnersAndMore = () => {
    const partners = [
        {
          name: 'Century Ply',
          logo: 'https://images.livspace-cdn.com/w:158/h:76/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/century-ply-desktop-1646230641-wVXUm.jpg'
        },
        {
          name: 'Philips',
          logo: 'https://images.livspace-cdn.com/w:158/h:76/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/century-ply-desktop-1646230641-wVXUm.jpg'
        },
        {
          name: 'Bosch',
          logo: 'https://images.livspace-cdn.com/w:158/h:76/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/century-ply-desktop-1646230641-wVXUm.jpg'
        },
        {
          name: 'Asian Paints',
          logo: 'https://images.livspace-cdn.com/w:158/h:76/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/century-ply-desktop-1646230641-wVXUm.jpg'
        },
        {
          name: 'Siemens',
          logo: 'https://images.livspace-cdn.com/w:158/h:76/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/century-ply-desktop-1646230641-wVXUm.jpg'
        },
        {
          name: 'Hettic',
          logo: 'https://images.livspace-cdn.com/w:158/h:76/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/century-ply-desktop-1646230641-wVXUm.jpg'
        }
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
              <div className="flex animate-marquee">
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