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
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSwagger,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import { Database } from "lucide-react";
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
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PHP", icon: SiPhp },
];

const databases = [
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL Server", icon: Database },
];

const tools = [
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "Swagger", icon: SiSwagger },
  { name: "Windows", icon: FaWindows },
  { name: "Figma", icon: SiFigma },
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
        borderColor="var(--border)"
        borderRadius="xl"
        bg="color-mix(in srgb, var(--background) 85%, white 5%)"
        _hover={{
          borderColor: "var(--accent)",
        }}
        transition="all 0.2s"
      >
        <Box
          fontSize="24px"
          color="var(--accent)"
        >
          <Icon />
        </Box>

        <Text
          fontSize="sm"
          fontWeight="500"
          color="var(--foreground)"
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
  technologies: {
    name: string;
    icon: React.ElementType;
  }[];
}) {
  return (
    <VStack
      align="start"
      gap={4}
      w="full"
    >
      <Text
        fontSize="sm"
        color="var(--muted)"
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
      py={{
        base: 24,
        md: 32,
      }}
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
          <Box minW={{ lg: "300px" }}>
            <Text
              fontSize="sm"
              color="var(--muted)"
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
                title={t("databases")}
                technologies={databases}
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
                delay: 0.3,
              }}
            >
              <TechnologyGroup
                title={t("tools")}
                technologies={tools}
              />
            </MotionBox>

          </VStack>

        </Flex>
      </Container>
    </Box>
  );
}