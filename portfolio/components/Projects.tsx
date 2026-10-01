"use client";

import { useState } from "react";

import {
  Badge,
  Box,
  Button,
  Container,
  Dialog,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

import { plannerProject } from "@/config/projects/planner";

const MotionBox = motion.create(Box);

const projects = [
  {
    key: "planner",
    technologies: plannerProject.technologies,
    github: null,
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
  {
    key: "climbing",
    technologies: ["Java", "JDBC", "SQL", "REST API"],
    github: "https://github.com/jtoribio2",
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const isPlannerOpen = selectedProject === "planner";

  return (
    <Box
      id="projects"
      py={{
        base: 24,
        md: 32,
      }}
      borderTop="1px solid"
      borderColor="var(--border)"
    >
      <Container maxW="1200px">
        {/* CABECERA */}
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
              color="var(--muted)"
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
              color="var(--foreground)"
            >
              {t("title")}
            </Heading>
          </Box>

          <Text color="var(--muted)" maxW="400px" lineHeight="1.7">
            {t("subtitle")}
          </Text>
        </Flex>

        {/* PROYECTOS */}
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
                borderColor="var(--border)"
                borderRadius="2xl"
                bg="color-mix(in srgb, var(--background) 85%, white 5%)"
                position="relative"
                overflow="hidden"
                _hover={{
                  borderColor: "var(--accent)",
                  transform: "translateY(-4px)",
                }}
                transition="all 0.25s"
              >
                {/* NUMERO */}
                <Text
                  position="absolute"
                  top={5}
                  right={6}
                  fontSize="xs"
                  fontFamily="mono"
                  color="var(--muted)"
                >
                  0{index + 1}
                </Text>

                {/* ICONO */}
                <Flex
                  w="50px"
                  h="50px"
                  align="center"
                  justify="center"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="var(--border)"
                  bg="color-mix(in srgb, var(--background) 70%, white 10%)"
                  mb={7}
                >
                  <Text
                    fontFamily="mono"
                    fontSize="sm"
                    color="var(--accent)"
                  >
                    {"</>"}
                  </Text>
                </Flex>

                {/* TITULO */}
                <Heading
                  fontSize={{
                    base: "xl",
                    md: "2xl",
                  }}
                  letterSpacing="-0.03em"
                  color="var(--foreground)"
                >
                  {project.key === "planner"
                    ? t("planner")
                    : t(project.key)}
                </Heading>

                {/* DESCRIPCION */}
                <Text
                  mt={4}
                  color="var(--muted)"
                  lineHeight="1.8"
                  minH={{
                    base: "auto",
                    md: "85px",
                  }}
                >
                  {project.key === "planner"
                    ? t("plannerDescription")
                    : t(`${project.key}Description`)}
                </Text>

                {/* TECNOLOGIAS */}
                <HStack mt={6} gap={2} flexWrap="wrap">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="subtle"
                      bg="color-mix(in srgb, var(--accent) 15%, transparent)"
                      color="var(--foreground)"
                      px={2.5}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                    >
                      {technology}
                    </Badge>
                  ))}
                </HStack>

                {/* BOTONES */}
                <Flex mt={8} gap={3} flexWrap="wrap">
                  {project.github && (
                    <Button
                      asChild
                      size="sm"
                      bg="var(--accent)"
                      color="var(--background)"
                      borderRadius="full"
                      _hover={{
                        opacity: 0.85,
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
                  )}

                  {project.key === "planner" && (
                    <Button
                      size="sm"
                      variant="outline"
                      borderColor="var(--border)"
                      color="var(--foreground)"
                      borderRadius="full"
                      _hover={{
                        borderColor: "var(--accent)",
                        color: "var(--accent)",
                      }}
                      onClick={() => setSelectedProject("planner")}
                    >
                      {t("viewProject")}
                      <ArrowUpRight size={15} />
                    </Button>
                  )}
                </Flex>

                {/* PROYECTO PRIVADO */}
                {project.key === "planner" && (
                  <Text
                    mt={4}
                    fontSize="xs"
                    color="var(--muted)"
                    fontFamily="mono"
                  >
                    {t("privateProject")}
                  </Text>
                )}
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* DIALOG PLANNER */}
      <Dialog.Root
        open={isPlannerOpen}
        onOpenChange={(details) => {
          if (!details.open) {
            setSelectedProject(null);
          }
        }}
        size="xl"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content
            bg="var(--background)"
            color="var(--foreground)"
            border="1px solid"
            borderColor="var(--border)"
            borderRadius="2xl"
            maxH="85vh"
          >
            {/* HEADER */}
            <Dialog.Header
              borderBottom="1px solid"
              borderColor="var(--border)"
              pb={5}
            >
              <Flex justify="space-between" align="flex-start" gap={6}>
                <Box>
                  <Text
                    fontSize="xs"
                    fontFamily="mono"
                    color="var(--muted)"
                    mb={2}
                  >
                    01 / INTERNAL PROJECT
                  </Text>

                  <Dialog.Title
                    fontSize={{
                      base: "2xl",
                      md: "3xl",
                    }}
                    letterSpacing="-0.03em"
                  >
                    {t("planner")}
                  </Dialog.Title>
                </Box>

                {/* X PARA CERRAR */}
                <Dialog.CloseTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    minW="40px"
                    w="40px"
                    h="40px"
                    p={0}
                    color="var(--muted)"
                    aria-label={t("close")}
                    _hover={{
                      color: "var(--foreground)",
                      bg: "transparent",
                    }}
                  >
                    <X size={20} />
                  </Button>
                </Dialog.CloseTrigger>
              </Flex>
            </Dialog.Header>

            {/* BODY */}
            <Dialog.Body py={8}>
              <VStack align="stretch" gap={10}>
                {/* DESCRIPCION */}
                <Box>
                  <Text
                    color="var(--foreground)"
                    fontSize={{
                      base: "md",
                      md: "lg",
                    }}
                    lineHeight="1.8"
                  >
                    {t("plannerDetails.description")}
                  </Text>
                </Box>

                {/* STACK */}
                <Box>
                  <Text
                    fontSize="sm"
                    fontFamily="mono"
                    color="var(--muted)"
                    mb={4}
                  >
                    STACK
                  </Text>

                  <HStack gap={2} flexWrap="wrap">
                    {plannerProject.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        bg="color-mix(in srgb, var(--accent) 15%, transparent)"
                        color="var(--foreground)"
                        px={3}
                        py={1.5}
                        borderRadius="md"
                        fontSize="xs"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </HStack>
                </Box>

                {/* MI TRABAJO */}
                <Box>
                  <Heading
                    fontSize="2xl"
                    letterSpacing="-0.03em"
                    mb={3}
                  >
                    {t("plannerDetails.myWork")}
                  </Heading>

                  <Text color="var(--muted)" lineHeight="1.8" mb={7}>
                    {t("plannerDetails.myWorkDescription")}
                  </Text>

                  {/* AREAS */}
                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                    }}
                    gap={4}
                  >
                    {plannerProject.contribution.areas.map((area) => {
                      const features = t.raw(
                        `plannerDetails.areas.${area.id}.features`,
                      ) as string[];

                      return (
                        <Box
                          key={area.id}
                          p={6}
                          border="1px solid"
                          borderColor="var(--border)"
                          borderRadius="xl"
                          bg="color-mix(in srgb, var(--background) 90%, white 4%)"
                        >
                          <Heading
                            fontSize="lg"
                            mb={3}
                            letterSpacing="-0.02em"
                          >
                            {t(
                              `plannerDetails.areas.${area.id}.title`,
                            )}
                          </Heading>

                          <Text
                            color="var(--muted)"
                            fontSize="sm"
                            lineHeight="1.7"
                            mb={5}
                          >
                            {t(
                              `plannerDetails.areas.${area.id}.description`,
                            )}
                          </Text>

                          <VStack align="stretch" gap={2}>
                            {features.map((feature, featureIndex) => (
                              <Flex
                                key={`${area.id}-${featureIndex}`}
                                gap={3}
                                align="flex-start"
                              >
                                <Text
                                  color="var(--accent)"
                                  fontSize="sm"
                                  mt="2px"
                                >
                                  →
                                </Text>

                                <Text
                                  color="var(--foreground)"
                                  fontSize="sm"
                                  lineHeight="1.6"
                                >
                                  {feature}
                                </Text>
                              </Flex>
                            ))}
                          </VStack>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </Box>

                {/* HIGHLIGHTS */}
                <Box>
                  <Text
                    fontSize="sm"
                    fontFamily="mono"
                    color="var(--muted)"
                    mb={5}
                  >
                    HIGHLIGHTS
                  </Text>

                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                    }}
                    gap={4}
                  >
                    {plannerProject.highlights.map((highlight) => (
                      <Box
                        key={highlight.id}
                        p={5}
                        borderLeft="2px solid"
                        borderColor="var(--accent)"
                      >
                        <Heading fontSize="md" mb={2}>
                          {t(
                            `plannerDetails.highlights.${highlight.id}.title`,
                          )}
                        </Heading>

                        <Text
                          color="var(--muted)"
                          fontSize="sm"
                          lineHeight="1.7"
                        >
                          {t(
                            `plannerDetails.highlights.${highlight.id}.description`,
                          )}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
}