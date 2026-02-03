import { useState, useRef, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Songlist from "./Components/Songlist";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  // Play song when selected
  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.src;
      audioRef.current.play();
    }
  }, [currentSong]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="grow px-4 py-6 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">
            My Playlist
          </h2>

          {/* Pass setter to Songlist */}
          <Songlist onSelect={setCurrentSong} />
        </div>
      </main>

      {/* Audio element */}
      <audio ref={audioRef} />

      <Footer />
    </div>
  );
}

export default App;
