"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { Code2, Database, Layers3 } from "lucide-react";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

export default function About() {
  const t = useTranslations("About");

  return (
    <Box
      id="about"
      py={{ base: 24, md: 32 }}
      borderTop="1px solid"
      borderColor="var(--border)"
      bg="var(--background)"
      color="var(--foreground)"
    >
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 24 }}
          align="flex-start"
        >
          {/* Título */}
          <Box minW={{ lg: "300px" }}>
            <Text
              fontSize="sm"
              color="var(--muted)"
              mb={3}
              fontFamily="mono"
            >
              01 / ABOUT
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
          </Box>

          {/* Contenido */}
          <VStack
            align="start"
            gap={6}
            maxW="700px"
          >
            {/* Descripción principal */}
            <MotionBox
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <Text
                color="var(--foreground)"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
                lineHeight="1.8"
              >
                {t("description")}
              </Text>
            </MotionBox>

            {/* Segunda descripción */}
            <MotionBox
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >
              <Text
                color="var(--muted)"
                fontSize="md"
                lineHeight="1.8"
              >
                {t("description2")}
              </Text>
            </MotionBox>

            {/* Características */}
            <SimpleGrid
              columns={{
                base: 1,
                md: 3,
              }}
              gap={4}
              w="full"
              pt={4}
            >
              {/* Clean Code */}
              <Box
                p={5}
                border="1px solid"
                borderColor="var(--border)"
                borderRadius="xl"
                bg="var(--background)"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "var(--accent)",
                  transform: "translateY(-3px)",
                }}
              >
                <Code2
                  size={22}
                  color="var(--accent)"
                />

                <Text
                  mt={4}
                  fontWeight="600"
                  color="var(--foreground)"
                >
                  Clean Code
                </Text>

                <Text
                  mt={2}
                  fontSize="sm"
                  color="var(--muted)"
                  lineHeight="1.6"
                >
                  {t("cleanCode")}
                </Text>
              </Box>

              {/* Full Stack */}
              <Box
                p={5}
                border="1px solid"
                borderColor="var(--border)"
                borderRadius="xl"
                bg="var(--background)"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "var(--accent)",
                  transform: "translateY(-3px)",
                }}
              >
                <Layers3
                  size={22}
                  color="var(--accent)"
                />

                <Text
                  mt={4}
                  fontWeight="600"
                  color="var(--foreground)"
                >
                  Full Stack
                </Text>

                <Text
                  mt={2}
                  fontSize="sm"
                  color="var(--muted)"
                  lineHeight="1.6"
                >
                  {t("fullStack")}
                </Text>
              </Box>

              {/* Data */}
              <Box
                p={5}
                border="1px solid"
                borderColor="var(--border)"
                borderRadius="xl"
                bg="var(--background)"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "var(--accent)",
                  transform: "translateY(-3px)",
                }}
              >
                <Database
                  size={22}
                  color="var(--accent)"
                />

                <Text
                  mt={4}
                  fontWeight="600"
                  color="var(--foreground)"
                >
                  Data
                </Text>

                <Text
                  mt={2}
                  fontSize="sm"
                  color="var(--muted)"
                  lineHeight="1.6"
                >
                  {t("data")}
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}