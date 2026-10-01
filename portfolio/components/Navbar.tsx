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
import ThemeSelector from "@/components/ThemeSelector";

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
      borderColor="var(--border)"
      bg="color-mix(in srgb, var(--background) 82%, transparent)"
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
            color="var(--foreground)"
            _hover={{
              textDecoration: "none",
              opacity: 0.7,
            }}
          >
            JT
            <span
              style={{
                color: "var(--accent)",
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
                color="var(--muted)"
                _hover={{
                  color: "var(--foreground)",
                  textDecoration: "none",
                }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}

            {/* Idiomas */}

            <HStack gap={1}>
              {locales.map((locale) => {
                const active =
                  currentLocale === locale.code;

                return (
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
                      active
                        ? "var(--foreground)"
                        : "var(--muted)"
                    }
                    bg={
                      active
                        ? "var(--border)"
                        : "transparent"
                    }
                    onClick={() =>
                      changeLocale(locale.code)
                    }
                    _hover={{
                      color: "var(--foreground)",
                      bg: "var(--border)",
                    }}
                  >
                    {locale.label}
                  </Button>
                );
              })}
            </HStack>

            {/* Selector de temas */}

            <ThemeSelector />
          </HStack>

          {/* Mobile */}

          <Button
            display={{
              base: "flex",
              md: "none",
            }}
            variant="ghost"
            color="var(--foreground)"
            fontSize="24px"
            minW="40px"
            h="40px"
            p={0}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            _hover={{
              bg: "var(--border)",
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
                  color="var(--muted)"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  _hover={{
                    color: "var(--foreground)",
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

                {locales.map((locale) => {
                  const active =
                    currentLocale === locale.code;

                  return (
                    <Button
                      key={locale.code}
                      variant="ghost"
                      size="sm"
                      px={2}
                      color={
                        active
                          ? "var(--foreground)"
                          : "var(--muted)"
                      }
                      bg={
                        active
                          ? "var(--border)"
                          : "transparent"
                      }
                      onClick={() =>
                        changeLocale(locale.code)
                      }
                      _hover={{
                        color: "var(--foreground)",
                        bg: "var(--border)",
                      }}
                    >
                      {locale.label}
                    </Button>
                  );
                })}

                {/* Selector de temas móvil */}

                <ThemeSelector />
              </HStack>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
}