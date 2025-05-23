
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, featuredMovies } from "@/data/movies";
import SearchResults from "../SearchResults";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState(featuredMovies);
  
  // Real-time search as user types
  useEffect(() => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      
      // Filter movies based on search query - case insensitive
      const results = featuredMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(results);
      setShowResults(true);
    } else {
      // Hide results when search query is empty
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Form submission is now optional since search happens as you type
  };

  const closeResults = () => {
    setShowResults(false);
    setSearchQuery('');
  };
  
  return (
    <nav className="bg-movie-secondary py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-movie-primary text-2xl font-bold">
              MovieRulz
            </Link>
          </div>
          
          {/* Search and Navigation */}
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input 
                  placeholder="Search movies..." 
                  className="bg-movie-card text-movie-text border-movie-primary" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-movie-text hover:bg-movie-primary hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </form>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchOpen(true)}
                className="text-movie-text hover:bg-movie-primary hover:text-white"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
        
        {/* Categories */}
        <div className="overflow-x-auto mt-4">
          <div className="flex space-x-4 min-w-max">
            {categories.map((category) => (
              <Link 
                key={category} 
                to={`/category-${category.toLowerCase()}`}
                className="text-movie-text hover:text-movie-primary transition-colors whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Inline Search Results */}
        {showResults && searchQuery.trim() && (
          <div className="mt-4">
            <SearchResults 
              movies={searchResults} 
              query={searchQuery}
              onClose={closeResults}
              inline={true}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
