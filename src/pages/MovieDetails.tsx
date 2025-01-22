import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { TheatreList } from "@/components/TheatreList";
import { SeatMap } from "@/components/SeatMap";
import { useState } from "react";
import { toast } from "sonner";

// Mock data - replace with API call later
const movieDetails = {
  id: "1",
  title: "Inception",
  imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  rating: 4.8,
  genre: "Sci-Fi",
  duration: "2h 28min",
  description:
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  director: "Christopher Nolan",
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
};

const MovieDetails = () => {
  const { id } = useParams();
  const [selectedTheatre, setSelectedTheatre] = useState<string | null>(null);
  const [selectedShowtime, setSelectedShowtime] = useState<string | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleShowtimeSelect = (theatreId: string, showtime: string) => {
    setSelectedTheatre(theatreId);
    setSelectedShowtime(showtime);
    setSelectedSeats([]);
  };

  const handleSeatSelect = (seats: string[]) => {
    setSelectedSeats(seats);
  };

  const handleBooking = () => {
    if (!selectedSeats.length) {
      toast.error("Please select at least one seat");
      return;
    }
    toast.success(
      `Booking confirmed for ${selectedSeats.length} seat(s): ${selectedSeats.join(
        ", "
      )}`
    );
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
            <img
              src={movieDetails.imageUrl}
              alt={movieDetails.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{movieDetails.title}</h1>
            <div className="flex items-center gap-4 text-gray-300">
              <span>⭐ {movieDetails.rating}</span>
              <span>•</span>
              <span>{movieDetails.genre}</span>
              <span>•</span>
              <span>{movieDetails.duration}</span>
            </div>
            <p className="text-lg text-gray-300">{movieDetails.description}</p>
            <div>
              <h3 className="text-xl font-semibold mb-2">Director</h3>
              <p className="text-gray-300">{movieDetails.director}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cast</h3>
              <p className="text-gray-300">{movieDetails.cast.join(", ")}</p>
            </div>
          </div>
        </div>

        <TheatreList onSelectShowtime={handleShowtimeSelect} />

        {selectedTheatre && selectedShowtime && (
          <>
            <SeatMap onSelectSeats={handleSeatSelect} />
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-cinema-red hover:bg-red-700 text-white px-8"
                onClick={handleBooking}
                disabled={selectedSeats.length === 0}
              >
                Book {selectedSeats.length} Seat(s) for {selectedShowtime}
              </Button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default MovieDetails;