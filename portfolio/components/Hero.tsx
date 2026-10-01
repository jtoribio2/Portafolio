"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Documents from "@/components/Documents";

const MotionBox = motion.create(Box);

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <Box
      id="top"
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bg="var(--background)"
      color="var(--foreground)"
    >
      {/* Luces de fondo */}

      <Box
        position="absolute"
        top="-250px"
        right="-200px"
        w="600px"
        h="600px"
        borderRadius="full"
        bg="var(--accent)"
        opacity={0.06}
        filter="blur(100px)"
      />

      <Box
        position="absolute"
        bottom="-300px"
        left="-200px"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="var(--accent)"
        opacity={0.04}
        filter="blur(120px)"
      />

      <Container
        maxW="1200px"
        position="relative"
        zIndex="1"
        pt={{
          base: 24,
          md: 20,
        }}
      >
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          align="center"
          justify="space-between"
          gap={16}
        >
          {/* Texto */}

          <VStack
            align="start"
            gap={6}
            maxW="700px"
          >
            {/* Disponible */}

            <MotionBox
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                variant="outline"
                color="var(--muted)"
                borderColor="var(--border)"
                fontSize="xs"
              >
                <Box
                  as="span"
                  display="inline-block"
                  w="7px"
                  h="7px"
                  borderRadius="full"
                  bg="green.400"
                  mr={2}
                />

                {t("available")}
              </Badge>
            </MotionBox>

            {/* Nombre */}

            <MotionBox
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >
              <Text
                color="var(--muted)"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
              >
                {t("greeting")}
              </Text>

              <Flex
                align="center"
                gap={{
                  base: 4,
                  md: 6,
                }}
                mt={2}
              >
                <Heading
                  fontSize={{
                    base: "5xl",
                    sm: "6xl",
                    md: "7xl",
                    lg: "8xl",
                  }}
                  lineHeight="0.9"
                  letterSpacing="-0.06em"
                  color="var(--foreground)"
                >
                  {t("name")}
                </Heading>

                {/* Foto de perfil */}

                <Box
                  flexShrink={0}
                  w={{
                    base: "100px",
                    md: "155px",
                  }}
                  h={{
                    base: "100px",
                    md: "155px",
                  }}
                  borderRadius="full"
                  overflow="hidden"
                  border="2px solid"
                  borderColor="var(--border)"
                  boxShadow="0 15px 40px rgba(0,0,0,0.25)"
                  bg="var(--background)"
                  position="relative"
                >
                  <Image
                    src="/images/joel.png"
                    alt="Joel Toribio"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center top"
                  />
                </Box>
              </Flex>
            </MotionBox>

            {/* Profesión */}

            <MotionBox
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >
              <Heading
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                }}
                color="var(--muted)"
                fontWeight="500"
                letterSpacing="-0.03em"
              >
                {t("role")}
              </Heading>
            </MotionBox>

            {/* Descripción */}

            <MotionBox
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            >
              <Text
                maxW="620px"
                color="var(--muted)"
                fontSize={{
                  base: "md",
                  md: "lg",
                }}
                lineHeight="1.8"
              >
                {t("description")}
              </Text>
            </MotionBox>

            {/* Botones */}

            <MotionBox
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
            >
              <HStack
                gap={3}
                flexWrap="wrap"
              >
                <Link
                  href="#projects"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    size="lg"
                    bg="var(--accent)"
                    color="var(--background)"
                    borderRadius="full"
                    px={6}
                    _hover={{
                      opacity: 0.85,
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                  >
                    {t("viewProjects")}

                    <ArrowUpRight
                      size={18}
                    />
                  </Button>
                </Link>

                <Link
                  href="#contact"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="var(--border)"
                    color="var(--foreground)"
                    _hover={{
                      bg: "var(--border)",
                    }}
                    borderRadius="full"
                    px={6}
                  >
                    {t("contactMe")}
                  </Button>
                </Link>

                {/* CV Y CERTIFICADOS */}

                <Documents />
              </HStack>
            </MotionBox>

            {/* Redes sociales */}

            <HStack
              gap={4}
              pt={3}
            >
              <Link
                href="https://github.com/jtoribio2"
                target="_blank"
                rel="noopener noreferrer"
                color="var(--muted)"
                _hover={{
                  color: "var(--foreground)",
                }}
                transition="color 0.2s"
              >
                <FaGithub size={21} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/joel-toribio-palomino-797017428/"
                target="_blank"
                rel="noopener noreferrer"
                color="var(--muted)"
                _hover={{
                  color: "var(--foreground)",
                }}
                transition="color 0.2s"
              >
                <FaLinkedin size={21} />
              </Link>
            </HStack>
          </VStack>

          {/* Terminal */}

          <MotionBox
            display={{
              base: "none",
              lg: "block",
            }}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            <Box
              w="380px"
              h="300px"
              border="1px solid"
              borderColor="var(--border)"
              borderRadius="2xl"
              bg="var(--background)"
              backdropFilter="blur(20px)"
              p={5}
              boxShadow="0 25px 80px rgba(0,0,0,0.25)"
            >
              {/* Barra terminal */}

              <HStack
                gap={2}
                mb={5}
              >
                <Box
                  w="9px"
                  h="9px"
                  borderRadius="full"
                  bg="red.400"
                />

                <Box
                  w="9px"
                  h="9px"
                  borderRadius="full"
                  bg="yellow.400"
                />

                <Box
                  w="9px"
                  h="9px"
                  borderRadius="full"
                  bg="green.400"
                />
              </HStack>

              <Text
                fontFamily="mono"
                fontSize="sm"
                color="var(--muted)"
                mb={2}
              >
                joel@portfolio:~$
              </Text>

              <Text
                fontFamily="mono"
                fontSize="sm"
                color="var(--foreground)"
                lineHeight="2"
              >
                <Text
                  as="span"
                  color="var(--accent)"
                >
                  $
                </Text>{" "}
                whoami
                <br />

                <Text
                  as="span"
                  color="var(--muted)"
                >
                  Full Stack Developer
                </Text>

                <br />
                <br />

                <Text
                  as="span"
                  color="var(--accent)"
                >
                  $
                </Text>{" "}
                stack
                <br />

                <Text
                  as="span"
                  color="var(--muted)"
                >
                  Java · React · Next.js
                  <br />
                  NestJS · TypeScript · SQL
                </Text>

                <br />
                <br />

                <Text
                  as="span"
                  color="var(--accent)"
                >
                  $
                </Text>{" "}
                status
                <br />

                <Text
                  as="span"
                  color="var(--accent)"
                >
                  ● ready_to_build
                </Text>
              </Text>
            </Box>
          </MotionBox>
        </Flex>

        {/* Indicador de scroll */}

        <HStack
          position="absolute"
          bottom="-80px"
          left="50%"
          transform="translateX(-50%)"
          color="var(--muted)"
          gap={2}
          fontSize="xs"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <ArrowDown size={14} />

          <Text>
            {t("scroll")}
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}