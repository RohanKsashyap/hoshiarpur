import { Link } from 'react-router-dom';
import { MapPin, Star, TrendingUp } from 'lucide-react';
import SuperAdPanel from '../components/SuperAdPanel';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

const cities = [
  { id: 1, name: 'Hoshiarpur', businesses: 54, image: 'https://images.unsplash.com/photo-1588416499018-d8c621e1d2c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'Garhshankar', businesses: 54, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Dasuya', businesses: 54, image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 4, name: 'Mukerian', businesses: 54, image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 5, name: 'Tanda', businesses: 54, image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 6, name: 'Hariana', businesses: 54, image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 7, name: 'Mahilpur', businesses: 54, image: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 8, name: 'Chabbewal', businesses: 54, image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 9, name: 'Hajipur', businesses: 54, image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 10, name: 'Talwara', businesses: 54, image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const businessSectors = [
  { id: 1, name: 'Restaurants', icon: '🍽️' },
  { id: 2, name: 'Hotels', icon: '🏨' },
  { id: 3, name: 'Retail Shops', icon: '🛍️' },
  { id: 4, name: 'Healthcare', icon: '🏥' },
  { id: 5, name: 'Education', icon: '🎓' },
  { id: 6, name: 'Real Estate', icon: '🏢' },
  { id: 7, name: 'Automotive', icon: '🚗' },
  { id: 8, name: 'Beauty & Wellness', icon: '💆' },
];




const city = [
  { id: 1, name: 'Hoshiarpur', lat: 31.532, lng: 75.911 },
  { id: 2, name: 'Garhshankar', lat: 31.214, lng: 76.146 },
  { id: 3, name: 'Dasuya', lat: 31.816, lng: 75.653 },
  { id: 4, name: 'Mukerian', lat: 31.954, lng: 75.615 },
  { id: 5, name: 'Tanda', lat: 31.747, lng: 75.526 },
  { id: 6, name: 'Hariana', lat: 31.641, lng: 75.838 },
  { id: 7, name: 'Mahilpur', lat: 31.427, lng: 76.126 },
  { id: 8, name: 'Chabbewal', lat: 31.586, lng: 75.914 },
  { id: 9, name: 'Hajipur', lat: 32.038, lng: 75.721 },
  { id: 10, name: 'Talwara', lat: 31.940, lng: 75.868 },
];


const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});























const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Hoshiarpur District</h1>
          <p className="text-xl mb-8">Your comprehensive guide to local businesses across 10 cities</p>
          <div className="max-w-md mx-auto">
            <div className="flex bg-white rounded-lg overflow-hidden shadow-lg">
              <input 
                type="text" 
                placeholder="Search for businesses, services..." 
                className="flex-grow px-4 py-3 text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-white font-semibold transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Super Ad Panel */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Featured Promotions</h2>
          <SuperAdPanel />
        </div>
      </section>

      {/* Interactive Map Section (Placeholder) */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore Hoshiarpur District</h2>
          <div className="bg-white p-4 rounded-lg shadow-md h-96 flex items-center justify-center">

          <MapContainer center={[31.532, 75.911]} zoom={10} className="h-96 w-full rounded-lg shadow-md">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {city.map((city) => (
        <Marker key={city.id} position={[city.lat, city.lng]} icon={markerIcon}>
          <Popup>
            <strong>{city.name}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer> 
              
              
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cities.map((city) => (
              <Link 
                key={city.id} 
                to={`/city/${city.name.toLowerCase()}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={city.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{city.name}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      <span>{city.businesses} Businesses</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Business Sectors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {businessSectors.map((sector) => (
              <Link 
                key={sector.id} 
                to={`/sectors?category=${sector.name.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-blue-50 transition-colors"
              >
                <div className="text-3xl mb-2">{sector.icon}</div>
                <h3 className="font-semibold">{sector.name}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/sectors" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
            >
              View All Sectors
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Businesses</h2>
            <div className="flex items-center text-blue-600">
              <TrendingUp size={20} className="mr-1" />
              <span className="font-semibold">Top Rated</span>
            </div>
          </div>
          <FeaturedBusinesses />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Grow Your Business with Hoshiarpur.com</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of local businesses reaching thousands of customers across Hoshiarpur district
          </p>
          <Link 
            to="/advertising" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-md text-lg transition-colors"
          >
            Advertise With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;