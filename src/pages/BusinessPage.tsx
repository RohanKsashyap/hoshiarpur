import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Star, Mail, Globe, Share2, Heart } from 'lucide-react';

// Sample business data
const businessData = {
  id: 1,
  name: 'Royal Restaurant',
  category: 'Restaurants',
  city: 'Hoshiarpur',
  address: '123 Main Street, Hoshiarpur, Punjab',
  phone: '+91 98765 43210',
  email: 'info@royalrestaurant.com',
  website: 'www.royalrestaurant.com',
  rating: 4.8,
  reviews: 124,
  description: 'Royal Restaurant is a premier dining establishment in Hoshiarpur, offering authentic Punjabi cuisine in an elegant setting. Our chefs use the finest ingredients to create traditional dishes with a modern twist.',
  longDescription: 'Founded in 2005, Royal Restaurant has become a landmark in Hoshiarpur for fine dining. We specialize in authentic Punjabi cuisine prepared by our expert chefs who have years of experience in the culinary arts. Our restaurant offers a warm and elegant ambiance, perfect for family dinners, celebrations, and business meetings. We pride ourselves on providing exceptional service and a memorable dining experience for all our guests.',
  workingHours: {
    monday: '11:00 AM - 10:00 PM',
    tuesday: '11:00 AM - 10:00 PM',
    wednesday: '11:00 AM - 10:00 PM',
    thursday: '11:00 AM - 10:00 PM',
    friday: '11:00 AM - 11:00 PM',
    saturday: '11:00 AM - 11:00 PM',
    sunday: '12:00 PM - 10:00 PM',
  },
  specialOffers: [
    'Happy Hour: 20% off on all beverages from 4 PM to 7 PM',
    'Family Special: Free dessert with family meals (4+ people)',
    'Weekend Buffet: All-you-can-eat lunch buffet on weekends',
  ],
  images: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  ],
  reviews: [
    {
      id: 1,
      user: 'Amit Singh',
      rating: 5,
      date: 'May 15, 2025',
      comment: 'Excellent food and service! The butter chicken was amazing and the staff was very attentive.',
    },
    {
      id: 2,
      user: 'Priya Sharma',
      rating: 4,
      date: 'April 28, 2025',
      comment: 'Great ambiance and tasty food. Slightly on the expensive side but worth it for special occasions.',
    },
    {
      id: 3,
      user: 'Rajesh Kumar',
      rating: 5,
      date: 'April 10, 2025',
      comment: 'Best Punjabi food in Hoshiarpur! The dal makhani and naan are must-try items.',
    },
  ],
};

// Sample related businesses
const relatedBusinesses = [
  {
    id: 2,
    name: 'Spice Garden',
    category: 'Restaurants',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Cafe Corner',
    category: 'Cafes',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Sweet Delights',
    category: 'Bakeries',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
];

const BusinessPage = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // In a real application, you would fetch the business data based on the businessId
  const business = businessData;

  return (
    <div className="bg-gray-50">
      {/* Business Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full mr-2">
                  {business.category}
                </span>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 mr-1" />
                  <span className="font-semibold">{business.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({business.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">{business.name}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span>{business.address}</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <Phone size={16} className="mr-1" />
                <span>Call Now</span>
              </button>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md transition-colors">
                <Share2 size={16} className="mr-1" />
                <span>Share</span>
              </button>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md transition-colors">
                <Heart size={16} className="mr-1" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Images */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <img 
                src={business.images[activeImageIndex]} 
                alt={business.name} 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
              {business.images.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer overflow-hidden rounded-lg ${index === activeImageIndex ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${business.name} ${index + 1}`} 
                    className="w-full h-28 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b">
                <div className="flex overflow-x-auto">
                  <button 
                    className={`px-6 py-3 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button 
                    className={`px-6 py-3 font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    Reviews
                  </button>
                  <button 
                    className={`px-6 py-3 font-medium ${activeTab === 'photos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('photos')}
                  >
                    Photos
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">About {business.name}</h2>
                    <p className="text-gray-700 mb-6">{business.longDescription}</p>

                    <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <MapPin size={20} className="text-gray-500 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-gray-600">{business.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone size={20} className="text-gray-500 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">{business.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail size={20} className="text-gray-500 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">{business.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Globe size={20} className="text-gray-500 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Website</p>
                          <p className="text-gray-600">{business.website}</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Working Hours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {Object.entries(business.workingHours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between py-1 border-b last:border-0">
                          <span className="capitalize">{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Special Offers</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
                      <ul className="space-y-2">
                        {business.specialOffers.map((offer, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-yellow-500 mr-2">•</span>
                            <span>{offer}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold">Customer Reviews</h2>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                        Write a Review
                      </button>
                    </div>

                    <div className="space-y-6">
                      {business.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-0">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">{review.user}</h3>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < review.rating ? "text-yellow-500" : "text-gray-300"} 
                                fill={i < review.rating ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'photos' && (
                  <div>
                    <h2 className="text-xl font-bold mb-6">Photos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {business.images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                          <img 
                            src={image} 
                            alt={`${business.name} ${index + 1}`} 
                            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Related Businesses */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Similar Businesses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedBusinesses.map((relBusiness) => (
                  <Link key={relBusiness.id} to={`/business/${relBusiness.id}`} className="group">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-36 overflow-hidden">
                        <img 
                          src={relBusiness.image} 
                          alt={relBusiness.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold group-hover:text-blue-600 transition-colors">{relBusiness.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                            {relBusiness.category}
                          </span>
                          <div className="flex items-center">
                            <Star size={14} className="text-yellow-500 mr-1" />
                            <span className="text-sm">{relBusiness.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Business Ad */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-bold text-xl mb-3">Special Promotion</h3>
              <p className="mb-4">Get 20% off on your first order with code: WELCOME20</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-full py-2 rounded-md transition-colors">
                Claim Offer
              </button>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <Clock size={20} className="text-blue-600 mr-2" />
                <h3 className="font-bold text-lg">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {Object.entries(business.workingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between py-1 border-b last:border-0">
                    <span className="capitalize">{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">Contact {business.name}</h3>
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
                    placeholder="What would you like to know?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
                >
                  Send Message
                </button>
                <a 
                  href={`https://wa.me/919876543210?text=Hi%20${business.name},%20I'm%20interested%20in%20your%20services.`} 
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

export default BusinessPage;