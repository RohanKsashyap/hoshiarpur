import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapPin, Star, Filter } from 'lucide-react';

// Sample business sectors data
const sectors = [
  { id: 1, name: 'Restaurants', icon: '🍽️', count: 87 },
  { id: 2, name: 'Hotels', icon: '🏨', count: 45 },
  { id: 3, name: 'Retail Shops', icon: '🛍️', count: 120 },
  { id: 4, name: 'Healthcare', icon: '🏥', count: 56 },
  { id: 5, name: 'Education', icon: '🎓', count: 78 },
  { id: 6, name: 'Real Estate', icon: '🏢', count: 34 },
  { id: 7, name: 'Automotive', icon: '🚗', count: 42 },
  { id: 8, name: 'Beauty & Wellness', icon: '💆', count: 63 },
  { id: 9, name: 'Financial Services', icon: '💰', count: 29 },
  { id: 10, name: 'Entertainment', icon: '🎬', count: 38 },
  { id: 11, name: 'Sports & Fitness', icon: '🏋️', count: 27 },
  { id: 12, name: 'Home Services', icon: '🔧', count: 51 },
  { id: 13, name: 'Professional Services', icon: '👔', count: 44 },
  { id: 14, name: 'Travel & Tourism', icon: '✈️', count: 31 },
  { id: 15, name: 'Electronics', icon: '📱', count: 39 },
  { id: 16, name: 'Agriculture', icon: '🌾', count: 22 },
];

// Sample businesses data
const businesses = [
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
    category: 'Professional Services',
    city: 'Hoshiarpur',
    rating: 4.7,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'IT services and computer repairs for businesses and individuals',
  },
  {
    id: 5,
    name: 'Green Valley School',
    category: 'Education',
    city: 'Mukerian',
    rating: 4.8,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Quality education with modern facilities and experienced faculty',
  },
  {
    id: 6,
    name: 'City Hospital',
    category: 'Healthcare',
    city: 'Hoshiarpur',
    rating: 4.9,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Advanced healthcare services with specialized departments',
  },
];

const BusinessSectorsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '');
  const [selectedCity, setSelectedCity] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter businesses based on selected category
  const filteredBusinesses = selectedCategory 
    ? businesses.filter(business => business.category.toLowerCase() === selectedCategory.toLowerCase())
    : businesses;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Sectors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore businesses across various sectors in Hoshiarpur district
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - Sectors List */}
          <div className="w-full lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Business Sectors</h2>
              <ul className="space-y-2">
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === '' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedCategory('')}
                  >
                    All Sectors
                  </button>
                </li>
                {sectors.map((sector) => (
                  <li key={sector.id}>
                    <button 
                      className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === sector.name.toLowerCase() ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
                      onClick={() => setSelectedCategory(sector.name.toLowerCase())}
                    >
                      <span className="mr-2">{sector.icon}</span>
                      {sector.name} <span className="text-gray-500 text-sm">({sector.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Category Header */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedCategory ? sectors.find(s => s.name.toLowerCase() === selectedCategory.toLowerCase())?.name || selectedCategory : 'All Sectors'}
                  </h2>
                  <p className="text-gray-600">
                    {filteredBusinesses.length} businesses found
                  </p>
                </div>
                <button 
                  className="flex items-center mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} className="mr-2" />
                  <span>Filters</span>
                </button>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">City</label>
                      <select 
                        className="w-full border rounded-md px-3 py-2"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option value="">All Cities</option>
                        <option value="hoshiarpur">Hoshiarpur</option>
                        <option value="garhshankar">Garhshankar</option>
                        <option value="dasuya">Dasuya</option>
                        <option value="mukerian">Mukerian</option>
                        <option value="tanda">Tanda</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Rating</label>
                      <select className="w-full border rounded-md px-3 py-2">
                        <option value="">All Ratings</option>
                        <option value="4">4+ Stars</option>
                        <option value="3">3+ Stars</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Sort By</label>
                      <select className="w-full border rounded-md px-3 py-2">
                        <option value="rating">Rating (High to Low)</option>
                        <option value="reviews">Most Reviewed</option>
                        <option value="name">Name (A-Z)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                      Apply Filters
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Business Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.map((business) => (
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

            {/* Pagination */}
            {filteredBusinesses.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">Previous</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">2</button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">3</button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">Next</button>
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredBusinesses.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No businesses found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any businesses matching your criteria.
                </p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedCity('');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectorsPage;