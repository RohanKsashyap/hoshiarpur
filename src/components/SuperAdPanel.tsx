import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

// Sample super ads data
const superAds = [
  {
    id: 1,
    businessName: 'Grand Hotel Hoshiarpur',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Luxury accommodations with special weekend offers',
    link: '/business/grand-hotel',
  },
  {
    id: 2,
    businessName: 'Sharma Electronics',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Exclusive deals on latest gadgets and appliances',
    link: '/business/sharma-electronics',
  },
  {
    id: 3,
    businessName: 'City Hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Advanced healthcare services with special health packages',
    link: '/business/city-hospital',
  },
];

const SuperAdPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {superAds.map((ad) => (
        <Link key={ad.id} to={ad.link} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full transition-all hover:shadow-xl">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={ad.image} 
                alt={ad.businessName} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
                Premium Ad
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{ad.businessName}</h3>
              <p className="text-gray-600 mb-3">{ad.description}</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Learn More</span>
                <ExternalLink size={16} className="ml-1" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SuperAdPanel;