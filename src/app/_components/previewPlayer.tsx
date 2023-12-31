"use client";

import { useRef, useState } from "react";

export const PreviewPlayer = ({ previewUrl }: { previewUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const buttonClick = async () => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.pause();
    else {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  return (
    <button
      onClick={buttonClick}
      className="h-12 aspect-square flex items-center justify-center rounded-md bg-vanila p-4 leading-3 dark:bg-gray max-sm:m-4"
    >
      <audio
        src={previewUrl}
        ref={audioRef}
        onEnded={handleEnd}
        className="hidden"
      ></audio>
      {isPlaying ? <p className="text-5xl">&#9208;</p> : <p className="text-4xl">&#9654;</p>}
    </button>
  );
};
