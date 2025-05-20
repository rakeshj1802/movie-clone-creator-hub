
import { Movie } from "@/data/movies";
import MovieCard from "./MovieCard";

interface FeaturedSectionProps {
  title: string;
  movies: Movie[];
}

const FeaturedSection = ({ title, movies }: FeaturedSectionProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-movie-text">{title}</h2>
          <a href="#" className="text-movie-primary hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
