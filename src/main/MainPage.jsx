import React, { useEffect } from 'react';

import OpenAIV from '../assets/OpenAIV.mp4'
import OpenAI from '../assets/OpenAI.jpeg'
import flower from '../assets/flower2.jpg'
import dalle1  from '../assets/dalle1.jpg'
import dalle2 from '../assets/dalle2.jpeg'
import dalle3 from '../assets/dalle3.jpeg'
import dalle4 from '../assets/dalle4.jpg'
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

function MainPage() {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('bg-stone-950');
      } else {
        navbar.classList.remove('bg-stone-950');
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    
     <div className="font-soehne font-system-ui font-apple-system font-helvetica-neue font-arial font-sans bg-black">
      {/* Navigation Section */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-transparent z-20"
      >
        <div className="text-2xl font-bold text-white">OpenAI</div>
        <ul className="flex space-x-4">
  <li>
    <Link to="/">
      <span className="text-white hover:text-gray-300">Home</span>
    </Link>
  </li>
  <li>
    <a href="#about" className="text-white hover:text-gray-300">
      About
    </a>
  </li>
  <li>
    <Link to="/dalle/">
      <span className="text-white border border-white px-4 py-2">Try DALL-E</span>
    </Link>
    {/* Add more navigation links as needed */}
  </li>
</ul>
      </nav>
      <section className="h-screen flex flex-col relative">
        {/* Video Background */}
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="w-full h-full object-cover absolute inset-0 z-0 opacity-50 shadow-xl"
        >
          <source src={OpenAIV} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Content Overlay */}
        <div className="bg-black bg-opacity-50 flex-1 flex items-center justify-center">
          <div className="text-white text-center font-soehne font-system-ui font-sans font-helvetica font-serif">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to Our OpenAI{' '}
            </h1>
            
            <p className="text-xl font-medium">
              Discover something amazing here!
            </p>
          </div>
        </div>
      </section>
      {/* About Section with Border Top */}
      <section id="about" className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-1/2">
              <img
                src={OpenAI}
                alt="About OpenAI"
                className="rounded-lg shadow-lg"
              />
              {/* OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity. */}
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-white text-3xl font-bold mb-4">
                About OpenAI
              </h2>
              <p className="text-white text-lg mb-4">
                OpenAI is an AI research and deployment company. OpenAI
                mission is to ensure that artificial general intelligence 
                benefits all of humanity.
              </p>
              {/* Button with Black Background, White Border, and Link */}
              <a
                href="https://platform.openai.com/docs/overview"
                className="inline-block bg-black border border-white text-white px-4 py-2"
              >
                More About OpenAI
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* About DALL-E Section with Image Sample Cards */}
      <section className="py-16 bg-black text-white border-t border--white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">About DALL-E</h2>
          <p className="text-white mb-8">
            DALL-E is an artificial intelligence model developed by OpenAI. It
            is known for its remarkable capability to generate diverse and
            high-quality images based on textual descriptions. The model has
            been trained on a vast dataset and demonstrates the ability to
            imagine and create unique visual content.
          </p>
          <div className="flex flex-wrap -mx-4">
            {/* Image Sample Card 1 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <img
                src={dalle1}
                alt="Sample 1"
                className="rounded-lg shadow-lg mb-4"
              />
            </div>
            {/* Image Sample Card 2 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <img
                src={dalle2}
                alt="Sample 2"
                className="rounded-lg shadow-lg mb-4"
              />
            </div>
            {/* Image Sample Card 3 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <img
                src={dalle3}
                alt="Sample 3"
                className="rounded-lg shadow-lg mb-4"
              />
            </div>
            {/* Image Sample Card 4 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <img
                src={dalle4}
                alt="Sample 4"
                className="rounded-lg shadow-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Quotes Section with Image on Right */}
      <section className="py-16 bg-black text-white border-t border--white">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <h2 className="text-3xl font-bold mb-4">Inspiring Quotes</h2>
              <blockquote className="text-lg italic">
                "All things are difficult before they are easy."  -Thomas Fuller
              </blockquote>
              {/* Add more quotes as needed */}
            </div>
            <div className="w-1/2">
              <img
                src={flower}
                alt="Quotes Image"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
   
    </div>
    
  );
}

export default MainPage;
