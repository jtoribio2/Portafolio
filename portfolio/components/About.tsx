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
      borderColor="whiteAlpha.100"
    >
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 24 }}
          align="flex-start"
        >
          <Box minW={{ lg: "300px" }}>
            <Text
              fontSize="sm"
              color="gray.600"
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
            >
              {t("title")}
            </Heading>
          </Box>

          <VStack
            align="start"
            gap={6}
            maxW="700px"
          >
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
                color="gray.300"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
                lineHeight="1.8"
              >
                {t("description")}
              </Text>
            </MotionBox>

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
                color="gray.500"
                fontSize="md"
                lineHeight="1.8"
              >
                {t("description2")}
              </Text>
            </MotionBox>

            <SimpleGrid
              columns={{
                base: 1,
                md: 3,
              }}
              gap={4}
              w="full"
              pt={4}
            >
              <Box
                p={5}
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="xl"
                bg="whiteAlpha.30"
              >
                <Code2
                  size={22}
                  color="#a1a1aa"
                />

                <Text
                  mt={4}
                  fontWeight="600"
                >
                  Clean Code
                </Text>

                <Text
                  mt={2}
                  fontSize="sm"
                  color="gray.500"
                >
                  {t("cleanCode")}
                </Text>
              </Box>

              <Box
                p={5}
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="xl"
                bg="whiteAlpha.30"
              >
                <Layers3
                  size={22}
                  color="#a1a1aa"
                />

                <Text
                  mt={4}
                  fontWeight="600"
                >
                  Full Stack
                </Text>

                <Text
                  mt={2}
                  fontSize="sm"
                  color="gray.500"
                >
                  {t("fullStack")}
                </Text>
              </Box>

              <Box
                p={5}
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="xl"
                bg="whiteAlpha.30"
              >
                <Database
                  size={22}
                  color="#a1a1aa"
                />

                <Text
                  mt={4}
                  fontWeight="600"
                >
                  Data
                </Text>

                <Text
                  mt={2}
                  fontSize="sm"
                  color="gray.500"
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