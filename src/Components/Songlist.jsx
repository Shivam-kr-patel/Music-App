import { songs } from "../data/songs";
import SongItem from "./SongItem";

function Songlist({ onSelect }) {
  return (
    <div className="space-y-2">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default Songlist;
