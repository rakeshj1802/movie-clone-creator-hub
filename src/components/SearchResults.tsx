
import { Movie } from "@/data/movies";
import MovieCard from "./MovieCard";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface SearchResultsProps {
  movies: Movie[];
  query: string;
  onClose: () => void;
}

const SearchResults = ({ movies, query, onClose }: SearchResultsProps) => {
  if (!query.trim()) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-movie-text">
            Search Results for: <span className="text-movie-primary">{query}</span>
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="bg-movie-primary/10 text-movie-primary hover:bg-movie-primary/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-movie-text text-lg mb-2">No results found for "{query}"</p>
            <p className="text-gray-400">Try searching with a different keyword</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
