import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, MapPin, Briefcase } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Hoshiarpur.com</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting local businesses with customers across Hoshiarpur district
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Our Mission" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg">
                At Hoshiarpur.com, our mission is to empower local businesses across Hoshiarpur district by providing them with a digital platform to showcase their products and services to a wider audience.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                We aim to bridge the gap between businesses and customers, making it easier for people to discover and connect with the best local businesses in their city.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Connect People</h3>
                    <p className="text-gray-600">Bringing businesses and customers together</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <TrendingUp size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Grow Businesses</h3>
                    <p className="text-gray-600">Helping local enterprises thrive and expand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Hoshiarpur.com became the leading business directory in the region
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="bg-blue-600 h-6 w-6 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="font-bold text-xl mb-2">2023</h3>
                      <p className="text-gray-700">
                        Hoshiarpur.com was founded with a vision to create a comprehensive business directory for Hoshiarpur district.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                          alt="2023" 
                          className="rounded-lg mb-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="bg-blue-600 h-6 w-6 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                          alt="2024" 
                          className="rounded-lg mb-3"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12 mb-4 md:mb-0 order-1 md:order-2">
                      <h3 className="font-bold text-xl mb-2">2024</h3>
                      <p className="text-gray-700">
                        Expanded to cover 10 cities across Hoshiarpur district, with over 500 businesses listed on the platform.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="bg-blue-600 h-6 w-6 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="font-bold text-xl mb-2">2025</h3>
                      <p className="text-gray-700">
                        Launched premium advertising options and the Super Ad Panel, helping businesses increase their visibility and reach.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                          alt="2025" 
                          className="rounded-lg mb-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoshiarpur.com covers 10 major cities across Hoshiarpur district
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['Hoshiarpur', 'Garhshankar', 'Dasuya', 'Mukerian', 'Tanda', 'Hariana', 'Mahilpur', 'Chabbewal', 'Hajipur', 'Talwara'].map((city, index) => (
              <Link key={index} to={`/city/${city.toLowerCase()}`} className="group">
                <div className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors border hover:border-blue-200">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-3">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold group-hover:text-blue-600 transition-colors">{city}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Business Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cover a wide range of business sectors to meet all your needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Restaurants', icon: '🍽️' },
              { name: 'Hotels', icon: '🏨' },
              { name: 'Retail Shops', icon: '🛍️' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Education', icon: '🎓' },
              { name: 'Real Estate', icon: '🏢' },
              { name: 'Automotive', icon: '🚗' },
              { name: 'Beauty & Wellness', icon: '💆' },
            ].map((sector, index) => (
              <Link key={index} to={`/sectors?category=${sector.name.toLowerCase()}`} className="group">
                <div className="bg-white hover:bg-blue-50 rounded-lg p-6 text-center transition-colors shadow-sm hover:shadow-md">
                  <div className="text-4xl mb-3">{sector.icon}</div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{sector.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind Hoshiarpur.com
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajiv Sharma',
                position: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                bio: 'With over 15 years of experience in digital marketing, Rajiv founded Hoshiarpur.com to support local businesses in his hometown.',
              },
              {
                name: 'Priya Patel',
                position: 'Marketing Director',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                bio: 'Priya leads our marketing efforts, helping businesses maximize their visibility and reach on our platform.',
              },
              {
                name: 'Amit Singh',
                position: 'Business Development',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                bio: 'Amit works directly with businesses to understand their needs and help them grow through our platform.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Hoshiarpur.com Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a business owner looking to expand your reach or a customer searching for the best local services, Hoshiarpur.com is here for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/advertising" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-md text-lg transition-colors"
            >
              List Your Business
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-white hover:bg-gray-100 text-blue-800 font-bold px-8 py-3 rounded-md text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;