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
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

const frontend = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
];

const backend = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "NestJS", icon: SiNestjs },
];

const tools = [
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
];

function TechnologyCard({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ElementType;
}) {
  return (
    <MotionBox
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Flex
        align="center"
        gap={4}
        p={4}
        border="1px solid"
        borderColor="whiteAlpha.100"
        borderRadius="xl"
        bg="whiteAlpha.30"
        _hover={{
          borderColor: "whiteAlpha.300",
          bg: "whiteAlpha.50",
        }}
        transition="all 0.2s"
      >
        <Box
          fontSize="24px"
          color="gray.300"
        >
          <Icon />
        </Box>

        <Text
          fontSize="sm"
          fontWeight="500"
          color="gray.300"
        >
          {name}
        </Text>
      </Flex>
    </MotionBox>
  );
}

function TechnologyGroup({
  title,
  technologies,
}: {
  title: string;
  technologies: typeof frontend;
}) {
  return (
    <VStack
      align="start"
      gap={4}
      w="full"
    >
      <Text
        fontSize="sm"
        color="gray.500"
        fontFamily="mono"
      >
        {title}
      </Text>

      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
        }}
        gap={3}
        w="full"
      >
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.name}
            {...technology}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <Box
      id="skills"
      py={{ base: 24, md: 32 }}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
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
          <Box minW={{ lg: "300px" }}>
            <Text
              fontSize="sm"
              color="gray.600"
              mb={3}
              fontFamily="mono"
            >
              02 / STACK
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

            <Text
              mt={5}
              color="gray.500"
              maxW="300px"
              lineHeight="1.7"
            >
              {t("subtitle")}
            </Text>
          </Box>

          <VStack
            align="start"
            gap={8}
            w="full"
            maxW="700px"
          >
            <MotionBox
              w="full"
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
                amount: 0.2,
              }}
            >
              <TechnologyGroup
                title={t("frontend")}
                technologies={frontend}
              />
            </MotionBox>

            <MotionBox
              w="full"
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
                amount: 0.2,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <TechnologyGroup
                title={t("backend")}
                technologies={backend}
              />
            </MotionBox>

            <MotionBox
              w="full"
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
                amount: 0.2,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <TechnologyGroup
                title={t("database")}
                technologies={tools}
              />
            </MotionBox>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}