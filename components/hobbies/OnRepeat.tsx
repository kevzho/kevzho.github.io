"use client";

import { useState } from "react";
import { onRepeat } from "@/content/hobbies";

export function OnRepeat() {
  const [playing, setPlaying] = useState<string | null>(null);
  const track = onRepeat.find((song) => song.spotify === playing);

  return (
    <div className="playlist">
      <div className="hobby-top">
        <span className="hobby-stat">{onRepeat.length} tracks</span>
        <span className="eq" aria-hidden="true" data-on={playing ? "true" : undefined}>
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
      <h2>on repeat</h2>
      <ol className="tracks">
        {onRepeat.map((song, index) => (
          <li key={song.spotify}>
            <button
              type="button"
              className={`track${playing === song.spotify ? " is-playing" : ""}`}
              onClick={() => setPlaying((current) => (current === song.spotify ? null : song.spotify))}
              aria-pressed={playing === song.spotify}
            >
              <span className="track-num">{playing === song.spotify ? "▶" : String(index + 1).padStart(2, "0")}</span>
              <span className="track-title">{song.title}</span>
              <span className="track-artist">{song.artist}</span>
            </button>
          </li>
        ))}
      </ol>
      {track ? (
        <iframe
          className="track-embed"
          key={track.spotify}
          title={`${track.title} by ${track.artist} on Spotify`}
          src={`https://open.spotify.com/embed/track/${track.spotify}?utm_source=generator&theme=0`}
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      ) : (
        <p className="widget-hint">tap a track to play it on spotify</p>
      )}
    </div>
  );
}
