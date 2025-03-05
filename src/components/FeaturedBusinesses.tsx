import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Phone } from 'lucide-react';

// Sample featured businesses data
const featuredBusinesses = [
  {
    id: 1,
    name: 'Royal Restaurant',
    category: 'Restaurants',
    city: 'Hoshiarpur',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Fine dining restaurant with authentic Punjabi cuisine',
  },
  {
    id: 2,
    name: 'City Mart',
    category: 'Retail Shops',
    city: 'Garhshankar',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'One-stop shop for all your daily needs and groceries',
  },
  {
    id: 3,
    name: 'Wellness Spa',
    category: 'Beauty & Wellness',
    city: 'Dasuya',
    rating: 4.9,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Luxury spa treatments and wellness services',
  },
  {
    id: 4,
    name: 'Tech Solutions',
    category: 'Services',
    city: 'Hoshiarpur',
    rating: 4.7,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'IT services and computer repairs for businesses and individuals',
  },
];

const FeaturedBusinesses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredBusinesses.map((business) => (
        <Link key={business.id} to={`/business/${business.id}`} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src={business.image} 
                alt={business.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {business.category}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">{business.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{business.description}</p>
              <div className="flex items-center mb-2">
                <MapPin size={16} className="text-gray-500 mr-1" />
                <span className="text-gray-500 text-sm">{business.city}</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 mr-1" />
                  <span className="font-semibold">{business.rating}</span>
                </div>
                <span className="text-gray-500 text-sm ml-1">({business.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedBusinesses;