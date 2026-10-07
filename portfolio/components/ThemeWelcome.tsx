"use client";

import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Check, Palette } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeWelcome() {
  const t = useTranslations("ThemeWelcome");

  const {
    theme,
    setTheme,
    themes,
    hasChosenTheme,
    isThemeReady,
  } = useTheme();

  const handleThemeSelect = (
    themeName: keyof typeof themes
  ) => {
    setTheme(themeName);
  };

  /*
   * Mientras no sepamos qué hay en localStorage,
   * no mostramos nada.
   *
   * Esto evita que el popup aparezca durante la
   * hidratación cuando el usuario ya tiene un tema.
   */
  if (!isThemeReady) {
    return null;
  }

  /*
   * Si el usuario ya tiene un tema guardado,
   * tampoco mostramos el popup.
   */
  if (hasChosenTheme) {
    return null;
  }

  return (
    <Box
      position="fixed"
      inset="0"
      zIndex={9999}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="rgba(0, 0, 0, 0.78)"
      backdropFilter="blur(14px)"
      px={4}
    >
      <Box
        bg="var(--background)"
        color="var(--foreground)"
        border="1px solid"
        borderColor="var(--border)"
        borderRadius="2xl"
        boxShadow="0 30px 100px rgba(0, 0, 0, 0.5)"
        overflow="hidden"
        maxW="720px"
        w="full"
        position="relative"
      >
        <Box
          position="absolute"
          top="-120px"
          right="-100px"
          w="280px"
          h="280px"
          borderRadius="full"
          bg="var(--accent)"
          opacity={0.08}
          filter="blur(80px)"
          pointerEvents="none"
        />

        <Box p={{ base: 6, md: 10 }}>
          <VStack gap={7} align="stretch">
            <VStack gap={3} textAlign="center">
              <Box
                w="52px"
                h="52px"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="var(--border)"
                color="var(--accent)"
              >
                <Palette size={24} />
              </Box>

              <Heading
                fontSize={{
                  base: "2xl",
                  md: "3xl",
                }}
                letterSpacing="-0.04em"
                color="var(--foreground)"
              >
                {t("title")}
              </Heading>

              <Text
                color="var(--muted)"
                fontSize={{
                  base: "sm",
                  md: "md",
                }}
                maxW="500px"
                lineHeight="1.7"
              >
                {t("description")}
              </Text>
            </VStack>

            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
              }}
              gap={3}
            >
              {Object.entries(themes).map(
                ([key, selectedTheme]) => {
                  const themeName =
                    key as keyof typeof themes;

                  const isSelected =
                    theme === themeName;

                  return (
                    <Button
                      key={key}
                      type="button"
                      variant="ghost"
                      h={{
                        base: "72px",
                        md: "82px",
                      }}
                      p={3}
                      border="1px solid"
                      borderColor={
                        isSelected
                          ? selectedTheme.accent
                          : "var(--border)"
                      }
                      borderRadius="xl"
                      bg={
                        isSelected
                          ? "var(--border)"
                          : "transparent"
                      }
                      color="var(--foreground)"
                      display="flex"
                      flexDirection="column"
                      gap={2}
                      position="relative"
                      overflow="hidden"
                      cursor="pointer"
                      _hover={{
                        bg: "var(--border)",
                        borderColor:
                          selectedTheme.accent,
                        transform:
                          "translateY(-2px)",
                      }}
                      transition="all 0.2s ease"
                      onClick={() =>
                        handleThemeSelect(
                          themeName
                        )
                      }
                    >
                      <Box
                        w="25px"
                        h="25px"
                        borderRadius="full"
                        bg={
                          selectedTheme.accent
                        }
                        border="2px solid"
                        borderColor={
                          selectedTheme.foreground
                        }
                        boxShadow={`0 0 18px ${selectedTheme.accent}`}
                        flexShrink={0}
                      />

                      <Text
                        fontSize="xs"
                        fontWeight="500"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        maxW="100%"
                      >
                        {t(
                          `themes.${key}`
                        )}
                      </Text>

                      {isSelected && (
                        <Box
                          position="absolute"
                          top="6px"
                          right="6px"
                          w="18px"
                          h="18px"
                          borderRadius="full"
                          bg={
                            selectedTheme.accent
                          }
                          color={
                            selectedTheme.background
                          }
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Check size={11} />
                        </Box>
                      )}
                    </Button>
                  );
                }
              )}
            </Grid>

            <Text
              textAlign="center"
              fontSize="xs"
              color="var(--muted)"
              opacity={0.8}
            >
              {t("footer")}
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}