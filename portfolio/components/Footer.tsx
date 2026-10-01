"use client";

import {
  Box,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import AudioPlayer from "@/components/AudioPlayer";

export default function Footer() {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="90"
      borderTop="1px solid"
      borderColor="var(--border)"
      bg="color-mix(in srgb, var(--background) 88%, transparent)"
      backdropFilter="blur(16px)"
    >
      <Container maxW="1200px">
        <Flex
          minH="52px"
          align="center"
          justify="space-between"
          gap={6}
        >
          <Box
            display={{ base: "none", md: "block" }}
            flexShrink={0}
          >
            <Text
              fontSize="sm"
              fontWeight="700"
              color="var(--foreground)"
            >
              JT<span style={{ color: "var(--accent)" }}>.</span>
            </Text>
          </Box>

          <Box flex="1">
            <AudioPlayer />
          </Box>

          <Text
            display={{ base: "none", lg: "block" }}
            fontSize="xs"
            color="var(--muted)"
            whiteSpace="nowrap"
          >
            © 2026 Joel Toribio
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}