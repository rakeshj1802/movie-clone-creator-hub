
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/movies";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
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
              <div className="flex gap-2">
                <Input 
                  placeholder="Search movies..." 
                  className="bg-movie-card text-movie-text border-movie-primary" 
                />
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-movie-text hover:bg-movie-primary hover:text-white"
                >
                  Cancel
                </Button>
              </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
