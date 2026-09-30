"use client";

import {
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
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <Box
      id="contact"
      py={{ base: 24, md: 32 }}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align={{ base: "flex-start", lg: "center" }}
            gap={10}
            p={{ base: 7, md: 10 }}
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="2xl"
            bg="whiteAlpha.30"
          >
            <VStack align="start" gap={5} maxW="650px">
              <Text
                fontSize="sm"
                color="gray.600"
                fontFamily="mono"
              >
                05 / CONTACT
              </Text>

              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                letterSpacing="-0.05em"
              >
                {t("title")}
              </Heading>

              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
              >
                {t("description")}
              </Text>

              <HStack gap={3} flexWrap="wrap">
                <Link
                  href="mailto:jtoribioprog@gmail.com"
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
                    <Mail size={18} />
                    {t("email")}
                    <ArrowUpRight size={17} />
                  </Button>
                </Link>

                <Link
                  href="tel:+34665667846"
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
                    <Phone size={18} />
                    665 667 846
                  </Button>
                </Link>
              </HStack>
            </VStack>

            <HStack gap={3}>
              <Link
                href="https://github.com/jtoribio2"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Flex
                  w="48px"
                  h="48px"
                  align="center"
                  justify="center"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  borderRadius="full"
                  color="gray.400"
                  _hover={{
                    color: "white",
                    bg: "whiteAlpha.100",
                  }}
                  transition="all 0.2s"
                >
                  <FaGithub size={20} />
                </Flex>
              </Link>

              <Link
                href="https://www.linkedin.com/in/joel-toribio-palomino-797017428/"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Flex
                  w="48px"
                  h="48px"
                  align="center"
                  justify="center"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  borderRadius="full"
                  color="gray.400"
                  _hover={{
                    color: "white",
                    bg: "whiteAlpha.100",
                  }}
                  transition="all 0.2s"
                >
                  <FaLinkedin size={20} />
                </Flex>
              </Link>
            </HStack>
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
}