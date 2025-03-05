
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 lg:pr-8 mb-8 lg:mb-0">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Subject</label>
                      <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select a subject</option>
                        <option value="business-listing">Business Listing</option>
                        <option value="advertising">Advertising</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={6}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                      <p className="text-gray-600">123 Main Street, Hoshiarpur, Punjab, 146001, India</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                     <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                      <p className="text-gray-600">info@hoshiarpur.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Clock size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <MessageSquare size={24} className="mr-2" />
                  <h3 className="font-semibold text-lg">Quick Connect</h3>
                </div>
                <p className="mb-4">
                  Need immediate assistance? Connect with us through WhatsApp for faster response.
                </p>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
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
              Find answers to common questions about Hoshiarpur.com
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">How can I list my business on Hoshiarpur.com?</h3>
                <p className="text-gray-700">
                  You can list your business by clicking on the "List Your Business" button on our website or by contacting our team through the contact form. We'll guide you through the process and help you create an attractive business profile.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">What are the advertising options available?</h3>
                <p className="text-gray-700">
                  We offer various advertising options including City-Level Ads, Super Ad Panel (district-wide visibility), Premium Listings, and Exclusive Business Profiles. Visit our Advertising page for detailed information on pricing and features.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">How can I update my business information?</h3>
                <p className="text-gray-700">
                  If you need to update your business information, please contact our support team with your business details and the changes you'd like to make. We'll update your profile promptly.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Is there a fee for basic business listings?</h3>
                <p className="text-gray-700">
                  Basic business listings are free of charge. Premium features and advertising options are available at competitive rates to help increase your visibility and reach.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">How do I report incorrect information about a business?</h3>
                <p className="text-gray-700">
                  If you notice incorrect information about a business, please use our contact form to report it. Include the business name, location, and the information that needs correction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-md h-96 flex items-center justify-center">
            <p className="text-gray-500 text-center">Interactive map showing our location will be displayed here</p>
          </div>
        </div>
      </section>
    </div>
  )
  ;
};

export default ContactPage;