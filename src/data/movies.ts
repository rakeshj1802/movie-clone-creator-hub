
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  year: number;
  language: string;
  quality: string[];
  category: string[];
  description: string;
  downloadLinks: {
    quality: string;
    size: string;
    link: string;
  }[];
}

export const featuredMovies: Movie[] = [
  {
    id: "1",
    title: "Mr. Bachchan",
    posterUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    year: 2024,
    language: "Telugu",
    quality: ["720p", "1080p", "4K"],
    category: ["Action", "Drama"],
    description: "Mr. Bachchan is a thrilling action drama starring famous actors in lead roles.",
    downloadLinks: [
      { quality: "720p", size: "900MB", link: "#" },
      { quality: "1080p", size: "1.5GB", link: "#" },
      { quality: "4K", size: "3GB", link: "#" }
    ]
  },
  {
    id: "2",
    title: "Double iSmart",
    posterUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    year: 2024,
    language: "Telugu",
    quality: ["720p", "1080p"],
    category: ["Action", "Comedy"],
    description: "Double iSmart is an action-packed comedy film with amazing performances.",
    downloadLinks: [
      { quality: "720p", size: "800MB", link: "#" },
      { quality: "1080p", size: "1.4GB", link: "#" }
    ]
  },
  {
    id: "3",
    title: "Kalki 2898 AD",
    posterUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    year: 2024,
    language: "Telugu",
    quality: ["720p", "1080p", "4K"],
    category: ["Sci-Fi", "Drama"],
    description: "A futuristic sci-fi drama set in the year 2898 AD featuring epic storylines.",
    downloadLinks: [
      { quality: "720p", size: "950MB", link: "#" },
      { quality: "1080p", size: "1.7GB", link: "#" },
      { quality: "4K", size: "4GB", link: "#" }
    ]
  },
  {
    id: "4",
    title: "Devara",
    posterUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    year: 2024,
    language: "Telugu",
    quality: ["720p", "1080p"],
    category: ["Action", "Thriller"],
    description: "Devara is an action-packed thriller with stunning visuals and performances.",
    downloadLinks: [
      { quality: "720p", size: "850MB", link: "#" },
      { quality: "1080p", size: "1.6GB", link: "#" }
    ]
  },
  {
    id: "5",
    title: "Game Changer",
    posterUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    year: 2023,
    language: "Telugu",
    quality: ["720p", "1080p"],
    category: ["Action", "Political"],
    description: "Political action drama with powerful dialogues and performances.",
    downloadLinks: [
      { quality: "720p", size: "920MB", link: "#" },
      { quality: "1080p", size: "1.8GB", link: "#" }
    ]
  },
  {
    id: "6",
    title: "Pushpa 2: The Rule",
    posterUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    year: 2024,
    language: "Telugu",
    quality: ["720p", "1080p", "4K"],
    category: ["Action", "Crime"],
    description: "Sequel to the blockbuster Pushpa, continuing the story of the red sandalwood smuggler.",
    downloadLinks: [
      { quality: "720p", size: "980MB", link: "#" },
      { quality: "1080p", size: "1.9GB", link: "#" },
      { quality: "4K", size: "4.2GB", link: "#" }
    ]
  }
];

export const categories = [
  "Telugu",
  "Hindi",
  "Tamil",
  "Malayalam",
  "Kannada",
  "English",
  "Web Series"
];
