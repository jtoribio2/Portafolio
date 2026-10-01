"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Palette, Check } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeSelector() {
  const t = useTranslations("ThemeSelector");
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Box position="relative">
      <IconButton
        aria-label={t("ariaLabel")}
        variant="ghost"
        size="sm"
        color="var(--muted)"
        onClick={() => setOpen(!open)}
        _hover={{
          color: "var(--foreground)",
          bg: "var(--border)",
        }}
      >
        <Palette size={17} />
      </IconButton>

      {open && (
        <Box
          position="absolute"
          top="calc(100% + 12px)"
          right="0"
          w="280px"
          p={3}
          border="1px solid"
          borderColor="var(--border)"
          borderRadius="xl"
          bg="var(--background)"
          boxShadow="0 20px 50px rgba(0,0,0,0.25)"
          zIndex="200"
        >
          <Text
            fontSize="xs"
            fontWeight="600"
            color="var(--muted)"
            mb={3}
            px={1}
          >
            {t("title")}
          </Text>

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={1}
          >
            {Object.entries(themes).map(
              ([key, selectedTheme]) => {
                const isSelected = theme === key;

                return (
                  <Button
                    key={key}
                    variant="ghost"
                    justifyContent="flex-start"
                    w="full"
                    h="44px"
                    px={2}
                    fontWeight="400"
                    color="var(--foreground)"
                    bg={
                      isSelected
                        ? "var(--border)"
                        : "transparent"
                    }
                    _hover={{
                      bg: "var(--border)",
                    }}
                    onClick={() => {
                      setTheme(
                        key as keyof typeof themes
                      );
                      setOpen(false);
                    }}
                  >
                    <Box
                      position="relative"
                      flexShrink={0}
                      w="18px"
                      h="18px"
                      borderRadius="full"
                      bg={selectedTheme.accent}
                      border="2px solid"
                      borderColor={selectedTheme.border}
                      boxShadow={`0 0 10px ${selectedTheme.accent}`}
                    >
                      {isSelected && (
                        <Box
                          position="absolute"
                          inset="0"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Check
                            size={11}
                            color={
                              selectedTheme.background
                            }
                          />
                        </Box>
                      )}
                    </Box>

                    <Text
                      fontSize="xs"
                      ml={2}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                    >
                      {t(`themes.${key}`)}
                    </Text>
                  </Button>
                );
              }
            )}
          </Grid>
        </Box>
      )}
    </Box>
  );
}