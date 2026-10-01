"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

const songs = [
  {
    title: "Canción 1",
    src: "/music/cancion1.mp3",
  },
  {
    title: "Canción 2",
    src: "/music/cancion2.mp3",
  },
  {
    title: "Canción 3",
    src: "/music/cancion3.mp3",
  },
  {
    title: "Canción 4",
    src: "/music/cancion4.mp3",
  },
];

export default function AudioPlayer() {
  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const playingRef =
    useRef(false);

  const [
    currentSong,
    setCurrentSong,
  ] = useState(0);

  const [
    playing,
    setPlaying,
  ] = useState(false);

  const [
    volume,
    setVolume,
  ] = useState(0.5);

  const song =
    songs[currentSong];

  /*
   * =========================
   * VOLUMEN
   * =========================
   */

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) return;

    audio.volume = volume;
  }, [volume]);

  /*
   * =========================
   * AUTOPLAY
   * =========================
   */

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) return;

    const startMusic =
      async () => {
        try {
          await audio.play();

          playingRef.current =
            true;

          setPlaying(true);
        } catch {
          playingRef.current =
            false;

          setPlaying(false);
        }
      };

    startMusic();
  }, []);

  /*
   * =========================
   * CAMBIAR CANCIÓN
   * =========================
   */

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) return;

    const shouldPlay =
      playingRef.current;

    audio.pause();
    audio.load();

    if (shouldPlay) {
      audio
        .play()
        .then(() => {
          playingRef.current =
            true;

          setPlaying(true);
        })
        .catch(() => {
          playingRef.current =
            false;

          setPlaying(false);
        });
    }
  }, [currentSong]);

  /*
   * =========================
   * PAUSAR AL EMPEZAR EL JUEGO
   * =========================
   */

  useEffect(() => {
    const handleGameStart =
      () => {
        const audio =
          audioRef.current;

        if (!audio) return;

        audio.pause();

        playingRef.current =
          false;

        setPlaying(false);
      };

    window.addEventListener(
      "game-start",
      handleGameStart
    );

    return () => {
      window.removeEventListener(
        "game-start",
        handleGameStart
      );
    };
  }, []);

  /*
   * =========================
   * PLAY / PAUSE
   * =========================
   */

  const togglePlay =
    async () => {
      const audio =
        audioRef.current;

      if (!audio) return;

      if (
        playingRef.current
      ) {
        audio.pause();

        playingRef.current =
          false;

        setPlaying(false);

        return;
      }

      try {
        await audio.play();

        playingRef.current =
          true;

        setPlaying(true);
      } catch {
        playingRef.current =
          false;

        setPlaying(false);
      }
    };

  /*
   * =========================
   * CANCIÓN ANTERIOR
   * =========================
   */

  const previousSong =
    () => {
      const newIndex =
        currentSong === 0
          ? songs.length - 1
          : currentSong - 1;

      setCurrentSong(
        newIndex
      );
    };

  /*
   * =========================
   * SIGUIENTE CANCIÓN
   * =========================
   */

  const nextSong =
    () => {
      const newIndex =
        currentSong ===
        songs.length - 1
          ? 0
          : currentSong + 1;

      setCurrentSong(
        newIndex
      );
    };

  /*
   * =========================
   * CANCIÓN TERMINADA
   * =========================
   */

  const handleEnded =
    () => {
      const newIndex =
        currentSong ===
        songs.length - 1
          ? 0
          : currentSong + 1;

      playingRef.current =
        true;

      setCurrentSong(
        newIndex
      );
    };

  return (
    <Box w="full">
      <audio
        ref={audioRef}
        src={song.src}
        preload="auto"
        onEnded={handleEnded}
      />

      <Flex
        align="center"
        gap={{
          base: 2,
          md: 4,
        }}
        w="full"
      >
        {/* CANCIÓN */}

        <Text
          fontSize="xs"
          color="var(--muted)"
          whiteSpace="nowrap"
          display={{
            base: "none",
            sm: "block",
          }}
        >
          {song.title}
        </Text>

        {/* CONTROLES */}

        <HStack gap={0}>
          <Button
            variant="ghost"
            size="sm"
            minW="30px"
            w="30px"
            h="30px"
            p={0}
            color="var(--muted)"
            onClick={
              previousSong
            }
            _hover={{
              color:
                "var(--foreground)",
              bg: "var(--border)",
            }}
          >
            <SkipBack size={14} />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            minW="34px"
            w="34px"
            h="34px"
            p={0}
            borderRadius="full"
            color="var(--background)"
            bg="var(--accent)"
            onClick={
              togglePlay
            }
            _hover={{
              opacity: 0.8,
            }}
          >
            {playing ? (
              <Pause size={14} />
            ) : (
              <Play size={14} />
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            minW="30px"
            w="30px"
            h="30px"
            p={0}
            color="var(--muted)"
            onClick={
              nextSong
            }
            _hover={{
              color:
                "var(--foreground)",
              bg: "var(--border)",
            }}
          >
            <SkipForward size={14} />
          </Button>
        </HStack>

        {/* VOLUMEN */}

        <Flex
          align="center"
          gap={2}
          flex="1"
          minW="80px"
        >
          {volume === 0 ? (
            <VolumeX
              size={14}
              color="var(--muted)"
            />
          ) : (
            <Volume2
              size={14}
              color="var(--muted)"
            />
          )}

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(event) =>
              setVolume(
                Number(
                  event.target.value
                )
              )
            }
            style={{
              width: "100%",
              maxWidth: "130px",
              accentColor:
                "var(--accent)",
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}