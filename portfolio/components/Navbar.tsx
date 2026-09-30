"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useColorMode } from "@/components/ui/color-mode";

const locales = [
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
  { code: "en", label: "EN" },
];

const emptySubscribe = () => () => {};

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();

  const [menuOpen, setMenuOpen] = useState(false);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

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

  const isDark = mounted && colorMode === "dark";

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      borderBottom="1px solid"
      borderColor={
        isDark ? "whiteAlpha.100" : "blackAlpha.200"
      }
      bg={
        isDark
          ? "rgba(9, 9, 11, 0.75)"
          : "rgba(250, 250, 250, 0.8)"
      }
      backdropFilter="blur(16px)"
    >
      <Container maxW="1200px">
        <Flex
          h="72px"
          align="center"
          justify="space-between"
        >
          {/* Logo */}

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
            JT
            <span
              style={{
                color: isDark ? "#71717a" : "#a1a1aa",
              }}
            >
              .
            </span>
          </Link>

          {/* Desktop */}

          <HStack
            gap={8}
            display={{
              base: "none",
              md: "flex",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                color={
                  isDark ? "gray.400" : "gray.600"
                }
                _hover={{
                  color: isDark ? "white" : "black",
                  textDecoration: "none",
                }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}

            {/* Idiomas */}

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
                      ? isDark
                        ? "white"
                        : "black"
                      : isDark
                        ? "gray.600"
                        : "gray.400"
                  }
                  bg={
                    currentLocale === locale.code
                      ? "blackAlpha.100"
                      : "transparent"
                  }
                  onClick={() =>
                    changeLocale(locale.code)
                  }
                  _hover={{
                    color: isDark
                      ? "white"
                      : "black",
                    bg: isDark
                      ? "whiteAlpha.100"
                      : "blackAlpha.100",
                  }}
                >
                  {locale.label}
                </Button>
              ))}
            </HStack>

            {/* Tema */}

            <IconButton
              aria-label="Cambiar tema"
              variant="ghost"
              size="sm"
              color={
                isDark ? "gray.400" : "gray.600"
              }
              onClick={toggleColorMode}
              _hover={{
                color: isDark
                  ? "white"
                  : "black",
                bg: isDark
                  ? "whiteAlpha.100"
                  : "blackAlpha.100",
              }}
            >
              {mounted ? (
                isDark ? (
                  <Sun size={17} />
                ) : (
                  <Moon size={17} />
                )
              ) : (
                <Box
                  w="17px"
                  h="17px"
                />
              )}
            </IconButton>
          </HStack>

          {/* Mobile */}

          <Button
            display={{
              base: "flex",
              md: "none",
            }}
            variant="ghost"
            color={
              isDark ? "white" : "black"
            }
            fontSize="24px"
            minW="40px"
            h="40px"
            p={0}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            _hover={{
              bg: isDark
                ? "whiteAlpha.100"
                : "blackAlpha.100",
            }}
          >
            {menuOpen ? "×" : "☰"}
          </Button>
        </Flex>

        {/* Mobile menu */}

        {menuOpen && (
          <Box
            display={{
              base: "block",
              md: "none",
            }}
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
                  color={
                    isDark
                      ? "gray.400"
                      : "gray.600"
                  }
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  _hover={{
                    color: isDark
                      ? "white"
                      : "black",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <HStack
                gap={2}
                pt={2}
              >
                {/* Idiomas móvil */}

                {locales.map((locale) => (
                  <Button
                    key={locale.code}
                    variant="ghost"
                    size="sm"
                    px={2}
                    color={
                      currentLocale === locale.code
                        ? isDark
                          ? "white"
                          : "black"
                        : isDark
                          ? "gray.600"
                          : "gray.400"
                    }
                    onClick={() =>
                      changeLocale(locale.code)
                    }
                    _hover={{
                      color: isDark
                        ? "white"
                        : "black",
                      bg: isDark
                        ? "whiteAlpha.100"
                        : "blackAlpha.100",
                    }}
                  >
                    {locale.label}
                  </Button>
                ))}

                {/* Tema móvil */}

                <IconButton
                  aria-label="Cambiar tema"
                  variant="ghost"
                  size="sm"
                  color={
                    isDark
                      ? "gray.400"
                      : "gray.600"
                  }
                  onClick={toggleColorMode}
                  _hover={{
                    color: isDark
                      ? "white"
                      : "black",
                    bg: isDark
                      ? "whiteAlpha.100"
                      : "blackAlpha.100",
                  }}
                >
                  {mounted ? (
                    isDark ? (
                      <Sun size={17} />
                    ) : (
                      <Moon size={17} />
                    )
                  ) : (
                    <Box
                      w="17px"
                      h="17px"
                    />
                  )}
                </IconButton>
              </HStack>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
}