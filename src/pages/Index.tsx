import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";

// Mock data - replace with API calls later
const movies = [
  {
    id: "1",
    title: "Inception",
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 4.8,
    genre: "Sci-Fi",
  },
  {
    id: "2",
    title: "The Dark Knight",
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.9,
    genre: "Action",
  },
  {
    id: "3",
    title: "Pulp Fiction",
    imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: 4.7,
    genre: "Crime",
  },
  {
    id: "4",
    title: "The Shawshank Redemption",
    imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 4.9,
    genre: "Drama",
  },
];

const Index = () => {
  return (
    <Layout>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-8">Now Showing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;