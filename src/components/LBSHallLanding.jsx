import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Calendar, Trophy, BookOpen, MapPin, Phone, Mail, Menu, X } from 'lucide-react';

const LBSHallLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Events', 'Gallery', 'Alumni', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const exploreHall = () => {
    scrollToSection('about');
  };

  const joinCommunity = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-red-800 to-red-600 rounded-lg flex items-center justify-center text-yellow-300 font-bold text-xl">
                L
              </div>
              <span className="ml-3 text-xl font-bold text-red-800">LBS Hall</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-red-800 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-red-800">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-red-800 hover:text-yellow-600 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-yellow-600/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"brick\" x=\"0\" y=\"0\" width=\"20\" height=\"10\" patternUnits=\"userSpaceOnUse\"><rect width=\"20\" height=\"10\" fill=\"%23dc2626\"/><rect width=\"10\" height=\"5\" fill=\"%23b91c1c\"/><rect x=\"10\" y=\"5\" width=\"10\" height=\"5\" fill=\"%23b91c1c\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23brick)\"/></svg>')"
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-red-800">LBS</span>{' '}
              <span className="text-yellow-600 drop-shadow-lg">HALL</span>
            </h1>
            <p className="text-2xl md:text-3xl text-red-700 mb-4 font-light">
              Lal Bahadur Shastri Hall of Residence
            </p>
            <p className="text-xl text-red-600 mb-8">
              Indian Institute of Technology, Kharagpur
            </p>
            <div className="space-x-6">
              <button onClick={exploreHall} className="bg-gradient-to-r from-red-800 to-red-600 text-yellow-100 px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Our Legacy
              </button>
              <button onClick={joinCommunity} className="border-2 border-yellow-600 text-yellow-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Join Community
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="bg-transparent border-none cursor-pointer">
            <ChevronDown size={32} className="text-red-600" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">About LBS Hall</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Named after the great freedom fighter and former Prime Minister Lal Bahadur Shastri, LBS Hall stands as one of the most prestigious residential halls at IIT Kharagpur. Since its establishment, it has been home to brilliant minds who have gone on to shape the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our hall embodies the spirit of excellence, brotherhood, and innovation that defines the IIT Kharagpur experience. From academic achievements to cultural celebrations, LBS Hall has been a cornerstone of student life on campus.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-red-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-800">500+</div>
                  <div className="text-sm text-gray-600">Residents</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-red-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-800">50+</div>
                  <div className="text-sm text-gray-600">Achievements</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-red-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-800">75+</div>
                  <div className="text-sm text-gray-600">Years Legacy</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-red-800/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Hall of Excellence</h3>
                  <p className="text-yellow-200">Where legends are made</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">Hall Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                description: "State-of-the-art study rooms and academic support systems for scholastic success."
              },
              {
                icon: Users,
                title: "Vibrant Community",
                description: "A diverse and inclusive community fostering lifelong friendships and networks."
              },
              {
                icon: Trophy,
                title: "Sports & Culture",
                description: "Outstanding facilities for sports, cultural activities, and inter-hall competitions."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Annual Hall Day", date: "March 15, 2025", type: "Cultural" },
              { title: "Inter-Hall Sports", date: "April 2-5, 2025", type: "Sports" },
              { title: "Alumni Meet", date: "May 20, 2025", type: "Networking" }
            ].map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-600">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <Calendar className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-2">{event.title}</h3>
                <p className="text-red-600 font-medium">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-800 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-yellow-300 mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-red-100">LBS Hall, IIT Kharagpur, West Bengal 721302</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-yellow-300 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-red-100">+91-3222-282100</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-yellow-300 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-red-100">lbshall@iitkgp.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">Send us a Message</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:border-yellow-300 transition-colors"
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Your Email" 
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:border-yellow-300 transition-colors"
                />
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your Message" 
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:border-yellow-300 transition-colors resize-none"
                ></textarea>
                <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-red-800 font-semibold py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center text-red-800 font-bold text-xl">
                L
              </div>
              <span className="ml-3 text-2xl font-bold">LBS Hall</span>
            </div>
            <p className="text-red-200 mb-4">
              Lal Bahadur Shastri Hall of Residence, Indian Institute of Technology Kharagpur
            </p>
            <p className="text-red-300 text-sm">
              ©️ 2025 LBS Hall, IIT Kharagpur. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default LBSHallLanding;