
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Movie, featuredMovies } from '@/data/movies';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from "@/hooks/use-toast";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundMovie = featuredMovies.find(m => m.id === id);
      setMovie(foundMovie || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleDownload = (quality: string) => {
    toast({
      title: "Download Started",
      description: `${movie?.title} (${quality}) will begin downloading shortly.`,
      duration: 3000,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-movie-secondary text-movie-text">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-movie-primary">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex flex-col bg-movie-secondary text-movie-text">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold mb-4">Movie Not Found</h2>
          <p className="mb-6 text-gray-400">The movie you are looking for does not exist or has been removed.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-movie-secondary text-movie-text">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="flex items-center text-movie-primary mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Movie Poster */}
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden border border-gray-800">
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Movie Details */}
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-2">{movie.title} ({movie.year})</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-movie-primary text-white">{movie.language}</Badge>
                {movie.category.map(cat => (
                  <Badge key={cat} variant="outline" className="text-movie-text border-gray-700">
                    {cat}
                  </Badge>
                ))}
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300">{movie.description}</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-movie-primary">Download Links</h3>
              
              <div className="space-y-4">
                {movie.downloadLinks.map((link, index) => (
                  <Card key={index} className="bg-movie-card border-gray-800">
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium">{movie.title} - {link.quality}</p>
                        <p className="text-sm text-gray-400">Size: {link.size}</p>
                      </div>
                      <Button 
                        onClick={() => handleDownload(link.quality)}
                        className="bg-movie-primary hover:bg-blue-600 text-white"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetail;
