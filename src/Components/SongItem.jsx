function SongItem({ song, onSelect }) {
  return (
    <div
      onClick={() => onSelect(song)}
      className="flex justify-between items-center p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition cursor-pointer"
    >
      <div>
        <p className="font-medium">{song.title}</p>
        <p className="text-sm text-zinc-400">{song.artist}</p>
      </div>

      <span className="text-green-500">▶</span>
    </div>
  );
}

export default SongItem;
