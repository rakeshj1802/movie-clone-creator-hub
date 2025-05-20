
import { Link } from "react-router-dom";
import { Movie } from "@/data/movies";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card className="overflow-hidden bg-movie-card border-gray-800 hover:border-movie-primary transition-all duration-300">
      <Link to={`/movie/${movie.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-2 left-2 flex gap-1">
            {movie.quality.includes("4K") && (
              <Badge className="bg-movie-primary text-white">4K</Badge>
            )}
            {movie.quality.includes("1080p") && !movie.quality.includes("4K") && (
              <Badge className="bg-green-600 text-white">1080p</Badge>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
            <h3 className="text-white font-bold truncate">{movie.title}</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-300 text-sm">{movie.year}</span>
              <span className="text-gray-300 text-sm">{movie.language}</span>
            </div>
          </div>
        </div>
      </Link>
      <CardContent className="p-3">
        <div className="flex flex-wrap gap-1">
          {movie.category.map(category => (
            <Badge key={category} variant="outline" className="text-xs text-movie-text border-gray-700">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
