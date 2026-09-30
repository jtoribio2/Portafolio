"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

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
    >
      {/* Luces de fondo */}

      <Box
        position="absolute"
        top="-250px"
        right="-200px"
        w="600px"
        h="600px"
        borderRadius="full"
        bg="whiteAlpha.50"
        filter="blur(100px)"
      />

      <Box
        position="absolute"
        bottom="-300px"
        left="-200px"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="whiteAlpha.30"
        filter="blur(120px)"
      />

      <Container
        maxW="1200px"
        position="relative"
        zIndex="1"
        pt={{ base: 24, md: 20 }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                variant="outline"
                color="gray.300"
                borderColor="whiteAlpha.200"
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
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >
              <Text
                color="gray.400"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
              >
                {t("greeting")}
              </Text>

              <Heading
                mt={2}
                fontSize={{
                  base: "5xl",
                  sm: "6xl",
                  md: "7xl",
                  lg: "8xl",
                }}
                lineHeight="0.9"
                letterSpacing="-0.06em"
              >
                {t("name")}
              </Heading>
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
                color="gray.500"
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
                color="gray.400"
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
                    bg="white"
                    color="black"
                    borderRadius="full"
                    px={6}
                    _hover={{
                      bg: "gray.200",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                  >
                    {t("viewProjects")}

                    <ArrowUpRight size={18} />
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
                    borderColor="whiteAlpha.200"
                    color="white"
                    borderRadius="full"
                    px={6}
                    _hover={{
                      bg: "whiteAlpha.100",
                    }}
                  >
                    {t("contactMe")}
                  </Button>
                </Link>
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
                color="gray.500"
                _hover={{
                  color: "white",
                }}
                transition="color 0.2s"
              >
                <FaGithub size={21} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/joel-toribio-palomino-797017428/"
                target="_blank"
                rel="noopener noreferrer"
                color="gray.500"
                _hover={{
                  color: "white",
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
              borderColor="whiteAlpha.100"
              borderRadius="2xl"
              bg="whiteAlpha.30"
              backdropFilter="blur(20px)"
              p={5}
              boxShadow="0 25px 80px rgba(0,0,0,0.4)"
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
                color="gray.500"
                mb={2}
              >
                joel@portfolio:~$
              </Text>

              <Text
                fontFamily="mono"
                fontSize="sm"
                color="gray.300"
                lineHeight="2"
              >
                <Text
                  as="span"
                  color="green.400"
                >
                  $
                </Text>{" "}
                whoami
                <br />

                <Text
                  as="span"
                  color="gray.500"
                >
                  Full Stack Developer
                </Text>

                <br />
                <br />

                <Text
                  as="span"
                  color="green.400"
                >
                  $
                </Text>{" "}
                stack
                <br />

                <Text
                  as="span"
                  color="gray.500"
                >
                  Java · React · Next.js
                  <br />
                  NestJS · TypeScript · SQL
                </Text>

                <br />
                <br />

                <Text
                  as="span"
                  color="green.400"
                >
                  $
                </Text>{" "}
                status
                <br />

                <Text
                  as="span"
                  color="green.400"
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
          color="gray.600"
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