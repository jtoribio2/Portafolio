"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const locales = [
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
  { code: "en", label: "EN" },
];

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const currentLocale = pathname.split("/")[1] || "es";

  const changeLocale = (locale: string) => {
    const parts = pathname.split("/");

    parts[1] = locale;

    router.push(parts.join("/"));
    setMenuOpen(false);
  };

  const links = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      bg="rgba(9, 9, 11, 0.75)"
      backdropFilter="blur(16px)"
    >
      <Container maxW="1200px">
        <Flex
          h="72px"
          align="center"
          justify="space-between"
        >
          <Link
            href="#top"
            fontSize="lg"
            fontWeight="700"
            letterSpacing="-0.03em"
            _hover={{
              textDecoration: "none",
              opacity: 0.7,
            }}
          >
            JT<span style={{ color: "#71717a" }}>.</span>
          </Link>

          {/* Desktop */}

          <HStack
            gap={8}
            display={{ base: "none", md: "flex" }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                color="gray.400"
                _hover={{
                  color: "white",
                  textDecoration: "none",
                }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}

            <HStack gap={1}>
              {locales.map((locale) => (
                <Button
                  key={locale.code}
                  variant="ghost"
                  size="xs"
                  px={2}
                  py={1}
                  borderRadius="md"
                  fontSize="xs"
                  fontWeight="600"
                  color={
                    currentLocale === locale.code
                      ? "white"
                      : "gray.600"
                  }
                  bg={
                    currentLocale === locale.code
                      ? "whiteAlpha.100"
                      : "transparent"
                  }
                  onClick={() => changeLocale(locale.code)}
                  _hover={{
                    color: "white",
                    bg: "whiteAlpha.100",
                  }}
                >
                  {locale.label}
                </Button>
              ))}
            </HStack>
          </HStack>

          {/* Mobile */}

          <Button
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            color="white"
            fontSize="24px"
            minW="40px"
            h="40px"
            p={0}
            onClick={() => setMenuOpen(!menuOpen)}
            _hover={{
              bg: "whiteAlpha.100",
            }}
          >
            {menuOpen ? "×" : "☰"}
          </Button>
        </Flex>

        {/* Mobile menu */}

        {menuOpen && (
          <Box
            display={{ base: "block", md: "none" }}
            pb={6}
          >
            <Flex
              direction="column"
              gap={4}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="gray.400"
                  onClick={() => setMenuOpen(false)}
                  _hover={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <HStack gap={2} pt={2}>
                {locales.map((locale) => (
                  <Button
                    key={locale.code}
                    variant="ghost"
                    size="sm"
                    px={2}
                    color={
                      currentLocale === locale.code
                        ? "white"
                        : "gray.600"
                    }
                    onClick={() => changeLocale(locale.code)}
                    _hover={{
                      color: "white",
                      bg: "whiteAlpha.100",
                    }}
                  >
                    {locale.label}
                  </Button>
                ))}
              </HStack>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
}