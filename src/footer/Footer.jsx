import React from 'react'

function Footer() {
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
  return (
    <>
     {/* Footer Section */}
  <footer className="bg-black text-white py-8 border-t border--white">
    <div className="container mx-auto flex flex-col items-center">
      <p className="mb-4">© 2015-2024 OpenAI</p>
      <p className="mb-4">
        Terms &amp; policies | Privacy policy | Brand guidelines
      </p>
      <div className="flex space-x-4 mb-4">
        <a href="#" className="text-white hover:text-gray-300">
          Twitter
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          YouTube
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          GitHub
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          SoundCloud
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          LinkedIn
        </a>
      </div>
      {/* Back to Top Button */}
      <button
        onClick={backToTop}
        className="bg-black border-white border px-4 py-2 rounded-full hover:bg-white hover:text-black"
      >
        Back to Top
      </button>
    </div>
  </footer>
    </>
  )
}

export default Footer;