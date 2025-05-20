
import { useState } from 'react';
import { Search, SearchX } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { featuredMovies } from '@/data/movies';
import SearchResults from './SearchResults';
import { toast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState(featuredMovies);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      
      // Filter movies based on search query
      const results = featuredMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(results);
      setShowResults(true);
      
      // Show toast notification with search results
      if (results.length > 0) {
        toast({
          title: `Found ${results.length} result${results.length === 1 ? '' : 's'}`,
          description: `for "${searchQuery}"`,
          duration: 3000,
        });
      } else {
        toast({
          title: "No results found",
          description: `No movies matching "${searchQuery}"`,
          duration: 3000,
          variant: "destructive",
        });
      }
    }
  };

  const closeResults = () => {
    setShowResults(false);
    setSearchQuery('');
  };

  return (
    <section className="bg-movie-secondary relative overflow-hidden py-12 md:py-20">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 z-0"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
          alt="Movies background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Download Your Favorite Movies
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Browse thousands of movies and web series in high quality. Easy to download and enjoy!
        </p>
        
        <form onSubmit={handleSearch} className="max-w-md mx-auto flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search movies by name..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            type="submit" 
            className="bg-movie-primary text-white hover:bg-blue-600"
          >
            Search
          </Button>
        </form>
      </div>
      
      {/* Search Results Modal */}
      {showResults && (
        <SearchResults 
          movies={searchResults} 
          query={searchQuery}
          onClose={closeResults}
        />
      )}
    </section>
  );
};

export default HeroSection;
