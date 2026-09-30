"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

const projects = [
  {
    key: "planner",
    technologies: ["Next.js", "NestJS", "TypeScript", "SQL"],
    github: "https://github.com/jtoribio2",
  },
  {
    key: "pricePoster",
    technologies: ["Next.js", "NestJS", "TypeScript", "Docker"],
    github: "https://github.com/jtoribio2",
  },
  {
    key: "api",
    technologies: ["Java", "Spring Boot", "JPA", "MySQL", "JWT"],
    github: "https://github.com/jtoribio2",
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <Box
      id="projects"
      py={{ base: 24, md: 32 }}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="1200px">
        {/* Cabecera */}

        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          justify="space-between"
          align={{
            base: "flex-start",
            md: "flex-end",
          }}
          gap={6}
          mb={14}
        >
          <Box>
            <Text
              fontSize="sm"
              color="gray.600"
              mb={3}
              fontFamily="mono"
            >
              04 / PROJECTS
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

          <Text
            color="gray.500"
            maxW="400px"
            lineHeight="1.7"
          >
            {t("subtitle")}
          </Text>
        </Flex>

        {/* Proyectos */}

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          gap={5}
        >
          {projects.map((project, index) => (
            <MotionBox
              key={project.key}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Box
                h="full"
                p={{
                  base: 6,
                  md: 8,
                }}
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="2xl"
                bg="whiteAlpha.30"
                position="relative"
                overflow="hidden"
                _hover={{
                  borderColor: "whiteAlpha.200",
                  transform: "translateY(-4px)",
                }}
                transition="all 0.25s"
              >
                {/* Número */}

                <Text
                  position="absolute"
                  top={5}
                  right={6}
                  fontSize="xs"
                  fontFamily="mono"
                  color="gray.700"
                >
                  0{index + 1}
                </Text>

                {/* Icono / visual */}

                <Flex
                  w="50px"
                  h="50px"
                  align="center"
                  justify="center"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  bg="whiteAlpha.50"
                  mb={7}
                >
                  <Text
                    fontFamily="mono"
                    fontSize="sm"
                    color="gray.400"
                  >
                    {"</>"}
                  </Text>
                </Flex>

                <Heading
                  fontSize={{
                    base: "xl",
                    md: "2xl",
                  }}
                  letterSpacing="-0.03em"
                >
                  {t(project.key)}
                </Heading>

                <Text
                  mt={4}
                  color="gray.500"
                  lineHeight="1.8"
                  minH={{
                    base: "auto",
                    md: "85px",
                  }}
                >
                  {t(`${project.key}Description`)}
                </Text>

                {/* Tecnologías */}

                <HStack
                  mt={6}
                  gap={2}
                  flexWrap="wrap"
                >
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="subtle"
                      bg="whiteAlpha.50"
                      color="gray.400"
                      px={2.5}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                    >
                      {technology}
                    </Badge>
                  ))}
                </HStack>

                {/* Botones */}

                <Flex
                  mt={8}
                  gap={3}
                  flexWrap="wrap"
                >
                  <Button
                    asChild
                    size="sm"
                    bg="white"
                    color="black"
                    borderRadius="full"
                    _hover={{
                      bg: "gray.200",
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("viewCode")}
                      <FaGithub size={15} />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    borderColor="whiteAlpha.200"
                    color="gray.400"
                    borderRadius="full"
                    _hover={{
                      bg: "whiteAlpha.50",
                      color: "white",
                    }}
                  >
                    {t("viewProject")}
                    <ArrowUpRight size={15} />
                  </Button>
                </Flex>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}