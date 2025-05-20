
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie, featuredMovies } from '@/data/movies';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import MovieCard from '@/components/MovieCard';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  useEffect(() => {
    setLoading(true);
    
    // Extract category name from URL (removing "category-" prefix)
    const categoryName = category?.replace('category-', '');
    
    // Filter movies by category or language
    setTimeout(() => {
      let filteredMovies;
      
      if (categoryName === 'web-series') {
        filteredMovies = featuredMovies.filter(movie => 
          movie.category.some(cat => cat.toLowerCase().includes('series'))
        );
      } else if (categoryName) {
        filteredMovies = featuredMovies.filter(movie => 
          movie.language.toLowerCase() === categoryName ||
          movie.category.some(cat => cat.toLowerCase() === categoryName)
        );
      } else {
        filteredMovies = [...featuredMovies];
      }
      
      setMovies(filteredMovies);
      setLoading(false);
      setCurrentPage(1);
    }, 300);
  }, [category]);

  // Get current movies for pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Format category name for display
  const formatCategoryName = () => {
    if (!category) return 'All Movies';
    const name = category.replace('category-', '');
    return name.charAt(0).toUpperCase() + name.slice(1) + (name === 'web-series' ? '' : ' Movies');
  };

  return (
    <div className="min-h-screen flex flex-col bg-movie-secondary text-movie-text">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">{formatCategoryName()}</h1>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-movie-primary">Loading...</div>
            </div>
          ) : movies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No movies found in this category.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {currentMovies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                          <PaginationLink
                            onClick={() => setCurrentPage(index + 1)}
                            isActive={currentPage === index + 1}
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
