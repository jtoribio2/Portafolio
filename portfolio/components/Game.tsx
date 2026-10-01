"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  Volume2,
  VolumeX,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslations } from "next-intl";

type Obstacle = {
  x: number;
  width: number;
  height: number;
};

const GAME_WIDTH = 900;

export default function Game() {
  const t = useTranslations("Game");

  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [muted, setMuted] = useState(false);

  /*
   * =========================
   * VISIBILIDAD DEL JUEGO
   * =========================
   */

  const [gameVisible, setGameVisible] =
    useState(false);

  /*
   * =========================
   * REFERENCIAS DEL JUEGO
   * =========================
   */

  const gameRef =
    useRef<HTMLDivElement | null>(null);

  const playerRef =
    useRef<HTMLDivElement | null>(null);

  const obstacleRef =
    useRef<HTMLDivElement | null>(null);

  /*
   * =========================
   * OBSTÁCULO
   * =========================
   *
   * El estado guarda únicamente
   * el tamaño del obstáculo.
   *
   * La posición X se guarda en
   * un ref para no provocar
   * renders continuamente.
   */

  const [obstacleState, setObstacleState] =
    useState<Obstacle>({
      x: GAME_WIDTH,
      width: 30,
      height: 45,
    });

  const obstacleXRef =
    useRef(GAME_WIDTH);

  /*
   * =========================
   * FÍSICA DEL JUGADOR
   * =========================
   */

  const playerYRef = useRef(0);
  const velocity = useRef(0);
  const jumping = useRef(false);

  /*
   * =========================
   * MOTOR DEL JUEGO
   * =========================
   */

  const animationFrame =
    useRef<number | null>(null);

  /*
   * =========================
   * DATOS INTERNOS
   * =========================
   */

  const scoreRef = useRef(0);
  const speedRef = useRef(6);

  /*
   * =========================
   * AUDIO
   * =========================
   */

  const audioContext =
    useRef<AudioContext | null>(null);

  const musicInterval =
    useRef<number | null>(null);

  const musicStep =
    useRef(0);

  /*
   * =========================
   * CONSTANTES
   * =========================
   */

  const gravity = 0.8;
  const jumpForce = 14;
  const ground = 0;

  const playerX = 80;
  const playerWidth = 40;
  const playerHeight = 40;

  /*
   * =========================
   * COMPROBAR VISIBILIDAD
   * =========================
   */

  useEffect(() => {
    const element = gameRef.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setGameVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.2,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * =========================
   * MÚSICA
   * =========================
   */

  const playNote = useCallback(
    (
      frequency: number,
      duration = 0.12
    ) => {
      if (
        !audioContext.current ||
        muted
      ) {
        return;
      }

      const context =
        audioContext.current;

      const oscillator =
        context.createOscillator();

      const gain =
        context.createGain();

      oscillator.type = "square";

      oscillator.frequency.setValueAtTime(
        frequency,
        context.currentTime
      );

      gain.gain.setValueAtTime(
        0.04,
        context.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.001,
        context.currentTime + duration
      );

      oscillator.connect(gain);
      gain.connect(
        context.destination
      );

      oscillator.start();

      oscillator.stop(
        context.currentTime + duration
      );
    },
    [muted]
  );

  const startMusic =
    useCallback(async () => {
      if (muted) {
        return;
      }

      if (!audioContext.current) {
        audioContext.current =
          new AudioContext();
      }

      if (
        audioContext.current.state ===
        "suspended"
      ) {
        await audioContext.current.resume();
      }

      if (
        musicInterval.current !== null
      ) {
        return;
      }

      const melody = [
        523.25,
        659.25,
        783.99,
        659.25,
        523.25,
        392.0,
        440.0,
        523.25,

        659.25,
        783.99,
        1046.5,
        783.99,
        659.25,
        523.25,
        440.0,
        392.0,
      ];

      musicStep.current = 0;

      playNote(
        melody[0],
        0.16
      );

      musicInterval.current =
        window.setInterval(() => {
          const note =
            melody[
              musicStep.current %
                melody.length
            ];

          playNote(
            note,
            0.16
          );

          musicStep.current += 1;
        }, 220);
    }, [
      muted,
      playNote,
    ]);

  const stopMusic =
    useCallback(() => {
      if (
        musicInterval.current !== null
      ) {
        window.clearInterval(
          musicInterval.current
        );

        musicInterval.current = null;
      }
    }, []);

  const toggleMute =
    useCallback(() => {
      setMuted((currentMuted) => {
        const newMuted =
          !currentMuted;

        if (newMuted) {
          stopMusic();
        } else if (
          playing &&
          !gameOver
        ) {
          void startMusic();
        }

        return newMuted;
      });
    }, [
      playing,
      gameOver,
      startMusic,
      stopMusic,
    ]);

  /*
   * =========================
   * CREAR OBSTÁCULO
   * =========================
   */

  const createObstacle =
    useCallback((): Obstacle => {
      const types = [
        {
          width: 25,
          height: 35,
        },
        {
          width: 30,
          height: 50,
        },
        {
          width: 45,
          height: 35,
        },
        {
          width: 35,
          height: 65,
        },
        {
          width: 55,
          height: 45,
        },
      ];

      const randomType =
        types[
          Math.floor(
            Math.random() *
              types.length
          )
        ];

      return {
        x: GAME_WIDTH + 50,
        width: randomType.width,
        height: randomType.height,
      };
    }, []);

  /*
   * =========================
   * ACTUALIZAR JUGADOR
   * =========================
   */

  const updatePlayerPosition =
    useCallback((y: number) => {
      if (!playerRef.current) {
        return;
      }

      playerRef.current.style.transform =
        `translate3d(0, ${-y}px, 0)`;
    }, []);

  /*
   * =========================
   * ACTUALIZAR OBSTÁCULO
   * =========================
   */

  const updateObstaclePosition =
    useCallback((x: number) => {
      if (!obstacleRef.current) {
        return;
      }

      obstacleRef.current.style.transform =
        `translate3d(${x}px, 0, 0)`;
    }, []);

  /*
   * =========================
   * SALTO
   * =========================
   */

  const jump = useCallback(() => {
    if (
      !playing ||
      gameOver
    ) {
      return;
    }

    if (!jumping.current) {
      velocity.current =
        jumpForce;

      jumping.current = true;

      playNote(
        880,
        0.08
      );
    }
  }, [
    playing,
    gameOver,
    playNote,
  ]);

  /*
   * =========================
   * REINICIAR JUEGO
   * =========================
   */

  const resetGame =
    useCallback(() => {
      velocity.current = 0;

      jumping.current = false;

      playerYRef.current = 0;

      scoreRef.current = 0;

      speedRef.current = 6;

      obstacleXRef.current =
        GAME_WIDTH;

      setObstacleState({
        x: GAME_WIDTH,
        width: 30,
        height: 45,
      });

      updatePlayerPosition(0);

      updateObstaclePosition(
        GAME_WIDTH
      );

      setScore(0);
      setSpeed(6);
      setGameOver(false);

      window.dispatchEvent(
        new Event("game-start")
      );

      setPlaying(true);

      if (!muted) {
        void startMusic();
      }
    }, [
      muted,
      startMusic,
      updatePlayerPosition,
      updateObstaclePosition,
    ]);

  /*
   * =========================
   * GAME OVER
   * =========================
   */

  useEffect(() => {
    if (gameOver) {
      stopMusic();
    }
  }, [
    gameOver,
    stopMusic,
  ]);

  /*
   * =========================
   * CONTROL DEL TECLADO
   * =========================
   */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.code !== "Space"
      ) {
        return;
      }

      if (!gameVisible) {
        return;
      }

      event.preventDefault();

      if (gameOver) {
        resetGame();
        return;
      }

      if (!playing) {
        resetGame();
        return;
      }

      jump();
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    jump,
    gameOver,
    resetGame,
    gameVisible,
    playing,
  ]);

  /*
   * =========================
   * LIMPIAR AUDIO
   * =========================
   */

  useEffect(() => {
    return () => {
      stopMusic();

      if (audioContext.current) {
        void audioContext.current.close();
      }
    };
  }, [stopMusic]);

  /*
   * =========================
   * MOTOR DEL JUEGO
   * =========================
   */

  useEffect(() => {
    if (
      !playing ||
      gameOver
    ) {
      return;
    }

    const update = () => {
      /*
       * -------------------------
       * JUGADOR
       * -------------------------
       */

      velocity.current -= gravity;

      const newPlayerY =
        playerYRef.current +
        velocity.current;

      if (
        newPlayerY <= ground
      ) {
        playerYRef.current =
          ground;

        velocity.current = 0;

        jumping.current = false;
      } else {
        playerYRef.current =
          newPlayerY;
      }

      /*
       * Movemos el jugador
       * directamente en el DOM.
       */

      updatePlayerPosition(
        playerYRef.current
      );

      /*
       * -------------------------
       * PUNTUACIÓN
       * -------------------------
       */

      scoreRef.current += 0.1;

      const currentScore =
        Math.floor(
          scoreRef.current
        );

      const previousScore =
        Math.floor(
          scoreRef.current - 0.1
        );

      if (
        currentScore !==
        previousScore
      ) {
        setScore(
          currentScore
        );
      }

      /*
       * -------------------------
       * VELOCIDAD
       * -------------------------
       */

      const currentSpeed =
        6 +
        Math.floor(
          scoreRef.current / 100
        );

      if (
        currentSpeed !==
        speedRef.current
      ) {
        speedRef.current =
          currentSpeed;

        setSpeed(
          currentSpeed
        );
      }

      /*
       * -------------------------
       * OBSTÁCULO
       * -------------------------
       */

      const newX =
        obstacleXRef.current -
        speedRef.current;

      /*
       * -------------------------
       * NUEVO OBSTÁCULO
       * -------------------------
       */

      if (newX < -100) {
        const newObstacle =
          createObstacle();

        obstacleXRef.current =
          newObstacle.x;

        setObstacleState(
          newObstacle
        );

        updateObstaclePosition(
          newObstacle.x
        );
      } else {
        obstacleXRef.current =
          newX;

        updateObstaclePosition(
          newX
        );

        /*
         * -------------------------
         * COLISIÓN
         * -------------------------
         */

        const playerLeft =
          playerX;

        const playerRight =
          playerX +
          playerWidth;

        const playerBottom =
          playerYRef.current;

        const playerTop =
          playerYRef.current +
          playerHeight;

        const obstacleLeft =
          newX;

        const obstacleRight =
          newX +
          obstacleState.width;

        const obstacleBottom =
          0;

        const obstacleTop =
          obstacleState.height;

        const collisionX =
          playerRight >
            obstacleLeft &&
          playerLeft <
            obstacleRight;

        const collisionY =
          playerBottom <
            obstacleTop &&
          playerTop >
            obstacleBottom;

        if (
          collisionX &&
          collisionY
        ) {
          setGameOver(true);
          return;
        }
      }

      /*
       * -------------------------
       * SIGUIENTE FRAME
       * -------------------------
       */

      animationFrame.current =
        requestAnimationFrame(
          update
        );
    };

    animationFrame.current =
      requestAnimationFrame(
        update
      );

    return () => {
      if (
        animationFrame.current !==
        null
      ) {
        cancelAnimationFrame(
          animationFrame.current
        );
      }
    };
  }, [
    playing,
    gameOver,
    createObstacle,
    obstacleState.width,
    obstacleState.height,
    updatePlayerPosition,
    updateObstaclePosition,
  ]);

  return (
    <Box
      id="game"
      py={{
        base: 24,
        md: 32,
      }}
      borderTop="1px solid"
      borderColor="var(--border)"
    >
      <Box
        maxW="900px"
        mx="auto"
        px={{
          base: 5,
          md: 8,
        }}
      >
        {/* TÍTULO */}

        <Flex
          direction="column"
          align="center"
          textAlign="center"
          gap={5}
          mb={10}
        >
          <Text
            fontSize="sm"
            color="var(--muted)"
            fontFamily="mono"
          >
            06 / {t("section")}
          </Text>

          <Heading
            fontSize={{
              base: "4xl",
              md: "5xl",
            }}
            color="var(--foreground)"
            letterSpacing="-0.04em"
          >
            El Cubijuego
          </Heading>

          <Text
            color="var(--muted)"
            maxW="500px"
          >
            Después de ver quién soy, ¿por qué no pasar un rato jugando?
          </Text>
        </Flex>

        {/* JUEGO */}

        <Box
          ref={gameRef}
          position="relative"
          w="full"
          h={{
            base: "300px",
            md: "400px",
          }}
          border="1px solid"
          borderColor="var(--border)"
          borderRadius="2xl"
          overflow="hidden"
          bg="var(--background)"
          onClick={jump}
          cursor={
            playing &&
            !gameOver
              ? "pointer"
              : "default"
          }
        >
          {/* HUD */}

          {playing && (
            <Flex
              position="absolute"
              top={5}
              left={6}
              right={6}
              justify="space-between"
              zIndex={5}
              pointerEvents="none"
            >
              <Text
                fontFamily="mono"
                fontSize="sm"
                color="var(--muted)"
              >
                {t("score")}{" "}
                <Text
                  as="span"
                  color="var(--foreground)"
                  fontWeight="700"
                >
                  {score
                    .toString()
                    .padStart(
                      4,
                      "0"
                    )}
                </Text>
              </Text>

              <Flex
                align="center"
                gap={4}
                pointerEvents="auto"
              >
                <Text
                  fontFamily="mono"
                  fontSize="sm"
                  color="var(--muted)"
                >
                  {t("speed")}{" "}
                  <Text
                    as="span"
                    color="var(--accent)"
                    fontWeight="700"
                  >
                    {speed}
                  </Text>
                </Text>

                {/* SONIDO */}

                <Button
                  variant="ghost"
                  minW="32px"
                  h="32px"
                  p={0}
                  color="var(--muted)"
                  aria-label={
                    muted
                      ? t("soundOn")
                      : t("soundOff")
                  }
                  onClick={(
                    event
                  ) => {
                    event.stopPropagation();

                    toggleMute();
                  }}
                  _hover={{
                    color:
                      "var(--foreground)",
                    bg: "var(--border)",
                  }}
                >
                  {muted ? (
                    <VolumeX
                      size={17}
                    />
                  ) : (
                    <Volume2
                      size={17}
                    />
                  )}
                </Button>
              </Flex>
            </Flex>
          )}

          {/* SUELO */}

          <Box
            position="absolute"
            bottom="50px"
            left="0"
            right="0"
            h="1px"
            bg="var(--border)"
          />

          {/* JUGADOR */}

          <Box
            ref={playerRef}
            position="absolute"
            bottom="51px"
            left={`${playerX}px`}
            w={`${playerWidth}px`}
            h={`${playerHeight}px`}
            borderRadius="md"
            bg="var(--accent)"
            transform="translate3d(0, 0, 0)"
            willChange="transform"
          />

          {/* OBSTÁCULO */}

          {playing &&
            !gameOver && (
              <Box
                ref={obstacleRef}
                position="absolute"
                bottom="51px"
                left="0"
                w={`${obstacleState.width}px`}
                h={`${obstacleState.height}px`}
                borderRadius="sm"
                bg="var(--accent)"
                transform={`translate3d(${obstacleState.x}px, 0, 0)`}
                willChange="transform"
              />
            )}

          {/* PANTALLA INICIAL */}

          {!playing &&
            !gameOver && (
              <Flex
                position="absolute"
                inset="0"
                align="center"
                justify="center"
                direction="column"
                gap={4}
                bg="rgba(0, 0, 0, 0.25)"
              >
                <Text
                  color="var(--muted)"
                  fontSize="sm"
                >
                  {t("ready")}
                </Text>

                <Button
                  bg="var(--accent)"
                  color="var(--background)"
                  borderRadius="full"
                  px={7}
                  onClick={(
                    event
                  ) => {
                    event.stopPropagation();

                    resetGame();
                  }}
                  _hover={{
                    opacity: 0.85,
                    transform:
                      "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  {t("play")}
                </Button>
              </Flex>
            )}

          {/* GAME OVER */}

          {gameOver && (
            <Flex
              position="absolute"
              inset="0"
              align="center"
              justify="center"
              direction="column"
              gap={4}
              bg="rgba(0, 0, 0, 0.45)"
              zIndex={10}
            >
              <Text
                fontSize="xs"
                fontFamily="mono"
                color="var(--muted)"
              >
                {t("gameOver")}
              </Text>

              <Heading
                fontSize="3xl"
                color="var(--foreground)"
              >
                {t("points", {
                  score,
                })}
              </Heading>

              <Button
                bg="var(--accent)"
                color="var(--background)"
                borderRadius="full"
                px={7}
                onClick={(
                  event
                ) => {
                  event.stopPropagation();

                  resetGame();
                }}
                _hover={{
                  opacity: 0.85,
                }}
              >
                {t("playAgain")}
              </Button>
            </Flex>
          )}
        </Box>

        {/* CONTROLES */}

        {playing &&
          !gameOver && (
            <Text
              mt={4}
              textAlign="center"
              fontSize="sm"
              color="var(--muted)"
            >
              {t("controls")}
            </Text>
          )}
      </Box>
    </Box>
  );
}