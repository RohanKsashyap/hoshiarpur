import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Star, TrendingUp, ExternalLink } from 'lucide-react';

// Sample business data for the city
const businesses = [
  {
    id: 1,
    name: 'Royal Restaurant',
    category: 'Restaurants',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Fine dining restaurant with authentic Punjabi cuisine',
  },
  {
    id: 2,
    name: 'City Mart',
    category: 'Retail Shops',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'One-stop shop for all your daily needs and groceries',
  },
  {
    id: 3,
    name: 'Wellness Spa',
    category: 'Beauty & Wellness',
    rating: 4.9,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Luxury spa treatments and wellness services',
  },
  {
    id: 4,
    name: 'Tech Solutions',
    category: 'Services',
    rating: 4.7,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'IT services and computer repairs for businesses and individuals',
  },
  {
    id: 5,
    name: 'Fashion Hub',
    category: 'Retail Shops',
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Latest fashion trends for men, women and children',
  },
  {
    id: 6,
    name: 'Green Valley School',
    category: 'Education',
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Quality education with modern facilities and experienced faculty',
  },
];

// Sample trending offers
const trendingOffers = [
  {
    id: 1,
    businessName: 'Royal Restaurant',
    offer: '20% off on family dinner',
    validUntil: 'June 30, 2025',
  },
  {
    id: 2,
    businessName: 'Fashion Hub',
    offer: 'Buy 2 Get 1 Free on all summer wear',
    validUntil: 'May 15, 2025',
  },
  {
    id: 3,
    businessName: 'Wellness Spa',
    offer: 'Complimentary facial with any massage package',
    validUntil: 'July 10, 2025',
  },
];

// Sample city ads
const cityAds = [
  {
    id: 1,
    businessName: 'City Hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Advanced healthcare services with special health packages',
    link: '/business/city-hospital',
  },
  {
    id: 2,
    businessName: 'Sharma Electronics',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Exclusive deals on latest gadgets and appliances',
    link: '/business/sharma-electronics',
  },
];

const CityPage = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const formattedCityName = cityName ? cityName.charAt(0).toUpperCase() + cityName.slice(1) : '';

  return (
    <div className="bg-gray-50">
      {/* City Banner */}
      <section 
        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.7), rgba(0, 0, 100, 0.7)), url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{formattedCityName}</h1>
          <p className="text-xl mb-4">Discover the best businesses in {formattedCityName}</p>
          <div className="flex items-center">
            <MapPin size={20} className="mr-2" />
            <span>54 Businesses across 16 sectors</span>
          </div>
        </div>
      </section>

      {/* Local Ad Panel */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-4 rounded-lg">
            <div className="mb-4 md:mb-0 md:mr-4">
              <h3 className="font-bold text-lg">Grand Hotel {formattedCityName}</h3>
              <p className="text-gray-600">Luxury accommodations with special weekend offers</p>
            </div>
            <Link 
              to="/business/grand-hotel" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition-colors"
            >
              View Offers
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Main Content - Business Listings */}
          <div className="w-full lg:w-3/4 lg:pr-8">
            {/* Filter Options */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center space-x-4 mb-2 md:mb-0">
                  <span className="font-semibold">Filter By:</span>
                  <select className="border rounded-md px-3 py-1">
                    <option>All Categories</option>
                    <option>Restaurants</option>
                    <option>Retail Shops</option>
                    <option>Services</option>
                    <option>Education</option>
                  </select>
                  <select className="border rounded-md px-3 py-1">
                    <option>Rating: All</option>
                    <option>4+ Stars</option>
                    <option>3+ Stars</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md transition-colors">
                    Grid
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transition-colors">
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Business Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses.map((business) => (
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
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-1">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">Previous</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">2</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">3</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">Next</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
            {/* Trending Offers */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center mb-4">
                <TrendingUp size={20} className="text-blue-600 mr-2" />
                <h3 className="font-bold text-lg">Trending Offers</h3>
              </div>
              <div className="space-y-4">
                {trendingOffers.map((offer) => (
                  <div key={offer.id} className="border-b pb-3 last:border-0">
                    <h4 className="font-semibold">{offer.businessName}</h4>
                    <p className="text-green-600 font-medium">{offer.offer}</p>
                    <p className="text-gray-500 text-sm">Valid until: {offer.validUntil}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured City Ads */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h3 className="font-bold text-lg mb-4">Featured Ads</h3>
              <div className="space-y-4">
                {cityAds.map((ad) => (
                  <Link key={ad.id} to={ad.link} className="block group">
                    <div className="border rounded-lg overflow-hidden">
                      <img 
                        src={ad.image} 
                        alt={ad.businessName} 
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-3">
                        <h4 className="font-semibold group-hover:text-blue-600 transition-colors">{ad.businessName}</h4>
                        <p className="text-gray-600 text-sm">{ad.description}</p>
                        <div className="flex items-center text-blue-600 text-sm mt-2">
                          <span>View Details</span>
                          <ExternalLink size={14} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Inquiry */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-lg mb-4">Quick Inquiry</h3>
              <form>
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Your Message</label>
                  <textarea 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows={3}
                    placeholder="What are you looking for?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition-colors"
                >
                  Send Inquiry
                </button>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contact via WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;