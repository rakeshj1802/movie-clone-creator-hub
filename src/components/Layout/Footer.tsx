
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-movie-secondary py-8 text-movie-text border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-movie-primary mb-4">MovieRulz</h3>
            <p className="text-sm text-gray-400">
              Watch and download movies online for free. All latest Hollywood and Bollywood movies available.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-movie-primary transition-colors">Home</Link></li>
              <li><Link to="/category-telugu" className="text-sm hover:text-movie-primary transition-colors">Telugu Movies</Link></li>
              <li><Link to="/category-hindi" className="text-sm hover:text-movie-primary transition-colors">Hindi Movies</Link></li>
              <li><Link to="/category-english" className="text-sm hover:text-movie-primary transition-colors">English Movies</Link></li>
              <li><Link to="/category-web-series" className="text-sm hover:text-movie-primary transition-colors">Web Series</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Disclaimer</h4>
            <p className="text-sm text-gray-400">
              This site does not store any files on its server. All contents are provided by non-affiliated third parties.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MovieRulz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
