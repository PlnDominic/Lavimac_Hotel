import React, { useRef, useEffect, useState } from "react";
import './App.css';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Wifi, Coffee, Utensils } from "lucide-react";
import heroImage from "./assets/hero.jpg";
import penthouse1 from "./assets/The_Penthouse_1.jpg";
import penthouse2 from "./assets/The_Penthouse_2.jpg";
import standardDeluxe1 from "./assets/standard deluxe 1.jpg";
import standardDeluxe2 from "./assets/standard deluxe 2.jpg";
import standardSingle1 from "./assets/standard single 1.jpg";
import standardSingle2 from "./assets/standard single 2.jpg";
import image2 from "./assets/2.jpg";
import imageBA from "./assets/ba.jpg";
import logo from "./assets/logo.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTripadvisor } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Rooms from './Rooms';
import Facilities from './Facilities';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Booking from './Booking';
import hotelVideo from "./assets/IMG_2637.MP4";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = true;
      videoElement.autoplay = true;
      videoElement.playsInline = true;
      videoElement.loop = true;
      
      console.log('Attempting to play video');
      videoElement.play().catch(error => {
        console.warn('Autoplay was prevented:', error);
      });
    }
  }, []);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/" element={
            <>
              <section className="relative min-h-[100vh] w-full overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <img
                    src={heroImage}
                    alt="Lavimac Royal Hotel"
                    className="w-full h-full object-cover object-center scale-100 animate-ken-burns"
                    style={{
                      objectPosition: "50% 50%",
                      imageRendering: "auto"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 z-20"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-30 min-h-[100vh] flex flex-col items-center justify-center px-4 pt-24 pb-12">
                  <div className="text-center max-w-5xl mx-auto">
                    {/* Logo or Badge */}
                    <div className="mb-8 animate-fade-in mt-8">
                      <div className="inline-block p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                        <img 
                          src={logo} 
                          alt="Lavimac Royal Hotel Logo" 
                          className="w-16 h-16 object-contain rounded-full"
                        />
                      </div>
                    </div>

                    {/* Heading Group */}
                    <div className="space-y-6 mb-8 md:mb-12">
                      <h2 className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase animate-slide-down">
                        Welcome to
                      </h2>
                      <h1 className="animate-title text-3xl sm:text-4xl md:text-5xl">
                        {Array.from("Lavimac Royal Hotel").map((char, index) => (
                          <span
                            key={index}
                            className="animate-char"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </h1>
                    </div>

                    {/* Description */}
                    <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8 md:mb-12 px-4 animate-fade-in-up">
                      Experience unparalleled luxury in the heart of Oduom Anwomaso. 
                      Where every moment is crafted for your perfect stay.
                    </p>

                    {/* CTA Group */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-16 animate-fade-in-up px-4">
                      <Link
                        to="/booking"
                        className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-all duration-300"
                      >
                        <span className="relative z-10 font-medium text-sm sm:text-base">Reserve Your Stay</span>
                      </Link>
                      <Link
                        to="/tour"
                        className="flex items-center gap-2 text-white/90 hover:text-yellow-200 transition-colors duration-300 text-sm sm:text-base"
                      >
                        <span>View Our Rooms</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>

                    {/* Feature Pills */}
                    <div className="animate-fade-in px-4">
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
                        <div className="w-48 sm:w-auto py-2 px-4 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/90 text-xs sm:text-sm flex items-center justify-center gap-2">
                          <Wifi className="w-3 h-3 sm:w-4 sm:h-4" /> High-Speed WiFi
                        </div>
                        <div className="w-48 sm:w-auto py-2 px-4 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/90 text-xs sm:text-sm flex items-center justify-center gap-2">
                          <Coffee className="w-3 h-3 sm:w-4 sm:h-4" /> 24/7 Room Service
                        </div>
                        <div className="w-48 sm:w-auto py-2 px-4 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/90 text-xs sm:text-sm flex items-center justify-center gap-2">
                          <Utensils className="w-3 h-3 sm:w-4 sm:h-4" /> Restaurant
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20"></div>
              </section>
              <div className="px-4 sm:px-6 lg:px-8">
                
                <section className="max-w-7xl mx-auto py-8 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="pr-0 sm:pr-8">
                    <h2 className="text-2xl sm:text-4xl font-serif mb-4 sm:mb-6 text-[rgb(0,0,115)]">
                      Welcome to 
                      <br />
                      Luxury and Royalty
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                      The Lavimac Royal Hotel has superior rooms features for comfortable and relaxed living. Retreat and marvel at the out of town comfort by overlooking the splendid sights that the hospitable town of Oduom Anwomaso has to offer. Our rooms are designed with interiors to reflect the warmth of the Ghanaian people and to promote healing and relaxation. We also provide variety of culinary offerings inspired by local and international flavours.
                    </p>
                  </div>
                  <div className="relative w-full h-[80vh] overflow-hidden">
                    {/* Video Background */}
                    <div className="absolute inset-0">
                      <video
                        ref={videoRef}
                        src={hotelVideo}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{ transform: `scale(${isPlaying ? '1.05' : '1'})` }}
                        playsInline
                        loop
                        muted
                        autoPlay
                        onCanPlay={() => {
                          if (videoRef.current) {
                            videoRef.current.play().catch(error => {
                              console.log('Video autoplay was prevented:', error);
                            });
                          }
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/50 to-transparent bg-gradient-animate"></div>
                      {/* Animated Particles */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="firefly"></div>
                        <div className="firefly"></div>
                        <div className="firefly"></div>
                        <div className="firefly"></div>
                        <div className="firefly"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full max-w-[1200px] mx-auto px-6 flex items-center">
                      <div className="max-w-[600px] text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-4 animate-fadeInUp hover:bg-white/20 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                          <span className="text-xs">Now Open for Bookings</span>
                        </div>
                        
                        <h2 className="text-lg md:text-xl font-serif mb-3 animate-fadeInUp hover:scale-[1.02] transition-transform duration-300 cursor-default" style={{ animationDelay: '0.2s' }}>
                          Experience Luxury Living
                        </h2>
                        
                        <p className="text-xs md:text-sm opacity-90 mb-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                          Discover the perfect blend of comfort and elegance at Lavimac Royal Hotel
                        </p>
                        
                        <div className="flex flex-wrap gap-3 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                          <button className="px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 group relative overflow-hidden text-sm">
                            <span className="relative z-10">Book Now</span>
                            <svg 
                              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 relative z-10" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </button>
                          
                          <button className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 group text-sm">
                            <span className="group-hover:text-blue-200 transition-colors duration-300">View Our Rooms</span>
                          </button>
                          
                          <div className="flex items-center gap-3 ml-auto animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                            <div className="flex -space-x-3">
                              <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
                              <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                              <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white"></div>
                            </div>
                            <span className="text-xs opacity-90">300+ Happy Guests</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Controls */}
                    <div className="absolute bottom-6 right-6 flex items-center gap-3">
                      {/* Volume Control */}
                      <div className="relative group">
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"/>
                          </svg>
                        </button>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="h-20 w-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-1/2 w-full bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Play/Pause Button */}
                      <button 
                        onClick={toggleVideo}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                      >
                        {isPlaying ? (
                          <svg className="w-4 h-4 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
                      <div className="h-full bg-white/60 w-1/3 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full transform scale-0 hover:scale-100 transition-transform duration-300"></div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="w-full py-32 bg-white">
                  <div className="max-w-7xl mx-auto px-6">
                    {/* Modern Header */}
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-serif mb-3 text-[#000000">
                        Our Luxurious Rooms
                      </h2>
                      <p className="text-sm text-[#00000">
                        Experience unparalleled comfort and elegance in our thoughtfully designed rooms
                      </p>
                    </div>

                    {/* Room Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Pent Room */}
                      <div className="room-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                        <div className="room-image">
                          <img 
                            src={penthouse1}
                            alt="Pent Room" 
                            className="hover:scale-105 transition-transform duration-300"
                          />
                          <div className="room-overlay">
                            <h3 className="room-overlay-title">Pent Rooms</h3>
                            <div className="star-rating">
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                            </div>
                            <div className="room-overlay-price">
                              <span className="price-label">Per Night</span>
                              <span className="price-amount">GH₵300.00</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Standard Deluxe */}
                      <div className="room-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <div className="room-image">
                          <img 
                            src={standardDeluxe1}
                            alt="Standard Deluxe" 
                            className="hover:scale-105 transition-transform duration-300"
                          />
                          <div className="room-overlay">
                            <h3 className="room-overlay-title">Standard Deluxe</h3>
                            <div className="star-rating">
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                            </div>
                            <div className="room-overlay-price">
                              <span className="price-label">Per Night</span>
                              <span className="price-amount">GH₵270.00</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Standard Single */}
                      <div className="room-card animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        <div className="room-image">
                          <img 
                            src={standardSingle1}
                            alt="Standard Single" 
                            className="hover:scale-105 transition-transform duration-300"
                          />
                          <div className="room-overlay">
                            <h3 className="room-overlay-title">Standard Single</h3>
                            <div className="star-rating">
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                            </div>
                            <div className="room-overlay-price">
                              <span className="price-label">Per Night</span>
                              <span className="price-amount">GH₵250.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-10">
                      <button className="view-all-button text-sm group">
                        View All Rooms
                        <svg 
                          className="w-4 h-4 ml-2 transform transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </section>

                <section className="discover-section">
                  <div className="discover-content">
                    <div className="about-button">
                      <button>About Lavimac Royal Hotel</button>
                    </div>
                    
                    <h2 className="discover-title">
                      Discover a Tranquil Haven at <span style={{ color: '#0033cc' }}>Lavimac Royal Hotel</span> in Oduom Anwomaso.
                    </h2>
                    
                    <p className="discover-description">
                      Immerse yourself in a unique blend of contemporary comfort and rich local culture. 
                      Our elegant rooms, designed for relaxation and tranquility, await your experience.
                    </p>
                    
                    <button className="start-journey-btn">
                      Start Your Journey <span className="arrow">→</span>
                    </button>
                  </div>

                  <div className="features-slider">
                    <div className="feature-card">
                      <div className="feature-tag">Elegant Rooms</div>
                      <div className="feature-image">
                        <img src={image2} alt="Elegant Room" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="feature-content">
                        <h3>Designed for Comfort</h3>
                        <p>Experience relaxation with upscale furnishings and stunning views.</p>
                      </div>
                    </div>

                    <div className="feature-card">
                      <div className="feature-tag">Gourmet Bar</div>
                      <div className="feature-image">
                        <img src={imageBA} alt="Gourmet Bar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="feature-content">
                        <h3>Exquisite Bar Experience</h3>
                        <p>Savor our selection of fine drinks and cocktails in an elegant atmosphere.</p>
                      </div>
                    </div>

                    <div className="navigation-buttons">
                      <button className="nav-btn prev">←</button>
                      <button className="nav-btn next">→</button>
                    </div>
                  </div>
                </section>

                {/* Location Section */}
                <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
                  <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-serif mb-3 bg-gradient-to-r from-[rgb(0,0,115)] to-blue-600 bg-clip-text text-transparent">
                        Find Your Way to Luxury
                      </h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Conveniently located in Oduom Anwomaso, our hotel offers easy access to major attractions 
                        and landmarks. Come experience luxury in the heart of the city.
                      </p>
                    </div>

                    <div className="relative w-full max-w-5xl mx-auto">
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-50 rounded-full opacity-50 z-0"></div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full opacity-50 z-0"></div>
                      
                      {/* Map Container */}
                      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 overflow-hidden">
                        <div className="aspect-video w-full relative">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4876012776387!2d-1.5255319842775928!3d6.687003066179111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDEnMTkuMiJOIDHCsDMxJzI0LjAiVw!5e1!3m2!1sen!2sgh!4v1705590477065!5m2!1sen!2sgh"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl shadow-inner"
                          ></iframe>

                          {/* Overlay gradient */}
                          <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]"></div>
                        </div>

                        {/* Location Details */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center justify-center space-x-2 text-gray-600">
                            <MdLocationOn className="w-5 h-5 text-[rgb(0,0,115)]" />
                            <p className="text-sm">
                              Click on the map to get directions to our location
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;