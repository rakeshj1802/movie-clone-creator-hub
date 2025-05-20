
import { useEffect } from 'react';
import { featuredMovies } from '@/data/movies';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  useEffect(() => {
    // Welcome toast notification
    toast({
      title: "Welcome to MovieRulz",
      description: "Browse and download your favorite movies!",
      duration: 5000,
    });
  }, []);

  // Filter movies for different sections
  const teluguMovies = featuredMovies.filter(movie => movie.language === "Telugu");
  const latestMovies = [...featuredMovies].sort((a, b) => b.year - a.year);

  return (
    <div className="min-h-screen flex flex-col bg-movie-secondary text-movie-text">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="py-6">
          <FeaturedSection title="Latest Telugu Movies" movies={teluguMovies} />
          <FeaturedSection title="Featured Movies" movies={latestMovies} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
