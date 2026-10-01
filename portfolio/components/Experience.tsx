"use client";

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { BriefcaseBusiness } from "lucide-react";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <Box
      id="experience"
      py={{ base: 24, md: 32 }}
      borderTop="1px solid"
      borderColor="var(--border)"
    >
      <Container maxW="1200px">
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          gap={{
            base: 10,
            lg: 24,
          }}
          align="flex-start"
        >
          {/* Título */}

          <Box minW={{ lg: "300px" }}>
            <Text
              fontSize="sm"
              color="var(--muted)"
              mb={3}
              fontFamily="mono"
              opacity="0.65"
            >
              03 / EXPERIENCE
            </Text>

            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              letterSpacing="-0.04em"
              color="var(--foreground)"
            >
              {t("title")}
            </Heading>

            <Text
              mt={5}
              color="var(--muted)"
              maxW="300px"
              lineHeight="1.7"
            >
              {t("subtitle")}
            </Text>
          </Box>

          {/* Experiencia */}

          <Box
            position="relative"
            w="full"
            maxW="700px"
          >
            {/* Línea */}

            <Box
              position="absolute"
              left={{
                base: "10px",
                md: "11px",
              }}
              top="10px"
              bottom="10px"
              w="1px"
              bg="var(--border)"
            />

            <VStack
              align="stretch"
              gap={12}
            >
              <MotionBox
                position="relative"
                pl={{
                  base: 10,
                  md: 14,
                }}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                {/* Punto */}

                <Box
                  position="absolute"
                  left={{
                    base: "4px",
                    md: "5px",
                  }}
                  top="4px"
                  w="13px"
                  h="13px"
                  borderRadius="full"
                  bg="var(--accent)"
                  border="3px solid"
                  borderColor="var(--background)"
                  zIndex="1"
                  boxShadow="0 0 12px var(--accent)"
                />

                {/* Tarjeta */}

                <Box
                  p={{
                    base: 5,
                    md: 7,
                  }}
                  border="1px solid"
                  borderColor="var(--border)"
                  borderRadius="2xl"
                  bg="var(--card)"
                  _hover={{
                    borderColor: "var(--accent)",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  <Flex
                    direction={{
                      base: "column",
                      sm: "row",
                    }}
                    justify="space-between"
                    gap={3}
                    mb={5}
                  >
                    <Box>
                      <HStack gap={3}>
                        <BriefcaseBusiness
                          size={19}
                          color="var(--accent)"
                        />

                        <Heading
                          fontSize={{
                            base: "lg",
                            md: "xl",
                          }}
                          color="var(--foreground)"
                        >
                          {t("fullstack")}
                        </Heading>
                      </HStack>

                      <Text
                        mt={2}
                        color="var(--muted)"
                        fontSize="sm"
                      >
                        BYTCAT
                      </Text>
                    </Box>

                    <Badge
                      alignSelf={{
                        base: "flex-start",
                        sm: "center",
                      }}
                      variant="outline"
                      borderColor="var(--border)"
                      color="var(--accent)"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {t("current")}
                    </Badge>
                  </Flex>

                  <Text
                    color="var(--muted)"
                    lineHeight="1.8"
                  >
                    {t("description")}
                  </Text>

                  {/* Tecnologías */}

                  <Flex
                    mt={6}
                    gap={2}
                    flexWrap="wrap"
                  >
                    {[
                      "Java",
                      "Spring Boot",
                      "React",
                      "Next.js",
                      "TypeScript",
                      "NestJS",
                      "SQL",
                      "Git",
                    ].map((technology) => (
                      <Badge
                        key={technology}
                        variant="subtle"
                        bg="var(--border)"
                        color="var(--muted)"
                        fontSize="xs"
                        px={2.5}
                        py={1}
                        borderRadius="md"
                        _hover={{
                          color: "var(--accent)",
                          borderColor: "var(--accent)",
                        }}
                        transition="all 0.2s"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </MotionBox>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}