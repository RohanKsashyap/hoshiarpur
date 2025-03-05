import React from 'react';
import { Check, Award, Globe, TrendingUp, BarChart, Star } from 'lucide-react';

const AdvertisingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Advertise With Us</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Boost your business visibility and reach thousands of potential customers across Hoshiarpur district
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-md text-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Why Advertise With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Advertise With Hoshiarpur.com?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your target audience and grow your business with our effective advertising solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex mb-4">
                <Globe size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Local Reach</h3>
              <p className="text-gray-600">
                Target customers in specific cities or across the entire Hoshiarpur district, reaching the audience that matters most to your business.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex mb-4">
                <TrendingUp size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Increased Visibility</h3>
              <p className="text-gray-600">
                Stand out from competitors with premium placements, featured listings, and targeted advertisements that capture attention.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex mb-4">
                <BarChart size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Measurable Results</h3>
              <p className="text-gray-600">
                Track the performance of your ads with detailed analytics, helping you understand your ROI and optimize your advertising strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advertising Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the advertising solution that best fits your business needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* City-Level Ads */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h3 className="font-bold text-xl">City-Level Ads</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">₹1,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Visibility in one specific city</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Banner ad on city page</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Featured in city sidebar</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic performance analytics</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors">
                  Select Plan
                </button>
              </div>
            </div>

            {/* Premium Listings */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h3 className="font-bold text-xl">Premium Listings</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">₹2,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Top position in search results</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Highlighted business profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Featured in "Top Businesses" section</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detailed performance analytics</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors">
                  Select Plan
                </button>
              </div>
            </div>

            {/* Super Ad Panel */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform scale-105 z-10 border-2 border-yellow-500">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 text-center relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 transform translate-x-2 -translate-y-1">
                  POPULAR
                </div>
                <h3 className="font-bold text-xl">Super Ad Panel</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">₹4,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>District-wide visibility on homepage</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium banner in Super Ad Panel</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Featured across all city pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Social media promotion</span>
                  </li>
                </ul>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition-colors">
                  Select Plan
                </button>
              </div>
            </div>

            {/* Exclusive Business Profile */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h3 className="font-bold text-xl">Exclusive Profile</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">₹3,499</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom branded business page</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Photo gallery (up to 20 images)</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Video integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Special offers section</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors">
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Analytics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-6">Track Your Ad Performance</h2>
              <p className="text-gray-700 mb-6 text-lg">
                All our advertising plans include access to our performance analytics dashboard, allowing you to track the effectiveness of your ads in real-time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Impression Tracking</h3>
                    <p className="text-gray-600">Monitor how many people view your ads</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Click-Through Rates</h3>
                    <p className="text-gray-600">See how many visitors click on your ads</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Conversion Tracking</h3>
                    <p className="text-gray-600">Measure inquiries and contact form submissions</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Analytics Dashboard" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Advertisers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have grown with our advertising solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Since advertising on Hoshiarpur.com, our restaurant has seen a 30% increase in new customers. The Super Ad Panel gave us district-wide visibility that we couldn't achieve elsewhere."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Rajinder Singh</h3>
                  <p className="text-gray-600 text-sm">Owner, Royal Restaurant</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The city-level advertising option was perfect for our local retail store. We've been able to target customers in our specific area, resulting in higher foot traffic and sales."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Priya Sharma</h3>
                  <p className="text-gray-600 text-sm">Manager, Fashion Hub</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The exclusive business profile has transformed our online presence. The detailed analytics help us understand our customers better and optimize our marketing strategy."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Amit Verma</h3>
                  <p className="text-gray-600 text-sm">Director, City Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our advertising options
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">How long does it take for my ad to go live?</h3>
                <p className="text-gray-700">
                  Once your ad materials are approved, your advertisement will go live within 24-48 hours. Our team will work with you to ensure your ad meets our guidelines and is optimized for performance.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Can I change my ad during the campaign?</h3>
                <p className="text-gray-700">
                  Yes, you can update your ad content once per month at no additional cost. Additional changes may incur a small fee. Contact our support team to request changes to your active campaign.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">What ad formats do you support?</h3>
                <p className="text-gray-700">
                  We support various ad formats including banner ads, featured listings, and custom business profiles. Our team can help you choose the right format based on your business goals and target audience.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Do you offer discounts for long-term advertising?</h3>
                <p className="text-gray-700">
                  Yes, we offer discounts for quarterly (10% off) and annual (20% off) advertising commitments. Contact our sales team to discuss long-term advertising options and custom packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses advertising on Hoshiarpur.com and reach your target audience today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-md text-lg transition-colors">
              Get Started Now
            </button>
            <button className="bg-transparent hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-md text-lg border-2 border-white transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvertisingPage;